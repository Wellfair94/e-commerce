import mongoose from "mongoose";
import { v4 as uuid } from "uuid";

const Product = new mongoose.Schema({
  id: {
    type: String,
    default: uuid,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    default: 0,
  },
  visible: {
    type: Boolean,
    default: false,
  },
  meta: {
    sales: {
      type: Number,
      default: 0,
    },
  },
});
