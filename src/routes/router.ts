import  Express  from "express";
import path from "path";
import { fileURLToPath } from "url";
import pool from "../configDb.js";
import { Router } from "express";
import { publicPath } from "../configurationData.js";
import { saveUserHandler } from "../handlers/userHandler.js";
 
 
 
const router = Express.Router();
 
 
 
router.get('/', function (req: Express.Request, res: Express.Response) {
    const targetFilePath = path.join(publicPath, '/index.html');
    res.sendFile(targetFilePath);
});
 
router.get('/user', function (req: Express.Request, res: Express.Response) {
    const targetFilePath = path.join(publicPath, '/newUser.html');
    res.sendFile(targetFilePath);
});
 
router.get('/pagina2', function (req: Express.Request, res: Express.Response) {
    const targetFilePath = path.join(publicPath, '/pagina2.html');
    res.sendFile(targetFilePath);
});
 
router.post('/user', async function (req: Express.Request, res: Express.Response) {

    const result = saveUserHandler (req.body);
       res.send(result);
});


export default router;