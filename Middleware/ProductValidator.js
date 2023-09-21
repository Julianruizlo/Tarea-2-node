const { body } = require("express-validator");

const productValidator = [
    body("name ").isString().withMessage("must be a String").notEmpty().withMessage("couldn't be empty"),
    body("description ").isString().withMessage("must be a String").notEmpty().withMessage("couldn't be empty"),
    body("price ").isString().withMessage("must be a String").notEmpty().withMessage("couldn't be empty")
];


module.exports = productValidator;