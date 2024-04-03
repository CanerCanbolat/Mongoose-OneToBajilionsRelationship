const mongoose = require("mongoose");
const { Schema } = mongoose;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationshipDB");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new Schema({
  username: String,
  age: Number,
});

const tweetSchema = new Schema({
  text: String,
  likes: Number,
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

const User = mongoose.model("User", userSchema);
const Tweet = mongoose.model("Tweet", tweetSchema);

// const makeTweets = async () => {
//   //   const user = new User({ username: "chichken99", age: 61 });
//   const user = await User.findOne({ username: "chichken99" });
//   const tweet2 = new Tweet({
//     text: " bock bock bock bock booocccckkkk",
//     likes: 0,
//   });
//   tweet2.user = user;
//   tweet2.save();
// };
// makeTweets();

const findTweet = async () => {
  const t = await Tweet.findOne().populate("user");
  console.log(t);
};
findTweet();
