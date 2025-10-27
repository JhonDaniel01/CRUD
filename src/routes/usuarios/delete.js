const Usuario = require("../../models/usuario");

module.exports = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) {
      return res.status(404).json({ error: "usuario no encontrado" });
    }
    await usuario.destroy();
    res.json({ message: "usuario eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el usuario" });
  }
};
