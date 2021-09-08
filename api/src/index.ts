import app from './app';
import MongoDB from './config/mongoDB';
app.listen(3000, () => {
    console.log("App started on port 3000")
    const mongoDB = MongoDB;
});