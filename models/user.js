module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isNumeric: true,
                len: [4,6]
            }
        }
    });

    User.associate = function (models) {

        User.hasMany(models.Wishlist, {
            onDelete: 'cascade'
        });

        User.hasOne(models.Budget, {
            onDelete: 'cascade'
        });
    };

    return User;
}