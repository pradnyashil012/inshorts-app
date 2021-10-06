import mongoose from "mongoose";

const Connection = async () => {
  try {
    const url = `mongodb+srv://inshorts:inshorts@cluster0.9rpht.mongodb.net/in-shorts?retryWrites=true&w=majority`;
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database connected successfully!");
  } catch (error) {
    console.log("Error while connecting with database ", error.message);
  }
};

export default Connection;
