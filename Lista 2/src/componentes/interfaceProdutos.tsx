/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type props = {
    tema: string
    seletorView: Function
}

export default class InterfaceProduto extends Component<props>{
    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li key={'Listar Produtos'}>
                        <button type="button" className="btn btn-outline-primary" onClick={(e) => this.props.seletorView('Listar Produtos', e)}>{'Listar Produtos'}</button>
                    </li>
                    <br />
                    <li key={'Cadastrar Produto'} >
                    <button type="button" className="btn btn-outline-primary" onClick={(e) => this.props.seletorView('Cadastrar Produto', e)}>{'Cadastrar Produto'}</button>
                    </li>
                    <br />
                </ul>
            </div>
        )
    }
}