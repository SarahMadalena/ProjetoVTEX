import { Component } from "react";
import api from '../../service/api';
export default class AddClientes extends Component{

    state = {
      novoCliente:{
        nome:'',
        idade:'',
        email:'',
        endereco:'',
        cpf:'',
      },
      cad_nome:'',
      cad_idade:'',
      cad_email:'',
      cad_endereco:'',
      cad_cpf:'',
    };

    handleNomeChange = e =>{
      this.setState({cad_nome: e.target.value});
    };

    handleIdadeChange = e =>{
      this.setState({cad_idade: e.target.value});
    };

    handleEmailChange = e =>{
      this.setState({cad_email: e.target.value});
    };

    handleEndereçoChange = e =>{
        this.setState({cad_endereco: e.target.value});
    };

    handleCpfChange = e =>{
        this.setState({cad_cpf: e.target.value});
    };

    handleOnSubmit = async e =>{
      const {cad_nome,cad_idade,cad_email, cad_endereco, cad_cpf} = this.state;  
        e.preventDefault();

        const Cliente = {'nome':cad_nome,'idade':cad_idade,'email':cad_email, 'endereco':cad_endereco, 'cpf':cad_cpf}

        await api.post(`/cliente`,Cliente)
        .then(console.log(Cliente))

        alert('O usuário foi adicionado com sucesso!');

    }

    render(){

        const {cad_nome,cad_idade,cad_email,cad_endereco,cad_cpf} = this.state;

        return(

            <div className="container" >
            
            <div className="content">      
            
              <div id="cadastro">
                <form onSubmit={this.handleOnSubmit}> 
                  <h1>Cadastre-se Aqui</h1> 
                  
                  <p> 
                    <label >Seu Nome</label>
                    <input required="required"
                         type="text" 
                         placeholder="Digite seu nome"
                         value={cad_nome}
                         onChange={this.handleNomeChange}/>
                  </p>
                  
                  <p> 
                    <label>Sua Idade</label>
                    <input required="required"
                         type="text"
                         placeholder="Digite sua idade"
                         value={cad_idade}
                         onChange={this.handleIdadeChange}/> 
                  </p>
                  
                  <p> 
                    <label>Seu Email</label>
                    <input required="required"
                         type="text"
                         placeholder="Digite seu melhor email"
                         value={cad_email}
                        onChange={this.handleEmailChange}/>
                  </p>

                  <p> 
                    <label>Seu Endereço</label>
                    <input required="required"
                         type="text"
                         placeholder="Digite seu endereço"
                         value={cad_endereco}
                        onChange={this.handleEndereçoChange}/>
                  </p>

                  <p> 
                    <label>Seu Cpf</label>
                    <input required="required"
                         type="text"
                         placeholder="Digite seu cpf"
                         value={cad_cpf}
                        onChange={this.handleCpfChange}/>
                  </p>
                  
                  <p> 
                    <input type="submit" value="Cadastrar"/> 
                  </p>
                </form>
              </div>
            </div>
          </div>

        )
    }
}