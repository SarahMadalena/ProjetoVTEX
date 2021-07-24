import { Component } from "react";
import api from '../../service/api';
export default class EditClientes extends Component{
    
    state = {

      id:this.props.match.params.id,
      cad_nome:'',
      cad_email:'',
      cad_idade:'',
      cad_endereço:'',
      cad_cpf:'',
    };

    componentDidMount = async e =>{
   
      const response = await api.get(`/cliente/${this.state.id}`)
      
      this.setState({
        cad_nome:response.data.nome,
        cad_idade:response.data.idade,
        cad_email:response.data.email,
        cad_endereço:response.data.endereço,
        cad_cpf:response.data.cpf,
      });
    
      console.log(response);

    }

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
        this.setState({cad_endereço: e.target.value});
    };

    handleCpfChange = e =>{
        this.setState({cad_cpf: e.target.value});
    };
  
    handleOnSubmit = async e =>{
      const {id,cad_nome,cad_idade ,cad_email, cad_endereço, cad_cpf} = this.state; 

       e.preventDefault();
  
       const Cliente = {'id': Number(id),'nome':cad_nome,'idade':cad_idade,'email':cad_email, 'endereço':cad_endereço, 'cpf':cad_cpf}
  
        await api.put(`/cliente`,Cliente)
        .then(console.log(Cliente));

        alert('O usuário foi atualizado com sucesso!')
    }

    render(){

      const {id,cad_nome,cad_idade,cad_email, cad_endereço, cad_cpf} = this.state;

        return(

            <div className="container" >
                
            <div className="content">      
            
              <div id="Alterar Cadastro">
                <form> 
                  <h1>Altere Seu Cadastro</h1> 
                  
                  <p> 
                    <label Htmlfor="nome_cad">Id</label>
                    <input id="nome_cad" 
                        name="nome_cad" 
                        type="number"
                        readOnly
                        value={id}
                        />
                  </p>  
        
                  <p> 
                    <label Htmlfor="nome_cad">Seu Nome</label>
                    <input id="nome_cad" 
                        name="nome_cad" 
                        required="required" 
                        type="text" 
                        placeholder="Digite aqui seu nome"
                        value={cad_nome}
                        onChange={this.handleNomeChange} 
                      />
                  </p>
                  
                  <p> 
                    <label Htmlfor="idade_cad">Sua Idade</label>
                    <input id="idade_cad" 
                        name="idade_cad"
                        required="required"
                        type="text"
                        placeholder="Digite sua idade"
                        value={cad_idade}
                        onChange={this.handleIdadeChange}
                        />
                  </p>

                  <p> 
                    <label Htmlfor="email_cad">Seu Email</label>
                    <input id="email_cad" 
                      name="email_cad" 
                      required="required" 
                      type="text" 
                      placeholder="Digite seu melhor email"
                      value={cad_email}
                      onChange={this.handleEmailChange}
                      /> 
                  </p>

                  <p> 
                    <label Htmlfor="end_cad">Seu Endereço</label>
                    <input id="end_cad" 
                      name="end_cad" 
                      required="required" 
                      type="text" 
                      placeholder="Digite seu endereço" 
                      value={cad_endereço}
                      onChange={this.handleEndereçoChange}
                      /> 
                  </p>

                  <p> 
                    <label Htmlfor="cpf_cad">Seu Cpf</label>
                    <input id="cpf_cad" 
                      name="cpf_cad" 
                      required="required" 
                      type="number" 
                      placeholder="Digite seu cpf" 
                      value={cad_cpf}
                      onChange={this.handleCpfChange}
                      /> 
                  </p>
                  
                  <p> 
                    <input type="submit" /> 
                  </p>
                </form>
              </div>
            </div>
          </div>
        )
    }     
}
