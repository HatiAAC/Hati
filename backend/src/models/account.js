module.exports = (sequelize, DataTypes) => {

    const account = sequelize.define('account', {
        name: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        secret: { 
            type: DataTypes.STRING,
            allowNull: true,
        },
        type: { 
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
        email: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        premdays: { 
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        lastday: { 
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        creation: { 
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        jwtVersion: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
          }
    })

    account.associate = (models) => {
        account.hasMany(models.player, { foreignKey: 'account_id' })
    }

    account.prototype.toJSON = function() {
        const values = { ...this.get() }
        delete values.password
        return values
    }

    return account

}