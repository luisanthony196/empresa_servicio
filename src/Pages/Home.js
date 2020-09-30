import React,{Component} from 'react';
import DTReclamos from './../Components/DTReclamos'
import ModalReclamo from './../Components/ModalReclamo'
import axios from 'axios';
import NavBar from './../Components/NavBar'
import {
    getUsuario
} from './../services/LocalStorage'

class Home extends Component{

    constructor(){
        super();
        this.state={
            modalIsOpen : false,
            clientes:[],
            itemCliente:{},
            form:{
                servicio: '',
                asesor: JSON.parse(getUsuario())._id,
                concepto: '',
                fecha_vec: new Date(),
                prioridad: 0,
                problema: {
                    tipo: '',
                    descripcion: ''
                }
            },
            servicios:[]
        }
    }

    componentDidMount(){
        this.cargarClientes();
    }

    async cargarClientes(){
        try{
            const { data } = await axios.get('http://localhost:4000/api/clientes');
            this.setState({clientes : data})
        }catch(error){
            console.log(error);
        }
    }

    handleResponse = (itemCliente) => {
        this.setState({ itemCliente : itemCliente });
        this.cargarServicios();
    }

    async cargarServicios(){
        try{
            const { data } = await axios.get('http://localhost:4000/api/servicios/cliente/'+this.state.itemCliente._id);
            this.setState({ servicios : data })
            this.setState({ modalIsOpen : true });
        }catch(error){
            console.log(error);
        }
    }

    handleChangeReclamo = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    };

    handleChangeReclamoProblema = e => {
        this.setState({
            form: {
                ...this.state.form,
                problema:{
                    ...this.state.form.problema,
                    [e.target.name]: e.target.value
                }
            }
        });
    };

    handleChangeDate = (date) =>{
        this.setState({
            form: {
                ...this.state.form,
                'fecha_vec': date
            }
        });
    }
    
    handleSubmitReclamo = async e => {
        e.preventDefault();
        console.log(this.state.form);
        this.guardarReclamo();
    };

    async guardarReclamo(){
        try{
            const { data } = await axios.post('http://localhost:4000/api/reclamos',this.state.form);
            console.log(data);
        }catch(error){
            console.log(error);
        }
    }

    render(){
        return(
            <div>
                <NavBar/>
                <h2>Reclamos</h2>
                <DTReclamos 
                    onResponse = {this.handleResponse}
                    data={this.state.clientes}
                />
                <ModalReclamo
                    openModal = {this.state.modalIsOpen}
                    onSubmit = {this.handleSubmitReclamo}
                    closeModal = {() => this.setState({modalIsOpen:false}),() => window.location.reload(false)}
                    form = {this.state.form}
                    formProblema = {this.state.form.problema}
                    servicios = {this.state.servicios}
                    handleChangeReclamo = {this.handleChangeReclamo}
                    handleChangeReclamoProblema = {this.handleChangeReclamoProblema}
                    handleChangeDate = {this.handleChangeDate}
                />
            </div>
        )
    }
}

export default Home;
