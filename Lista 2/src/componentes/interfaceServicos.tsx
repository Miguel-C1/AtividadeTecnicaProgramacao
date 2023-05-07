/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type props = {
    tema: string
    seletorView: Function
}

export default class InterfaceServicos extends Component<props>{
    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li key={'Listar Servicos'}>
                        <button type="button" className="btn btn-outline-primary" onClick={(e) => this.props.seletorView('Listar Servicos', e)}>{'Listar Serviços'}</button>
                    </li>
                    <br />
                    <li key={'Cadastrar Servicos'} >
                    <button type="button" className="btn btn-outline-primary" onClick={(e) => this.props.seletorView('Cadastrar Servicos', e)}>{'Cadastrar Serviços'}</button>
                    </li>
                    <br />
                </ul>
            </div>
        )
    }
}