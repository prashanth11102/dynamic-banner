// controllers/bannerController.js
const Banner = require('../models/Banner');

exports.updateBanner = async (req, res) => {
    try {
        const { description, link, timer, isVisible } = req.body;
        await Banner.update(
            { description, link, timer, isVisible },
            { where: { id: req.params.id } }  // Assuming you are updating by ID
        );
        res.status(200).json({ message: 'Banner updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update banner' });
    }
};
