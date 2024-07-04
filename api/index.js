const server = require("./build/app.js");
const { conn } = require("./build/db.js");
const { postCourses, postCategories, postAdmin } = require("./postInfo.js");
const dbCourses = require("./courses.json");
const dbCategories = require("./categories.json");
const dbAdmin = require("./admin.json");

const PORT = process.env.SERVER_PORT | 3001;

conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log("Server listening at port:", PORT);
   /*  dbCategories.categories.map((category) => {
      return postCategories(category);
    });
    dbCourses.courses.map((course, index) => {
      return postCourses(course);
    });
    dbAdmin.admin.map((user) => {
      return postAdmin(user);
    }); */
  });
});
