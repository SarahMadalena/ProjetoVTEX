const db = require('../config/db.config.js');
const Cliente = db.Cliente;

exports.createCliente = (req, res) => {
    let cliente = {};

    try{
        // Capturando os dados do body e criando a constante cliente.
        cliente.nome = req.body.nome;
        cliente.email = req.body.email;
        cliente.idade = req.body.idade;
        cliente.endereco = req.body.endereco;
        cliente.cpf = req.body.cpf;
    
        // Salvar cliente no banco de dados.
        Cliente.create(cliente, 
                          {attributes: ['id', 'nome', 'email', 'idade', 'endereco', 'cpf']})
                    .then(result => {    
                      res.status(200).json(result);
                    });
    }catch(error){
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}

exports.getCliente = (req, res) => {
    Cliente.findByPk(req.params.id, 
                        {attributes: ['id', 'nome', 'email', 'idade', 'endereco', 'cpf']})
        .then(cliente => {
          res.status(200).json(cliente);
        }).catch(error => {
          // mostrar no console a mensagem de erro.
          console.log(error);

          res.status(500).json({
              message: "Error!",
              error: error
          });
        })
}

exports.clientes = (req, res) => {
    // Buscar todos os registros da tabela 
    try{
        Cliente.findAll({attributes: ['id', 'nome', 'email', 'idade', 'endereco', 'cpf']})
        .then(clientes => {
            res.status(200).json(clientes);
        })
    }catch(error) {
        // log on console
        console.log(error);

        res.status(500).json({
            message: "Error!",
            error: error
        });
    }
}

exports.deleteCliente = async (req, res) => {
    try{
        let clienteId = req.params.id;
        let cliente = await Cliente.findByPk(clienteId);

        if(!cliente){
            res.status(404).json({
                message: "Não existe nenhum cliente com o Id: " + clienteId,
                error: "404",
            });
        } else {
            await cliente.destroy();
            res.status(200).json('cliente deletado com sucesso.');
        }
    } catch(error) {
        res.status(500).json({
            message: "Error -> Não foi possível deletar o cliente com o Id:" + req.params.id,
            error: error.message
        });
    }
}

exports.updateCliente = async (req, res) => {
    try{
        let cliente = await Cliente.findByPk(req.body.id);
    
        if(!cliente){
            
            res.status(404).json({
                message: "Não foi encontrando nenhum cliente com id: " + clienteId,
                error: "404"
            });
        } else {    
            
            let updatedObject = {
                nome: req.body.nome,
                email: req.body.email,
                idade: req.body.idade,
                endereco: req.body.endereco,
                cpf: req.body.cpf,
            }
            let result = await Cliente.update(updatedObject,
                              { 
                                returning: true, 
                                where: {id: req.body.id},
                                attributes: ['id', 'nome', 'email', 'idade', 'endereco', 'cpf']
                              }
                            );

            // return the response to client
            if(!result) {
                res.status(500).json({
                    message: "Error -> Não houve alteração no cliente Id: " + req.params.id,
                    error: "Não pode ser alterado",
                });
            }

            res.status(200).json(result);
        }
    } catch(error){
        res.status(500).json({
            message: "Error -> Não pôde ser alterado o cliente com o id: " + req.params.id,
            error: error.message
        });
    }
}