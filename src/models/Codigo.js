import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  code: {
    type: Number,
    required: true,
    unique : true,
  },
  description: {
    type: String,
    required: true,
  },
  umb:{
    type: String,
  },
  price: {
    type: Number,
  },
  type: {
    type: String,
  },
  factor: {
    type: Number,
  },
  active: {
    default: true,
    type: Boolean,
  },
 
 
});

export default mongoose.model("Codigo", Schema);
