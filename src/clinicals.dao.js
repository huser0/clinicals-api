import mongoose from "mongoose";
import clinicalsSchema from './clinicals.model.js'

clinicalsSchema.statics={
  get: function(query){
    return this.find(query);
  },
  create: function(data){
    var clinicalData = new this(data);
    return clinicalData.save();
  }
}

var clinicalsModel = mongoose.model("Clinicals", clinicalsSchema, "clinicals");
export default clinicalsModel;