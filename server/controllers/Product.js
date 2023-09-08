var Product = require('../models/Product')

exports.postProduct = async (req, res, next) => {
    console.log(req.body.data)
   
    var produit = new Product(req.body.data)
    produit.save().then((products) => {

        res.json({
            'success': 'true',
            'products': products
        })
    }).catch((err) => {
        console.log(err)
        res.json({
            'success': 'false',
            'message': 'erreur de sauvegarde',
            'erreur': err
        })
    })
}