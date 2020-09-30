import React,{Component} from 'react'
import { Modal } from 'react-responsive-modal'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import DateTimePicket from 'react-datetime-picker'

import './../Assets/css/DateTimePicket.css'
import './../Assets/css/Modal.css'
import 'react-responsive-modal/styles.css'

class ModalAtencion extends Component{

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render(){
        return(
            <Modal
                open={this.props.openModal}
                onClose={this.props.closeModal}
                center>
                <form autoComplete="off" onSubmit={this.props.onSubmit}>
                    <div className="modal-body p-mt-5">
                        <div className="p-grid nested-grid">
                            <div className="p-col-6 p-lg-6">
                                <div className="p-col">
                                    <div className="p-grid p-fluid ">
                                        <div className="p-col-12">
                                            <label className="p-d-block">Servicio seleccionado</label>
                                            <InputText 
                                                name="servicio"
                                                type="text" />
                                        </div>
                                    </div>
                                    <div className="p-grid p-fluid ">
                                        <div className="p-col-12">
                                            <label className="p-d-block">Concepto</label>
                                            <InputText 
                                                name="concepto"
                                                type="text" />
                                        </div>
                                    </div>
                                    <div className="p-grid p-fluid">
                                        <div className="p-col-12">
                                            <label htmlFor="username">Prioridad</label>
                                            <InputText 
                                                name="prioridad"
                                                type="number" />
                                        </div>
                                    </div>
                                    <div className="p-grid p-fluid">
                                        <div className="p-col-12">
                                            <label >Tipo de problema</label>
                                            <InputText 
                                                name="tipo"
                                                type="text"/>
                                        </div>
                                        <div className="p-col-12">
                                            <label >Descripcion del problema</label>
                                            <InputText 
                                                name="descripcion"
                                                type="text"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </form>
                <div className="footer">
                            <Button 
                                label="Solucionado" 
                                style={{
                                    background:'#4D80E4',
                                    border: '1px solid #4D80E4',
                                    margin: '5px'}}
                                icon="pi pi-check" 
                                onClick={() => this.props.onClicked()}
                                autoFocus />
                        </div>
            </Modal>
        )
    }
}
    
export default ModalAtencion;