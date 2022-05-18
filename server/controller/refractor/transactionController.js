const Transaction = require('../models/transactionModel')

//@route: GET /api/transaction
const getTransactions = asyncHandler(async (req, res)=> {
    const data = await Transaction.find({})
    res.json(data);
})

//@route: POST /api/transactons
const createTransaction= asyncHandler(async (req, res)=> {
  if (!req.body) res.json('Invalid object');
  const {desc, type, amount, user} = req.body;
  
  const newTransaction = await new Transaction({
      desc,
      type,
      amount,
      user,
      date: new Date()
  })

  newTransaction.save((err)=> {
      if (!err) return res.json(newTransaction);
      return res.status(400).json({message: `${err}`});
  })
})

//@route: DELETE /api/transactions
const deleteTransaction = asyncHandler(async(req, res) => {  

  if (!req.body) res.status(400).json({message: 'Request body not found'});

  await Transaction.deleteOne(req.body, (err)=> {
      if (!err) res.json(`${req.body._id} deleted`);
  }).clone()
})


//merging both documents @route: GET /api/labels
const getLabels = asyncHandler(async (req, res) => {
    const data = await Transaction.aggregate([
      {
        $lookup: {
          from: "categories",
          localField: "type",
          foreignField: "type",
          as: "categoriesInfo",
        },
      },
      {
        $unwind: "$categoriesInfo",
      },
    ]);
    const filterData= data.map((exp)=> Object.assign({}, {id: exp._id, desc: exp.desc, type: exp.type, amount: exp.amount, color: exp.categoriesInfo["color"]}));
    res.json(filterData);
  
})


module.exports = {
    getTransactions,
    createTransaction,
    deleteTransaction,
    getLabels
}