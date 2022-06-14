require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME 
} = process.env;

const herokuDb = {
  user: DB_USER || "hxhwaoxdnpzrmu",
  host: DB_HOST || "ec2-52-73-184-24.compute-1.amazonaws.com",
  password: DB_PASSWORD || "32d978e2795493574aa45120b96b88bf3e1723776378afb9f061310984484d43",
  //name: !DB_NAME ? "sneakers" : "d8rp7epoiokuee"
  name: DB_NAME || "d60e2532e9mfj1"
}

const sequelize = new Sequelize(`postgres://${herokuDb.user}:${herokuDb.password}@${herokuDb.host}/${herokuDb.name}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false,
  dialectOptions: DB_NAME || {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }// lets Sequelize know we can use pg-native for ~30% more speed
});


try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
const basename = path.basename(__filename);
const modelDefiners = [];


fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Recipe,Diet  } = sequelize.models;

// Aca vendrian las relaciones
Recipe.belongsToMany(Diet, { through: 'DietRecipes' });
Diet.belongsToMany(Recipe, { through: 'DietRecipes' });


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
