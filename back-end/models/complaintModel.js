import mongoose from 'mongoose';

const complaintSchema = new mongoose.Schema({
  citizenName: {
    type: String,
    required: true
  },
  citizenEmail: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['Water', 'Electricity', 'Roads', 'Health', 'Other'],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'In Progress', 'Resolved'],
    default: 'Pending'
  },
  agency: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Agency',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Complaint', complaintSchema);
