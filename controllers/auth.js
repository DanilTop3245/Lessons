import User from "../models/user.js";
import bcrypt from "bcrypt";

async function register(req, res, next) {
  const { name, email, password } = req.body;
  const normalizedEmail = email.toLowerCase();
  try {
    const user = await User.findOne({ email: normalizedEmail });
    if (user != null) {
      return res.status(409).send({ message: "User alredy registered" });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const result = await User.create({
      name,
      email: normalizedEmail,
      password: passwordHash,
    });
    res.status(201).send({ message: "Success registration" });
  } catch (err) {
    next(err);
  }
}

async function login(req, res, next) {
  const { email, password } = req.body;
  const normalizedEmail = email.toLowerCase();

  try {
    const user = await User.findOne({ email: normalizedEmail });
    if (user == null) {
      console.log("Email");
      return res
        .status(401)
        .send({ message: "Email or password is incorrect" });
    }
    const isMatch = bcrypt.compare(password, user.password);
    if (isMatch == false) {
      console.log("Password");
      return res
        .status(401)
        .send({ message: "Email or password is incorrect" });
    }
    res.send({ token: "Token" });
  } catch (err) {
    next(err);
  }
}

export default { register, login };
