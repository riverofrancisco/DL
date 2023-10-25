const server = require("./build/app.js");
const { conn } = require("./build/db.js");
const { postCourses, postCategories, postAdmin } = require("./build/postInfo.js");
const dbCourses = require("./json/courses.json");
const dbCategories = require("./json/categories.json");
const dbAdmin = require("./json/admin.json");
const { SERVER_PORT } = process.env;
const PORT = SERVER_PORT || 5432;

conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log("%s listening at", PORT);
    postCategories(dbCategories);
    postCourses(dbCourses);
    postAdmin(dbAdmin);
  });
});
