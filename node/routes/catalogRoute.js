const { Router } = require('express');
const { CatalogController } = require('../controller/catalogController');
const routerItems = Router();

//mostra tutti i corsi
routerItems.get('/', CatalogController.lista);

// //CRUD gestione dei singoli corsi, solo un professore può modificare, creare e eliminare un corso
// routerCourses.get('/:idCorsi', CoursesController.checkId, CoursesController.get);
// routerCourses.put('/:idCorsi', checkProfAuth, CoursesController.checkId, CoursesController.update);//
routerItems.post('/', CatalogController.insert);//
// routerCourses.delete('/:idCorsi', checkProfAuth, CoursesController.checkId, CoursesController.delete);//

// // mostra i commenti per i corsi
// routerCourses.get('/:idCorsi/commenti', CoursesController.checkId, CommentsController.lista);


module.exports = routerItems;