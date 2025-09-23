import mongoose from "mongoose";
import properties from './properties.js';

function db(){
mongoose.connect(properties.DB)
}

export default db;