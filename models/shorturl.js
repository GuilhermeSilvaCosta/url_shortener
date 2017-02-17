'use strict';

const mongoose = require('mongoose');

module.exports = function(){

    const CounterSchema = mongoose.Schema({
        _id: {type: String, required: true},
        seq: { type: Number, default: 1 }
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
        counter.findByIdAndUpdate({_id: 'shorturlId'}, {$inc: { seq: 1} }, function(error, count) {            
            if(error){
                return next(error)
            }                
            if (count == null || count == "undefined"){
                counter.create({ _id: 'shorturlId', seq: 1 }).then(
                    function(counter){
                        console.log(counter);
                        doc.codigo = counter.seq;
                        next();
                    },
                    function(erro){
                        console.erro();
                        next(erro);
                    }
                );
            }else{
                doc.codigo = count.seq;
                next();
            }            
        });
    });
    return mongoose.model('ShortUrl', schema);
}