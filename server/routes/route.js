
const router = require('express').Router();
// const router = express.Router();
const controller = require('../controller/controller')

//refractor

//categories
router.route('/api/categories').get(controller.getCategories).post(controller.createCategories);

//transactions
router.route('/api/transaction').get(controller.getTransactions).post(controller.createTransaction).delete(controller.deleteTransaction);

//single transaction
// router.route('/api/transaction/:id').get(controller.getTransaction).delete(controller.deleteTransaction);

//merged collection
router.route('/api/labels').get(controller.getLabels);


module.exports = router;