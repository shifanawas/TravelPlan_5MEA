const mongoose = require('mongoose');


const travelPlanSchema = new mongoose.Schema({
  destination: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  activities: [String]
});

module.exports = mongoose.model('TravelPlan', travelPlanSchema);
