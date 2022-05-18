//@route: GET /api/users
const getUsers= asyncHandler(async(req, res)=> {
    const data= await User.find({});
    res.json(data);
  })
  
  //@route: GET/api/users/me
  //@access: private
  const getCurrentUser = asyncHandler(async (req,res)=> {
    res.json({message: 'current user data fetched'});
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
    getUsers,
    getCurrentUser,
    registerUser,
    loginUser
}