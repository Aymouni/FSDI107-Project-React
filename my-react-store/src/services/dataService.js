// Prodcut into the catalog
const catalog = [
    {
        "title":"Orange",
        "category":"fruit",
        "price":11.99,
        "image":"orange.png",
        "_id":"1" // Unique
    },
    {
        "title":"Apple",
        "category":"fruit",
        "price":8.99,
        "image":"apple.png",
        "_id":"2" // Unique
    },
    {
        "title":"Banana",
        "category":"fruit",
        "price":4.99,
        "image":"banana.png",
        "_id":"4" // Unique
    },
    {
        "title":"Strawberries",
        "category":"berry",
        "price":15.99,
        "image":"strawberry.png",
        "_id":"3" // Unique
    },
    {
        "title":"Melon",
        "category":"fruit",
        "price":5.99,
        "image":"melon.png",
        "_id":"5" // Unique
    }
];

class DataService {
    getProducts(){
        return catalog;
    }
}

export default DataService;