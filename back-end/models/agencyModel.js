
import mongoose from "mongoose";
 const agencySchema = new mongoose.Schema({
 name: {
    type: String,
    required: true,
    unique: true
  },

  contactEmail: {
    type: String,
    required: true
  }
});
export default mongoose.model('Agency', agencySchema);