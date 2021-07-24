import { Component } from "react";  
import {FaTrash, FaEdit} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import api from '../../service/api';
export default class Home extends Component{

    state = {
        registros:[],
    };

    componentDidMount = async e =>{

        const response = await api.get(`/clientes`); 
        console.log(response);
        
        response.data.map(res=>{
            const {registros} = this.state;
            
            this.setState({
                registros :[...registros, res],     
            });    
        })

        console.log(this.state.registros);

    }

    deleteCustomer = async (id) =>{


        console.log(id);
		
        await api.delete(`/cliente/${id}`); 
        
        alert('Usuário deletado com sucesso!');

    }

    render(){

        const {registros} = this.state;

            return(
                <div class="content">
                <h1>Lista de Clientes</h1>
                <table>
                <thead>
                    <tr>
                    <th>Id</th>    
                    <th>Nome</th>
                    <th>Idade</th>
                    <th>Email</th>
                    <th>Endereço</th>
                    <th>Cpf</th>
                    </tr>
                </thead>
                    <tbody>
                    {registros.map(registro=>(
                        <tr>
                        <td data-label="id" >{registro.id}</td>
                        <td data-label="nome" >{registro.nome}</td>
                        <td data-label="idade" >{registro.idade}</td>
                        <td data-label="email">{registro.email}</td>
                        <td data-label="endereco">{registro.endereco}</td>
                        <td data-label="cpf">{registro.cpf}</td>
                        <td>
                            
                            <Link to={`/edit/${encodeURIComponent(registro.id)}`}>
								<button><FaEdit/></button>
							</Link>
                            <button onClick={()=>this.deleteCustomer(registro.id)}>
								<FaTrash/>
							</button>
                        </td>
                        </tr>
                    ))}
                </tbody>
                </table>
                <Link to='/add'>Cadastrar Novo Cliente</Link>
            </div>
        );
    }
}