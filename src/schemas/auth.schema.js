import { body } from 'express-validator';

export const registerSchema = [
  body('email')
    .notEmpty().withMessage('El email es requerido.')
    .isEmail().withMessage('Ingresar un correo electrónico válido.'),
  body('password')
    .notEmpty().withMessage('La contraseña es requerida.')
    .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres.'),
  body('username')
    .notEmpty().withMessage('El nombre de usuario es requerido.')
];

export const loginSchema = [
  body('email')
    .notEmpty().withMessage('El email es requerido.')
    .isEmail().withMessage('Ingresar un correo electrónico válido.'),
  body('password')
    .notEmpty().withMessage('El contraseña es requerida.')
];
