import express from 'express';
import {
  createComplaint,
  getAllComplaints,
  updateStatus,
  getComplaintById,
  deleteComplaint
} from '../controllers/complaintController.js';

const router = express.Router();

// Public routes
router.post('/', createComplaint);           // Submit complaint
router.get('/:id', getComplaintById);        // Get complaint by ID

// Admin routes
router.get('/', getAllComplaints);           // Get all complaints
router.put('/:id/status', updateStatus);     // Update status
router.delete('/:id', deleteComplaint); //delete complaint

export default router;
