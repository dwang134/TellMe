const Categories = require('../models/categoriesModel')
const Transaction = require('../models/transactionModel')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const { rest } = require('lodash')

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

//@access: private
//@route: GET /api/transactions
const getTransactions = asyncHandler(async (req, res)=> {
    const data = await Transaction.find({user: req.user.id})
    res.json(data);
})

//@access: private
//@route: POST /api/transactons
const createTransaction= asyncHandler(async (req, res)=> {

  const {desc, type, amount} = req.body;
 
  if (!req.body){
    res.status(400)
    throw new Error('Invalid object body');
  }

  const newTransaction = await Transaction.create({
    user: req.user.id,
    desc,
    type,
    amount,
    date: new Date()
  })

   //successfully created
   if (newTransaction){
    res.status(201).json({
      user: newTransaction.user,
      desc: newTransaction.desc,
      type: newTransaction.type,
      amount: newTransaction.amount,
      date: newTransaction.date
    })
  }else{
    res.status(400)
    throw new Error('Transaction cannot be created');
  }
  
  //you have to assign user
  // const {desc, type, amount, user} = req.body;
  
  // const newTransaction = await new Transaction({
  //     desc,
  //     type,
  //     amount,
  //     user,
  //     date: new Date()
  // })

  // newTransaction.save((err)=> {
  //     if (!err) return res.json(newTransaction);
  //     return res.status(400).json({message: `${err}`});
  // })
  
})

//@access: private
//@route: DELETE /api/transactions
const deleteTransaction = asyncHandler(async(req, res) => {  

  if (!req.body) res.status(400).json({message: 'Request body not found'});

  await Transaction.deleteOne(req.body, (err)=> {
      if (!err) res.json(`${req.body._id} deleted`);
  }).clone()
})

//@access: private
//merging both documents @route: GET /api/labels
const getLabels = asyncHandler(async (req, res) => {

  //this is joining all the transaction and category document
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
const getUsers= asyncHandler(async(req, res)=> {
  const data= await User.find({});
  res.json(data);
})

//@route: GET/api/users/me
//@access: Protected private
const getCurrentUser = asyncHandler(async (req,res)=> {
  const {_id, name, email} = await User.findById(req.user.id)

  res.status(200).json({
    id: _id,
    name,
    email
  })

})

//@route: POST /api/users
const registerUser = asyncHandler(async (req, res)=> {
  const {name, email, password} = req.body;

  if (!name || !email || !password){
    res.status(400);
    throw new Error('Please add all fields')
  }

  //check if user already exists
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

  //successfully created
  if (user){
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
    })
  }else{
    res.status(400)
    throw new Error('Invalid user data');
  }

})

//@route: POST /api/users/login authenticate user login 
const loginUser = asyncHandler(async(req, res)=> {
  const {email, password} = req.body;
  console.log(email+ '\n' + password);

  //check if user email exists
  const user = await User.findOne({email})

  if(user && await bcrypt.compare(password, user.password)){
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user.id),
      message: `${user.name} logged in `
    })
  }else{
    res.status(400)
    throw new Error('Invalid credentials');
  }

})

//generate JWT 
const generateToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET, {
    expiresIn: '30d'
  })
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