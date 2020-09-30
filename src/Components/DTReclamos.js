import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

class DTReclamos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: null
        };
    }

    onRowUnselect(event) {
    }

    render() {
        return (
            <div className="dtProyecto">
                <DataTable 
                    value={this.props.data}
                    className="p-datatable-gridlines"
                    paginator 
                    rows={10}
                    selection={this.state.selected} 
                    onSelectionChange={e => this.setState({ selected: e.value })} 
                    selectionMode="single" 
                    dataKey="_id"
                    onRowSelect={(event) => this.props.onResponse(event.data)} 
                    onRowUnselect={this.onRowUnselect}>
                        <Column field="_id" header="_id" style={{display: 'none'}}></Column>
                        <Column field="nombre" header="Nombre" ></Column>
                        <Column field="apellido" header="Apellido"></Column>
                        <Column field="dni" header="DNI"></Column>
                        <Column field="direccion.provincia" header="Provincia"></Column>
                        <Column field="direccion.distrito" header="Distrito"></Column>
                </DataTable>
            </div>
        );
    }
}

export default DTReclamos;

