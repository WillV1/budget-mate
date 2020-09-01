const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BudgetSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    item: {
        
        type: String, 
        required: true
        
    }, 
    amount: {
        
        type: Number, 
        required: true
    }
})

module.exports = Budget = mongoose.model('post', BudgetSchema);