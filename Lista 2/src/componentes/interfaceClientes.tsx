/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type props = {
    tema: string
    seletorView: Function
}

export default class InterfaceCliente extends Component<props>{
    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li key={'Listar Clientes'}>
                        <button type="button" className="btn btn-outline-primary" onClick={(e) => this.props.seletorView('Listar Clientes', e)}>{'Listar Clientes'}</button>
                    </li>
                    <br />
                    <li key={'Cadastrar Cliente'} >
                    <button type="button" className="btn btn-outline-primary" onClick={(e) => this.props.seletorView('Cadastrar Cliente', e)}>{'Cadastrar Cliente'}</button>
                    </li>
                    <br />
                    <li key={'Registrar Consumo do Cliente'} >
                    <button type="button" className="btn btn-outline-primary" onClick={(e) => this.props.seletorView('Registrar Consumo do Cliente', e)}>{'Registrar Consumo do Cliente'}</button>
                    </li>
                </ul>
            </div>
        )
    }
}