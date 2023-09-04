import { body } from "express-validator";

export const createListaSchema = [
  body('titulo')
    .notEmpty().withMessage('el título es obligatorio')
    .isString().withMessage('título'),

  body('tematica')
    .optional()
    .isString().withMessage('Descripción'),

  body('autor')
    .optional()
    .isString().withMessage('Autor')
];
