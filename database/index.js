import mongoose from 'mongoose';

export const dbConnection = () => {
  try {
    mongoose.connect('mongodb://localhost/biblioteca', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('DB is connect');
  } catch (error) {
    console.log(error);
  }
};
