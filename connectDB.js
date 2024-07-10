import mongoose from 'mongoose';

export const connectDB = async (uri) => {
  try {

    await mongoose.connect(uri);
    
    console.log('🌸 MongoDB Atlas connected !!💮');

  } catch (error) {
    console.error('\nMongoDB connection failed\n', error);
    process.exit(1);
  }
};
