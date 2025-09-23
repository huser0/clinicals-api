import mongoose from "mongoose";
import patientSchema from './patient.model.js'

patientSchema.statics = {
  get: async function(query){
      return await this.find(query);
  },
  create: async function(data){
    try {
      const patient = new this(data);
      return await patient.save();
    } catch (err) {
      console.log(err)
    }
  },
  update: async function(query, updateData){
    try {
      const result = await this.findOneAndUpdate(query, {$set: updateData}, {new: true});
      return result;
    } catch (err) {
      console.log(err)
    }
  },
  delete: async function(query){
    try {
      const result = await this.findOneAndDelete(query);
      return result;
    } catch (err) {
      console.log(err)
    }
  }
}

var patientModel = mongoose.model("Patient", patientSchema, 'patient');
export default patientModel;