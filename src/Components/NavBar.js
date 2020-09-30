import React, {Component} from 'react'
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.itemsStart = [
            {
                label: 'Reclamos',
                command: () => {
                    window.location.href = '/Reclamos'
                }
            },
            {
                label: 'Atencion',
                command: () => {
                    window.location.href = '/Atencion'
                }
            }
        ];
    }

    render() {
        return (
            <div>
                <div className="card">
                    <Menubar model={this.itemsStart}/>
                </div>
            </div>
        );
    }
}

export default Navbar;