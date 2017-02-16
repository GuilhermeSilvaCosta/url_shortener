'use strict';

const mongoose = require('mongoose');

module.exports = function(){

    const CounterSchema = mongoose.Schema({
        _id: {type: String, required: true},
        seq: { type: Number, default: 0 }
    });
    var counter = mongoose.model('counter', CounterSchema);

    const schema = mongoose.Schema({
        codigo: {
            type: Number
        },
        created_at: {
            type: Date,
            default: Date.now
        },
        url: {
            type: String
        },        
        count: {
            type: Number
        }
    });

    schema.pre('save', function(next) {
        const doc = this;
        counter.findByIdAndUpdate({_id: 'shorturlId'}, {$inc: { seq: 1} }, function(error, counter) {
            if(error)
                return next(error);
            doc.codigo = counter.seq;
            next();
        });
    });

    return mongoose.model('ShorUrl', schema);
}