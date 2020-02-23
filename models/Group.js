'use strict'
module.exports = (sequelize, Sequelize) => {
    return sequelize.define("Group", {
        gr_title: {
            type: Sequelize.STRING(255)
        },
        gr_name:{
            type: Sequelize.STRING(255)
        }
        
    },{
        timestamps: true, // false로 들어가면 생성 X
        charset: "utf8",
        tableName: 'group'
    });
}