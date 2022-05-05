

//get categories
const createCategories= (req,res) => {
    res.status(200).json({message: 'Get Request from Categories'});
} 

module.exports = {
    createCategories
}