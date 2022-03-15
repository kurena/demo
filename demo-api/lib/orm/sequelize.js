const { Sequelize, DataTypes, Model } = require('sequelize');
const config = require("../../config/config");
const dbConfig = config['dbConfig'];

const connection = {};
class OrderItem extends Model { }

module.exports.getConnection = async () => {
  if (connection.sequelize) {
    return connection.sequelize;
  }

  const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    {
      host: dbConfig.host,
      dialect: dbConfig.dialect,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
      define: {
        freezeTableName: true,
        timestamps: false,
      },
      dialectOptions: dbConfig.dialectOptions,
    },
  );

  await sequelize.authenticate();
  connection.sequelize = sequelize;
  //Init Models
  OrderItem.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING
    }
  }, {
    sequelize: connection.sequelize,
    modelName: 'OrderItem'
  })

  return sequelize;
}

module.exports.closeConnection = async () => {
  delete connection.sequelize;
  await sequelize.close();
}
