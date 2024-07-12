import initKnex from "knex";
import config from "../knexfile.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const knex = initKnex(config);

export const createUser = async (req, res) => {
  const { username, password, name } = req.body;

  if (!username || !password || !name) {
    return res
      .status(400)
      .send("Please enter all required fields: name, username, password");
  }

  //TODO check if username is already taken

  const hashedPassword = bcrypt.hashSync(password);

  const newUser = {
    username,
    password: hashedPassword,
    name,
  };

  const [createdId] = await knex("users").insert(newUser);
  res.status(201).json({ newUserID: createdId });
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .send("Please enter all required fields: username, passowrd");
  }

  // Find the user
  const user = await knex("users").where({ username: username }).first();
  if (!user) {
    return res.status(400).send("User does not exist");
  }

  // Check the password
  const isPasswordCorrect = bcrypt.compareSync(password, user.password);
  if (!isPasswordCorrect) {
    return res.status(400).send("Password is incorrect");
  }

  // Generate a token
  const jwtData = { userId: user.id };
  const token = jwt.sign(jwtData, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });

  res.json({ token: token });
};

export const retrieveSingleUser = async (req, res) => {
  const user = await knex("users").where({ id: req.userId }).first();

  delete user.password;
  res.json(user);
};
