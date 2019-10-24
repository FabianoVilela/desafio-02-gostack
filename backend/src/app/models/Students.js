import Sequelize, { Model } from 'sequelize';

class Students extends Model {
  static init(squelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        age: Sequelize.NUMBER,
        weight: Sequelize.DECIMAL(3, 2),
        height: Sequelize.DECIMAL(2, 2),
      },
      { sequelize }
    );
  }
}

export default Students;
