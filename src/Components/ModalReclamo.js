import React,{Component} from 'react'
import { Modal } from 'react-responsive-modal'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import DateTimePicket from 'react-datetime-picker'

import './../Assets/css/DateTimePicket.css'
import './../Assets/css/Modal.css'
import 'react-responsive-modal/styles.css'

class ModalReclamo extends Component{

    constructor(props) {
        super(props);
        this.state = {
            selected: null,
            tipo: ''
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
                                    <div className="p-grid p-fluid">
                                        <div className="p-col-12">
                                            <label className="p-d-block">Servicios pertenecientes al cliente</label>
                                            <DataTable 
                                                value={this.props.servicios}
                                                selection={this.state.selected} 
                                                onSelectionChange={e => this.setState({ selected: e.value })} 
                                                selectionMode="single" 
                                                dataKey="_id"
                                                onRowSelect={(event) => this.setState({ tipo: event.data._id })} 
                                                className="p-datatable-sm">
                                                <Column field="_id" header="ID" style={{display: 'none'}}></Column>
                                                <Column field="tipo" header="Tipo"></Column>
                                                <Column field="monto" header="Monto"></Column>
                                                <Column field="descripcion" header="Descripcion"></Column>
                                            </DataTable>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-col-6 p-lg-6">
                                <div className="p-col">
                                    <div className="p-grid p-fluid ">
                                        <div className="p-col-12">
                                            <label className="p-d-block">Servicio seleccionado</label>
                                            <InputText 
                                                value={this.props.form.servicio = this.state.tipo}
                                                onChange={this.props.handleChangeReclamo}
                                                disabled
                                                name="servicio"
                                                type="text" />
                                        </div>
                                    </div>
                                    <div className="p-grid p-fluid ">
                                        <div className="p-col-12">
                                            <label className="p-d-block">Concepto</label>
                                            <InputText 
                                                value={this.props.form.concepto}
                                                onChange={this.props.handleChangeReclamo}
                                                name="concepto"
                                                type="text" />
                                        </div>
                                    </div>
                                    <div className="p-grid p-fluid">
                                        <div className="p-col-12">
                                            <label htmlFor="username">Prioridad</label>
                                            <InputText 
                                                value={this.props.form.prioridad}
                                                onChange={this.props.handleChangeReclamo}
                                                name="prioridad"
                                                type="number" />
                                        </div>
                                    </div>
                                    <div className="p-grid p-fluid">
                                        <div className="p-col-12">
                                            <label >Tipo de problema</label>
                                            <InputText 
                                                value={this.props.formProblema.tipo}
                                                onChange={this.props.handleChangeReclamoProblema}
                                                name="tipo"
                                                type="text"/>
                                        </div>
                                        <div className="p-col-12">
                                            <label >Descripcion del problema</label>
                                            <InputText 
                                                value={this.props.formProblema.descripcion}
                                                onChange={this.props.handleChangeReclamoProblema}
                                                name="descripcion"
                                                type="text"/>
                                        </div>
                                        <div className="p-col-12">
                                                <label 
                                                    htmlFor="username1" 
                                                    className="p-d-block">
                                                Fecha de vencimiento
                                                </label>
                                                <DateTimePicket
                                                    value={this.props.form.fecha_vec? new Date(this.props.form.fecha_vec):new Date()}
                                                    onChange={this.props.handleChangeDate}
                                                    name="fecha_vec"
                                                    locale = "es-ES"
                                                    format={"dd/MM/yyyy hh:mm:ss"}/>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                            <Button 
                                label="Aceptar" 
                                style={{
                                    background:'#4D80E4',
                                    border: '1px solid #4D80E4',
                                    margin: '5px'}}
                                icon="pi pi-check" 
                                onClick={this.handleClick}
                                autoFocus />
                        </div>
                </form>
            </Modal>
        )
    }
}
    
export default ModalReclamo;