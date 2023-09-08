var mongoose = require('mongoose');

var platSchema = mongoose.Schema({
    nomPlat: {
        type: String,
        required: true
    },
    prixPlat: {
        type: String
    },
    ingredients: [
        [
            {
                ingredients: {
                    type: String
                },
                mesure: {
                    type: String
                },
                unit: {
                    type: String
                }
            }
        ]

    ]
})

var Plat = mongoose.model("Plat", platSchema);
module.exports = Plat;