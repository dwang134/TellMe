
const router = require('express').Router();
// const router = express.Router();
const controller = require('../controller/controller')
const {protect} = require('../middleware/authMiddleware')

//refractor

//categories
router.route('/api/categories').get(controller.getCategories).post(controller.createCategories);

//transactions
router.route('/api/transactions').get(protect, controller.getTransactions).post(protect, controller.createTransaction).delete(protect,controller.deleteTransaction);

//merged collection
router.route('/api/labels').get(protect, controller.getLabels);

//User routes
router.route('/api/users').get(controller.getUsers).post(controller.registerUser);

router.route('/api/users/me').get(protect, controller.getCurrentUser);

router.route('/api/users/login').post(controller.loginUser);


module.exports = router;