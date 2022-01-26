const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        job: DataTypes.STRING,
        age: DataTypes.INTEGER,
        phone: DataTypes.STRING,
      },
      {
        sequelize: connection,
      }
    );
  }
}

module.exports = User;
