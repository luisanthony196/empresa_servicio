import React,{Component} from 'react';
import NavBar from './../Components/NavBar'
import { Button } from 'primereact/button'
import axios from 'axios'
import { InputText } from 'primereact/inputtext'
import DTAtencion from './../Components/DTAtencion'
import ModalAtencion from './../Components/ModalAtencion'

class Atencion extends Component{

    constructor(){
        super();
        this.state={
            modalIsOpen : false,
            dni:'',
            atencion:[],
            itemAtencion:{},
            form:{
                servicio: '',
                asesor: '',
                concepto: '',
                fecha_vec: new Date(),
                prioridad: 0,
                problema: {
                    tipo: '',
                    descripcion: ''
                }
            },
        }
    }
    
    async BuscarDni(){
        try{
            const { data } = await axios.get('http://localhost:4000/api/clientes/atenciones/'+this.state.dni);
            this.setState({atencion : data})
        }catch(error){
            console.log(error);
        }
    }

    handleResponse = (item) => {
        this.setState({ itemAtencion: item });
        this.setState({modalIsOpen : true});
    }

    onClicked = () => {
        this.Solucionar();
    }
    
    async Solucionar(){
        try{
            const { data } = await axios.put('http://localhost:4000/api/atenciones/'+this.state.itemAtencion._id,{'solucion': !this.state.itemAtencion.solucion});
            console.log(data);
        }catch(error){
            console.log(error);
        }
    }
    
    render(){
        return(
            <div>
                <NavBar/>
                <h2> Area de atencion al cliente</h2>
                <div className="p-grid p-fluid ">
                    <div className="p-col">
                        <div className="p-grid p-fluid">
                            <div className="p-col-12 p-md-6">
                                <label className="p-d-block">DNI Cliente</label>
                                <InputText 
                                    value={this.state.dni}
                                    onChange={(e) =>  this.setState({dni: e.target.value})}
                                    name="concepto"
                                    type="text" /> 
                            </div>
                            <div className="p-col-12 p-md-6">
                                <Button 
                                label="Buscar" 
                                style={{
                                    background:'#4D80E4',
                                    border: '1px solid #4D80E4',
                                    margin: '5px'}}
                                onClick={() => this.BuscarDni()}
                                autoFocus/>
                            </div>
                        </div>
                    </div>
                </div>
                <DTAtencion
                    onResponse = {this.handleResponse}
                    data={this.state.atencion}
                    
                />
                <ModalAtencion
                    openModal = {this.state.modalIsOpen}
                    closeModal = {() => this.setState({modalIsOpen:false}),() => window.location.reload(false)}
                    onClicked = {this.onClicked}
                />
            </div>
        )
    }
}

export default Atencion;
