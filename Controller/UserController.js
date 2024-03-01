const getUSer = (req, res) => {
  res.status(200).send({ message: "all users" });
};
const createUser = (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !password || !name) {
    res.status(400);
    throw new Error("Invalid email or password");
  }
  res.status(201).json(req.body);
};
module.exports = { getUSer, createUser };
