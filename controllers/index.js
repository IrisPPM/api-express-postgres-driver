const connect = require('../database')

//req - recibe los datos
// res -- responde al cliente

const createProduct = (req, res) =>{
    console.log('crear producto');
    const name =req.body.name
    console.log(`El nombre de tu producto es ${name}`);

    res.status(201).send({
        message: 'Tu producto fue creado'
    })
}

const getAllProducts = async (req, res) =>{
    try {
        const dbResponse = await connect.query('SELECT * FROM products')
        
        res.status(200).send({
            data: dbResponse.rows
        })
        
    } catch (error) {
        res.status(404).send ({
            error
        })
        console.log(error);        
    } 
} 

const getProduct = async (req, res) =>{
    const id = req.params.productid
    try {
        const dbResponse = await connect.query('SELECT * FROM products WHERE productid = $1', [id])
        
    } catch (error) {
        res.status(404).send ({
            error
        })        
    }
} 

const modifyProduct = (req, res) =>{
    console.log('modificar producto');
}

const deleteProduct = (req, res) =>{
    console.log('eliminar producto');
}


module.exports = {
    createProduct,
    getAllProducts,
    getProduct,
    modifyProduct ,
    deleteProduct
}