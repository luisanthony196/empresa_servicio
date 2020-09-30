import React, { Component } from 'react';
import classNames from 'classnames';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

class DTAtencion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: null
        };
    }

    onRowUnselect(event) {
    }

    statusBodyTemplate(rowData) {
        const stockClassName = classNames({
            'outofstock': rowData.solucion === false,
            'instock': rowData.solucion === true
        });

        return (
            <div className={stockClassName}>
                {rowData.solucion? 'Solucionado':'Sin solucionar'}
            </div>
        );
    }

    render() {
        return (
            <div className="">
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
                        <Column field="tipo" header="Tipo" ></Column>
                        <Column field="fecha_ate" header="Fecha atencion"></Column>
                        <Column field="solucion" body={this.statusBodyTemplate} header="Solucion"></Column>
                        <Column field="problema.tipo" header="Tipo"></Column>
                        <Column field="problema.descripcion" header="Descripcion"></Column>
                </DataTable>
            </div>
        );
    }
}

export default DTAtencion;
