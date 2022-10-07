const { Router } = require ('express')
const router = Router()
const{createProduct, getAllProducts, getProduct, modifyProduct, deleteProduct } = require('../controllers')


router.post('/products', createProduct)
router.get('/products/', getAllProducts)
router.get('/products/:productid', getProduct)
router.put('/products/:productid', modifyProduct)
router.delete('/products/:productid', deleteProduct)


module.exports = router