const mongoose = require('mongoose');
const config = require('config');
const dbUrl = config.get('mongoURI');

const dbConnect = async () => {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected ...');
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = dbConnect;
