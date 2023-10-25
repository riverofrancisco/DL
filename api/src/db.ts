require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const DB_URL = process.env.DB_URL;

const sequelize = new Sequelize(DB_URL as string,
  {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false
      }
    }
  });
const basename = path.basename(__filename);

const modelDefiners: any[] = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file: any) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file: any) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Course, Category, Users, UserCourses } = sequelize.models;

Course.belongsToMany(Category, { through: "CourseCategory" });
Category.belongsToMany(Course, { through: "CourseCategory" });
Users.belongsToMany(Course, { through: "UserCourses" });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
