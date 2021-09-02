import mongoose from "mongoose";

const server = "mongodb:27017";  // container name
const database = "MyDB";

class MongoDB {
  constructor() {
    this._connect();
  }

  _connect(): void {
    mongoose
      .connect(`mongodb://${server}/${database}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        ssl: false,
        directConnection: true
      })
      .then(() => {
        console.log("Database connection successful");
      })
      .catch((err: Error) => {
        console.error("Database connection error");
        console.log(err);
      });
  }

  getInstance() {
    return mongoose.connection;
  }
}

export default new MongoDB();
