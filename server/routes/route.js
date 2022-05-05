
const router = require('express').Router();
// const router = express.Router();
const controller = require('../controller/controller')

// routes.route('/api/categories').get((req, res)=> res.json('GET request from categories'));
router.get('/api/categories', controller.createCategories);

module.exports = router;