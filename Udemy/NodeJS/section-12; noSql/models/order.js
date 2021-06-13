// importing mongoose
const mongoose = require('mongoose')

// importing mongoose schema
const Schema = mongoose.Schema

const orderSchema = new Schema({
    products: [
        {
            product: {
                type: Object,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ],
    user: {
        name: {
            String,
            required: true
        },
        userId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        }
    }
})

// exporting the mongoose model
module.exports = mongoose.model('Order', orderSchema)