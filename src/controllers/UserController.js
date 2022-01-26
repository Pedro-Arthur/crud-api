const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const { name, job, age, phone } = req.body;

    const user = await User.create({
      name,
      job,
      age,
      phone,
    });

    return res.json(user);
  },

  async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  },

  async update(req, res) {
    const { name, job, age, phone } = req.body;
    const { id } = req.params;

    await User.update(
      {
        name,
        job,
        age,
        phone,
      },
      { where: { id: id } }
    );

    return res.json({ message: "Usuário atualizado com sucesso!" });
  },

  async destroy(req, res) {
    const { id } = req.params;

    await User.destroy({
      where: {
        id: id,
      },
    });

    return res.json({ message: "Usuário deletado com sucesso!" });
  },
};
