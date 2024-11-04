import Express from 'express';
import { getAllUsers, getUserById, newUser } from '../controllers/userController.js'

const routerApi = Express.Router();

routerApi.get("/users", async (req: Express.Request, res: Express.Response) => {
    const result = await getAllUsers();
    res.json(result);
  });
  
  routerApi.get("/users/:id", async (req: Express.Request, res: Express.Response) => {
    const result = await getUserById(req.params.id);
    res.send(result);
  });

  routerApi.post("/users", async (req: Express.Request, res: Express.Response) => {
    const result = await newUser(req.body);
    res.send(result);
  });

export default routerApi;