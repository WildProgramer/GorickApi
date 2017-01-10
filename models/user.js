module.exports = function (sequelize, DataTypes) {

    var user = sequelize.define('user', {

            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            name: {
                type: DataTypes.STRING

            },
            email: {
                type: DataTypes.STRING

            },
            password: {
                type: DataTypes.STRING


            }
        }
        ,{
            timestamps: false,
            freezeTableName: true


        });



    return user;

};