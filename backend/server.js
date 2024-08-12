const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const bannerRoutes = require('./routes/bannerRoutes');
const Banner = require('./models/Banner');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', bannerRoutes);

// Sync database and start server
sequelize.sync({ force: false }).then(() => {
  Banner.create({
    description: 'Default Banner Description',
    link: '',
    timer: 10,
    isVisible: true,
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(error => console.error('Unable to sync database:', error));
