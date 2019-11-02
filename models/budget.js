module.exports = (sequelize, DataTypes) => {
    const Budget = sequelize.define("Budget", {
        income: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Rent: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        Utilities: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        Food: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        Transportation: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        Misc: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    }, {
        timestamps: false
    });

    Budget.associate = function (models) {

        Budget.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            },
            onDelete: 'cascade'
        });
    };

    return Budget;
}