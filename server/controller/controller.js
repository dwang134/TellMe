const Categories = require('../models/categoriesModel')
const Transaction = require('../models/transactionModel')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')

//@route: GET /api/categories
const getCategories= asyncHandler(async (req, res) => {
    const data = await Categories.find({})
    const filterData = await data.map((exp)=> Object.assign({}, {type: exp.type, color: exp.color}));
    res.json(filterData);
})

//@route: POST /api/categories
const createCategories= asyncHandler(async (req,res) => {
  const Create = new Categories({
      type: "Expense",
      color: "rgb(255, 205, 86)"
  })

  await Create.save((err)=> {
      if (!err) return res.json(Create);
      return res.status(400).json({message: `${err}`});
  })
})

//@route: GET /api/transaction
const getTransactions = asyncHandler(async (req, res)=> {
    const data = await Transaction.find({})
    res.json(data);
})

//@route: POST /api/transactons
const createTransaction= async (req, res)=> {
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
}

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

//@route: GET /api/users
const getUsers= asyncHandler(async (req, res)=> {
  res.json({message: 'Get all users'});
})

//@route: GET/api/users/me
const getCurrentUser = asyncHandler(async (req,res)=> {
  res.json({message: 'current user data fetched'});
})

//@route: POST /api/users
const registerUser = asyncHandler(async(req, res)=> {
  const {name, email, password} = req.body;

  if (!name || !email || !password){
    res.status(400);
    throw new Error('Please add all fields')
  }

  //check if user exists
  const userExists = await User.findOne({email})
  if (userExists){
    res.status(400);
    throw new Error('User already exists');
  }

  //hash password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  //create user
  const user = await User.create({
    name,
    email,
    password: hashPassword
  })

  if (user){
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email
    })
  }else{
    res.status(400)
    throw new Error('Invalid user data');
  }

})

//@route: POST /api/users/login authenticate user login 
const loginUser = (req, res)=> {
  res.json({message: 'Login User'});
}


module.exports = {
    createCategories,
    getCategories,
    getUsers,
    createTransaction,
    getTransactions,
    deleteTransaction,
    getLabels,
    registerUser,
    loginUser,
    getCurrentUser
}