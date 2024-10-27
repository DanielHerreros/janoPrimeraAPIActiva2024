import Express from 'express';
import router from './routes/router.js';
import { publicPath } from './configData.js';
 
const app = Express();
const port = 3000;
 
 
 
 
router.get('/', router )
 
app.use(Express.urlencoded({ extended: true }));
 
 
app.use(Express.static(publicPath));
 
app.use("/", router)
 
app.listen(port, function () {
    console.log(`Example app listening on port ${port}`);
});