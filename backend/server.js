const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRouter = require('./routers/userRouter');
dotenv.config();

const app = express();

// connect to DB
try {
  mongoose.connect(
    process.env.DB_CONNECTION,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log('Mongoose is connected to DB');
    }
  );
} catch (error) {
  console.log('Could not connect');
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server started at ${port}`);
});
