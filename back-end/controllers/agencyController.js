import Agency from '../models/agencyModel.js';

// Create a new agency
export const createAgency = async (req, res) => {
  try {
    const agency = new Agency(req.body);
    await agency.save();
    res.status(201).json(agency);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all agencies
export const getAllAgencies = async (req, res) => {
  try {
    const agencies = await Agency.find();
    res.json(agencies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
