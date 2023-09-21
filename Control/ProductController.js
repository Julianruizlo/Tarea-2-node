const ProductService = require("../Service/ProductService");
const { validationResult } = require("express-validator");

const getAllProducts = (req,res) => {
    const products = ProductService.getAllProducts();
    res.json(products);
}
const getOneProduct = (req,res) => {
    const products = ProductService.getAllProducts();
    res.json(products);
}
const saveProduct = (req,res) =>{
    const errorResult = validationResult(req).array();
    if(errorResult && errorResult.length > 0){
        const message = errorResult[0].path + errorResult[0].msg;
        const errorMessage = { error: { message } };
        res.status(400).send(errorMessage);
    }else{
        const response = ProductService.saveProduct(req.body.name, req.body.description,req.body.price);
        if (response) {
            res.send("Producto cargado");
        } else {
            res.status(500).send("Error al cargar el producto");
        }
    }
}
const deleteProduct = (req,res) => {
        
        const eliminate = ProductService.deleteProduct(req.body.name, req.body.description,req.body.price);
        if (eliminate) {
            res.send("Producto eliminado");
        } else {
            res.status(500).send("Error al eliminar el producto");
        }
    
}
const upgrateProducts = (req,res) => { 

    const upgrate = ProductService.upgrateProducts(req.body.name, req.body.description,req.body.price);
    if (upgrate) {
        res.send("Producto actualizado");
    } else {
        res.status(500).send("Error al actualizar");
    }


}
module.exports = {getAllProducts, saveProduct, deleteProduct, upgrateProducts};