const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MonsterSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
  summary: {
    type: String,
  },
});

const Monster = mongoose.model('Monster', MonsterSchema);

const dbConnector = async () => {
  try {
    await mongoose.connect('mongodb://localhost/monsterMansionDB', {
      useNewUrlParser: true,
    });
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = { dbConnector, Monster };
