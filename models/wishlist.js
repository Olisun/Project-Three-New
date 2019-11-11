module.exports = (sequelize, DataTypes) => {
  const Wishlist = sequelize.define("Wishlist", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bought: {
      type: DataTypes.BOOLEAN,
      default: false
    }
  }, {
    timestamps: false
  });

  Wishlist.associate = function (models) {

    Wishlist.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      },
      onDelete: 'cascade'
    });
  };

  return Wishlist;
}
