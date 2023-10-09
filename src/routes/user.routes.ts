import express from 'express';
import UserController from '../controllers/user.controller';

const router = express.Router();

console.log('router')
router.get('/', UserController.listAllUser);
console.log('router 2')
export default router;