

import * as Mongoose from 'mongoose';
Mongoose.set('strictQuery', true);

export async function connect() {
  console.log('Connecting to the database');

  try {
    Mongoose.connection.on('connected', () => {
      console.log('Connected to the database');
    });

    Mongoose.connection.on('error', (err) => {
      console.error('Database connection error:', err);
    });

    Mongoose.connection.on('disconnected', () => {
      console.warn('Disconnected from the database');
    });

    Mongoose.connection.on('reconnected', () => {
      console.log('Reconnected to the database');
    });

    await Mongoose.connect(
      'mongodb+srv://zahid:5oi5GJgfmQa8vx4A@cluster0.vdmjohz.mongodb.net/nestjs-demo'
     
    );
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}
