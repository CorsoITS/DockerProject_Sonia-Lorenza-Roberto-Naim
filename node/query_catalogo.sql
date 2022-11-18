SELECT *
FROM `project_1811`.`catalog`;

INSERT INTO `project_1811`.`order` (Descrizione, Prezzo)
VALUES ('prova', 3);

DELETE FROM `project_1811`.`order` WHERE SKU=1;

INSERT INTO `project_1811`.`order` (Descrizione, Prezzo)
VALUES ('Portatile', 400), ('Cuffie', 15), ('Caricabatterie', 15), ('Tastiera', 20);


