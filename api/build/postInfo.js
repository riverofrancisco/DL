"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require("axios");
const SERVER_PORT = process.env.SERVER_PORT || '3000';
module.exports.postCourses = function (courses) {
    return __awaiter(this, void 0, void 0, function* () {
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
                yield axios.post(`http://localhost:${SERVER_PORT}/courses`, courseDB);
            }
            catch (e) {
                console.log(`Algo salió mal al publicar el curso ${courseDB.name}. Error: `, e);
                const errorResponse = {
                    status: e.response ? e.response.status : 500,
                    type: 'Error en la publicación del curso',
                    message: e.message,
                };
                return errorResponse;
            }
        }
    });
};
module.exports.postCategories = function (categories) {
    return __awaiter(this, void 0, void 0, function* () {
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
                yield axios.post(`http://localhost:${SERVER_PORT}/categories`, categoryDB);
            }
            catch (e) {
                console.log(`Algo salió mal al publicar la categoría ${categoryDB.name}. Error: `, e);
                const errorResponse = {
                    status: e.response ? e.response.status : 500,
                    type: 'Error en la publicación de la categoría',
                    message: e.message,
                };
                return errorResponse;
            }
        }
    });
};
("/register");
module.exports.postAdmin = function (admins) {
    return __awaiter(this, void 0, void 0, function* () {
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
                yield axios.post(`http://localhost:${SERVER_PORT}/registerDB`, userDB);
            }
            catch (e) {
                console.log(`Algo salió mal al publicar el admin ${userDB.fullname}. Error: `, e);
                const errorResponse = {
                    status: e.response ? e.response.status : 500,
                    type: 'Error en la publicación del administrador',
                    message: e.message,
                };
                return errorResponse;
            }
        }
    });
};
