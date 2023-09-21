const {Router} = require("express");
const ProductController = require("../Control/ProductController");
const ProductValidator = require("../Middleware/ProductVAlidator");
const router = Router();

router.get("/products", ProductController.getAllProducts);


router.post("/products",ProductValidator,ProductController.saveProduct);
router.delete("/delete",ProductController.deleteProduct);
router.patch("/upgrate",ProductController.upgrateProducts)
module.exports = router; 