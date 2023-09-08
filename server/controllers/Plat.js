var Plat = require('../models/Plat')

exports.postplat = async (req, res, next) => {
    console.log(req.body)
   
    var plat = new Plat(req.body.recette)
    plat.save().then(() => {

        res.json({
            'success': 'true',
            'message': 'reussi'
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