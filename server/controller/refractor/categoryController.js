const Categories = require('../models/categoriesModel')

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

module.exports = { 
    getCategories,
    createCategories,
}