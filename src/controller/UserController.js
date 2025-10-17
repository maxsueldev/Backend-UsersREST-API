const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.JWT_SECRET || "fallback_secret";

module.exports = {
  async login(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email e senha obrigatórios." });
    }

    try {
      const normalizedEmail = email.toLowerCase().trim();
      const user = await User.findOne({ email: normalizedEmail });

      if (!user) {
        return res.status(401).json({ error: "Credenciais inválidas." });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ error: "Credenciais inválidas." });
      }

      const token = jwt.sign({ id: user._id }, SECRET_KEY, {
        expiresIn: "1d",
      });

      const { password: _, ...userData } = user.toObject();

      return res.json({ user: userData, token });
    } catch (err) {
      return res.status(500).json({ error: "Erro no servidor." });
    }
  },

  async store(req, res) {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: "Preencha todos os campos." });
    }

    try {
      const normalizedEmail = email.toLowerCase().trim();

      const existingUser = await User.findOne({ email: normalizedEmail });
      if (existingUser) {
        return res.status(400).json({ error: "Email já cadastrado." });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        name,
        email: normalizedEmail,
        password: hashedPassword,
      });

      const { password: _, ...userWithoutPassword } = user.toObject();

      return res.status(201).json({ user: userWithoutPassword });
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json({ error: "Erro no servidor. Tente novamente mais tarde." });
    }
  },

  async show(req, res) {
    const users = await User.find({}).select("-password");
    return res.json(users);
  },

  async update(req, res) {
    const { name, email, password } = req.body;
    const { user_id } = req.params;

    const updateData = { name, email };
    if (password) {
      updateData.password = await bcrypt.hash(password, 10);
    }

    const user = await User.findByIdAndUpdate(user_id, updateData, {
      new: true,
    }).select("-password");

    return res.json(user);
  },

  async delete(req, res) {
    const { user_id } = req.params;
    const user = await User.findByIdAndDelete(user_id).select("-password");
    return res.json(user);
  },
};
