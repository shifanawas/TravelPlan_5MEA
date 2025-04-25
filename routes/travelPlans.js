const express = require('express');
const TravelPlan = require('../models/TravelPlan');
const router = express.Router();

// Create a travel plan
router.post('/', async (req, res) => {
  try {
    const plan = new TravelPlan(req.body);
    const saved = await plan.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all plans
router.get('/', async (req, res) => {
  const plans = await TravelPlan.find();
  res.json(plans);
});

// Get one plan
router.get('/:id', async (req, res) => {
  try {
    const plan = await TravelPlan.findById(req.params.id);
    if (!plan) return res.status(404).json({ message: 'Not found' });
    res.json(plan);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a plan
router.patch('/:id', async (req, res) => {
  try {
    const updated = await TravelPlan.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a plan
router.delete('/:id', async (req, res) => {
  try {
    await TravelPlan.findByIdAndDelete(req.params.id);
    res.json({ message: 'Plan deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
