import { Model, Sequelize } from 'sequelize';

class User extends Model {
  static init(Sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
      },
      { sequelize }
    );
  }
}

export default User;
