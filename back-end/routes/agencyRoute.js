import express from 'express';
import {createAgency,
    getAllAgencies
} from '../controllers/agencyController.js';
  
const agencyRouter = express.Router();

//admin route 
agencyRouter.post('/', createAgency);  //ADD AGENCY
agencyRouter.get('/', getAllAgencies); // GET ALL AGENCIS

export default agencyRouter;