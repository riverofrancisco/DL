const axios = require("axios");
import { Course, Category, User } from "./Interfaces/dbInfo";
import { ErrorResponse } from "./Interfaces/errors";

const SERVER_PORT: string = process.env.SERVER_PORT || '3000';

module.exports.postCourses = async function (courses: { courses: Course[] }) {
  if (!courses || !courses.courses || courses.courses.length === 0) {
    console.log('No data provided for postCourses');
    return;
  }
  for (const course of courses.courses) {
    const courseDB = {
      name: course.name,
      img: course.img,
      level: course.level,
      description: course.description,
      descriptionComplete: course.descriptionComplete,
      duration: course.duration,
      instructor: course.instructor,
      price: course.price,
      category: course.category,
    };
    try {
      await axios.post(`http://localhost:${SERVER_PORT}/courses`, courseDB);
    } catch (e: any) {
      console.log(`Algo salió mal al publicar el curso ${courseDB.name}. Error: `, e);
      const errorResponse: ErrorResponse = {
        status: e.response ? e.response.status : 500,
        type: 'Error en la publicación del curso',
        message: e.message,
      };
      return errorResponse;
    }
  }
};

module.exports.postCategories = async function (categories: { categories: Category[] }) {
  if (!categories || !categories.categories || categories.categories.length === 0) {
    console.log('No data provided for postCategories');
    return;
  }
  for (const category of categories.categories) {
    const categoryDB = {
      name: category.name,
      img: category.img,
      description: category.description,
    };
    try {
      await axios.post(`http://localhost:${SERVER_PORT}/categories`, categoryDB);
    } catch (e: any) {
      console.log(`Algo salió mal al publicar la categoría ${categoryDB.name}. Error: `, e);
      const errorResponse = {
        status: e.response ? e.response.status : 500,
        type: 'Error en la publicación de la categoría',
        message: e.message,
      };
      return errorResponse;
    }
  }
};

("/register");
module.exports.postAdmin = async function (admins: { admin: User[] }) {
  if (!admins || !admins.admin || admins.admin.length === 0) {
    console.log('No data provided for postAdmin');
    return;
  }
  for (const user of admins.admin) {
    const userDB = {
      id: user.id,
      fullname: user.fullname,
      email: user.email,
      rank: user.rank,
    };
    try {
      await axios.post(`http://localhost:${SERVER_PORT}/registerDB`, userDB);
    } catch (e: any) {
      console.log(`Algo salió mal al publicar el admin ${userDB.fullname}. Error: `, e);
      const errorResponse = {
        status: e.response ? e.response.status : 500,
        type: 'Error en la publicación del administrador',
        message: e.message,
      };
      return errorResponse;
    }
  }
};
