import React,{Component} from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

class LoginForm extends Component{
    render(){
        return(
            <form autoComplete="off" onSubmit={this.props.onSubmit}>
                <div className="p-col-fixed" style={{ width: '320px'}}>
                    <div className="p-grid p-fluid">
                        <div className="p-col-12">
                            <InputText 
                                value={this.props.formValues.Credencial}
                                name="telefono"
                                onChange={this.props.onChange}
                                type="text" 
                                className="p-inputtext-lg p-d-block"
                                placeholder="Usuario"/>
                        </div>
                    </div>
                    <div className="p-grid p-fluid">
                        <div className="p-col-12">
                            <InputText 
                                value={this.props.formValues.Contraseña}
                                name="dni"
                                onChange={this.props.onChange}
                                type="password"
                                className="p-inputtext-lg p-d-block"  
                                placeholder="Contraseña"/>
                        </div>
                    </div>
                    <Button 
                        label="Ingresar" 
                        onClick={this.handleClick}
                        className="p-button"/>
                </div>
            </form>
        );
    }
}

export default LoginForm;