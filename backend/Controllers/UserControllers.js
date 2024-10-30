
const {Users} = require("../models/users.models.js");

const bcrypt=require("bcryptjs");

const login = async (req, res) => {
  const { Email, Password } = req.body;
  console.log(req.body);
  try {
    const user = await Users.findOne({ Email: Email });
    if (user) {
      const isMatch = await bcrypt.compare(Password, user.Password);
      console.log(isMatch);
      if (isMatch) {
        res.json({message:"Success",
          user:user
        });
      } else {
        res.json("Password incorrect");
      }
    } else {
      res.json("User does not exists");
    }
  } catch (error) {
    console.error("Error during login:", error);
    return res
      .status(500)
      .json({ message: "Server error. Please try again later." });
  }
};

const signup = async (req, res) => {
  const { Username, Email, password } = req.body;
  // console.log(req.body)
  try {
    const user = await Users.findOne({ Email: Email });
    if (user) {
      res.json("User Already Exists");
    } else {
      const hasedPassword = await bcrypt.hash(password, 10);
      Users.create({
        Name: Username,
        Email,
        Email,
        Password: hasedPassword,
      }).then(() => res.json("User Created Successfully"));
    }
  } catch (error) {
    res.status(500).json(error.message)
  }
};

module.exports= { login, signup };
// export default signup;
