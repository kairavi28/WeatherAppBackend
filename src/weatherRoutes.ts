import express from 'express';
import Weather from './model/Weather';

const router = express.Router();

// @desc    Create new weather data
// @route   POST /api/weather
// @access  Public
router.post('/weather', async (req, res) => {
  try {
    const weather = new Weather(req.body);
    await weather.save();
    res.status(201).json({ success: true, data: weather });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

export default router;
