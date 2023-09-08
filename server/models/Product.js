var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    produit: {
        type: String,
        required: true
    },
    typeProduit: {
        type: String, 
    },
    conditionnement: {
        type: String
    },
    nbreArticle: {
        type: String
    },
    poidArticleUnitaire: {
        type: String
    },
    poidsArticle: {
        type: String
    },
    prixTotal: {
        type: String,
        required: false,
    }
});

var Product = mongoose.model("Product", productSchema);
module.exports = Product;