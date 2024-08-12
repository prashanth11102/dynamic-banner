const express = require('express');
const router = express.Router();
const Banner = require('../models/Banner');

// Get banner data
router.get('/banner', async (req, res) => {
  try {
    const banner = await Banner.findOne({ where: { id: 1 } });
    res.json(banner);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch banner data' });
  }
});

// Update banner data
router.put('/banner', async (req, res) => {
  try {
    const { description, link, timer, isVisible } = req.body;
    const banner = await Banner.findOne({ where: { id: 1 } });
    if (banner) {
      await banner.update({ description, link, timer, isVisible });
      res.json({ message: 'Banner updated successfully' });
    } else {
      await Banner.create({ description, link, timer, isVisible });
      res.json({ message: 'Banner created successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update banner data' });
  }
});

module.exports = router;
