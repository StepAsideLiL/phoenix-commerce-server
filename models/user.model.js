const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    occupation: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    image: { type: String, required: true },
    address: { type: String, required: true },
    role: {
      enum: ["customer", "seller", "admin"],
      default: "customer",
      required: true,
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        reference: "Product",
        required: true,
      },
    ],
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        reference: "Order",
        required: true,
      },
    ],
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        reference: "Review",
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

// static signup method

userSchema.statics.signUp = async function (
  name,
  email,
  password,
  occupation,
  phoneNumber,
  image,
  address
) {
  // validate input
  if (
    !name ||
    !email ||
    !password ||
    !occupation ||
    !phoneNumber ||
    !image ||
    !address
  ) {
    throw new Error("All fields must be filled");
  }

  // validate email
  if (!validator.isEmail(email)) {
    throw new Error("Invalid email");
  }

  //validate password
  if (!validator.isStrongPassword(password)) {
    throw new Error("Password is not strong");
  }

  const isExist = await this.findOne({ email });
  if (isExist) {
    throw new Error("User already exist");
  }

  //password encryptions
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  //create an user
  const user = await this.create({
    name,
    email,
    password: hash,
    occupation,
    phoneNumber,
    image,
    address,
  });
  return user;
};

// static login methods

userSchema.statics.logIn = async function (email, password) {
  // validate input
  if (!email || !password) {
    throw new Error("All fields must be filled");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw new Error("Incorrect email.");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw new Error("Incorrect password.");
  }
  return user;
};

module.exports = mongoose.model("User", userSchema);
