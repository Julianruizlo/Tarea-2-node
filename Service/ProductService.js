
let products = [
    {
    "id": 1,
    "name": "Ventilador",
    "description": "Ventilador de pie de 5 velocidades",
    "price": 232.22
    },
    {
        "id": 2,
        "name": "Lavarropa",
        "description": "Lavarropa 3 velocidades con secado",
        "price": 512.99
        },
        {
            "id": 3,
            "name": "Heladera",
            "description": "Heladera con frezer y dispensadora de hielo",
            "price": 1200.00
            }

]
const saveProduct = (name, description,price) => {
    const id = products[products.length - 1].id;
    const product = {
        id: id + 1,
        name,
        description,
        price
    }
    products.push(product);
    return true;
}

const getAllProducts = () => {
    return products;
}
const getOneProduct = () => {
    const id = products[products.length ].id;
    const product = product.filter (product => product.id !=id);
    }

const deleteProduct = (name, description,price) => {
    const id = products[products.length ].id;
    const product = {
        id: id,
        name,
        description,
        price
    }
    products.delete(product);
    
    return true;

}
const upgrateProducts = (name, description,price) => {
    const id = products[products.length ].id;
    const product = {
        id: id,
        name,
        description,
        price
    }
    products.patch(product);
    return true;
}


module.exports = { saveProduct, getAllProducts,deleteProduct,getOneProduct,upgrateProducts };