const express = require("express");
const router = express.Router();

const getAll = require("./usuarios/getAll");
const getById = require("./usuarios/getById");
const create = require("./usuarios/create");
const update = require("./usuarios/update");
const remove = require("./usuarios/delete");

router.get("/usuarios", getAll);
router.get("/usuarios/:id", getById);
router.post("/usuarios", create);
router.put("/usuarios/:id", update);
router.delete("/usuarios/:id", remove);

module.exports = router;
