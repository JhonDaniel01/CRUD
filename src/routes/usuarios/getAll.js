const Usuario = require("../../models/usuario");

module.exports = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: "error al buscar usuarios" });
  }
};
