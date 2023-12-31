//import mongoose
const mongoose = require('mongoose');
//import mongoose-slug-generetor
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

//tao moi model
const Schema = mongoose.Schema;

const Dog = new Schema({
    name: {type: String},
    description: {type: String},
    image: {type: String},
    // tu dong tao slug, unique la duy nhat -> neu tao trung thi se tu dong them id ngau nhien
    slug: { type: String, slug: 'name', unique: true },
}, {
  timestamps: true,
});

//truy cap Model
module.exports = mongoose.model('Dog', Dog);