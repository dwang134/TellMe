const model = require('../models/model')

//GET
const getCategories= async (req, res) => {
    const data = await model.Categories.find({})
    const filterData = await data.map((exp)=> Object.assign({}, {type: exp.type, color: exp.color}));
    return res.json(filterData);
}

const getTransactions = async (req, res)=> {
    const data = await model.Transaction.find({})
    // const filterData = await data.map((transaction)=> Object.assign({}, {desc: transaction.desc, transaction: transaction.type, amount: transaction.amount, date: transaction.date}));
    return res.json(data);
}

//PUT


//POST
const createCategories= async (req,res) => {
    const Create = new model.Categories({
        type: "Expense",
        color: "rgb(255, 205, 86)"
    })

    await Create.save((err)=> {
        if (!err) return res.json(Create);
        return res.status(400).json({message: `${err}`});
    })
} 

const createTransaction= async (req, res)=> {
    if (!req.body) return res.status(400).json('Invalid object');
    const {desc, type, amount} = req.body;
    
    const newTransaction = await new model.Transaction({
        desc,
        type,
        amount,
        date: new Date()
    })

    newTransaction.save((err)=> {
        if (!err) return res.json(newTransaction);
        return res.status(400).json({message: `${err}`});
    })
}

//DELETE
const deleteTransaction = async(req, res) => {
    if (!req.body)res.status(400).json({message: 'Request body not found'});
    await model.Transaction.deleteOne(req.body, (err)=> {
        if (!err)res.json(`${req.body.id} deleted`);
    }).clone().catch((err)=> {res.json('Error deleting transaction record')})
}   


module.exports = {
    createCategories,
    getCategories,
    createTransaction,
    getTransactions,
    deleteTransaction
}