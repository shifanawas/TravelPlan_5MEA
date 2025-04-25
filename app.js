const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const travelPlanRoutes = require('./routes/travelPlans');

dotenv.config();
const app = express();

app.use(express.json());
app.use('/plans', travelPlanRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => console.error(err));
