import React,{Component} from 'react'
import axios from 'axios'
import LoginForm from './../Components/LoginForm'
import {
    setUsuario
} from './../services/LocalStorage'

class Login extends Component{

    constructor(){
        super();
        this.state = {
            form:{
                telefono: '',
                dni: ''
            },
        }
    }

    componentDidMount(){
    }

    async consultarUsuario(){
        try{
            const { data } = await axios.post('http://localhost:4000/api/asesores/login',this.state.form);
            if(data){
                setUsuario(JSON.stringify(data));
                window.location.assign("Reclamos");
            }else{
                alert("Error Usuario incorrecto")
            }
        }catch(error){
            console.log(error);
        }
    }

    handleChange = e => {
        this.setState({
          form: {
            ...this.state.form,
            [e.target.name]: e.target.value
          }
        });
      };

    

    handleSubmit = async e => {
        e.preventDefault();
        this.consultarUsuario();
    };

    render(){
        return(
            <div className="App">
                <header className="App-header">
                    <h2>Servicio de atencion al cliente</h2>
                    <LoginForm
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                        formValues={this.state.form}
                        error={this.state.error}
                    />
                </header>
            </div>
        );
    }
}

export default Login;