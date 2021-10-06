import data from "./constants/data.js";

import News from "./model/news.js";

const defaultData = async () => {
  try {
    await News.deleteMany({});
    await News.insertMany(data);
    console.log("Data is imported!");
  } catch (error) {
    console.log("Error ", error.message);
  }
};

export default defaultData;
