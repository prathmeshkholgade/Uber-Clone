const mongoose = require("mongoose");
const Url = process.env.DATABASE_URL;
connectDB()
  .then(() => {
    console.log("database connected succssfully");
  })
  .catch((err) => {
    console.log(err);
  });
console.log(process.env.DATABASE_URL);
async function connectDB() {
  await mongoose.connect(Url);
}
module.exports = mongoose.connection;
