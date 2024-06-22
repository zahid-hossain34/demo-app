/* eslint-disable prettier/prettier */
import * as mongooes from 'mongoose';

export const ProductSchema = new mongooes.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

export const ProductModel = mongooes.model('Product', ProductSchema);
