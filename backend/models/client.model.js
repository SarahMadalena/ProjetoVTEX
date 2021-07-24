module.exports = (sequelize, Sequelize) => {
    const Cliente = sequelize.define('cliente', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            allowNull: false,
            type: Sequelize.STRING
        },
        email: {
            allowNull: false,
            type: Sequelize.STRING
        },
        idade: {
            type: Sequelize.INTEGER
        },
        endereco: {
            type: Sequelize.STRING
        },
        cpf: {
            type: Sequelize.INTEGER,
            unique: true
        },
    });

    return Cliente;
}