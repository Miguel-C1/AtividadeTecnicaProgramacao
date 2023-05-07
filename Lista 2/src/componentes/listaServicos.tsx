/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
type props = {
    tema: string
    seletorView: Function
}

export default class ListaServicos extends Component<props>{
    render() {
        let tema = this.props.tema
        return (
            
            <div className="container-fluid">
                <div className="list-group">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Descrição</th>
                                <th scope="col">Valor</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row"><button type="button" className="btn btn-outline-dark" onClick={(e) => this.props.seletorView('AlterarServico', e)}>Alterar</button></th>
                                <td>Servico 1</td>
                                <td>120</td>
                                <td><input type="checkbox" name="" id="" /></td>
                            </tr>
                            <tr>
                            <th scope="row"><button type="button" className="btn btn-outline-dark" onClick={(e) => this.props.seletorView('AlterarServico', e)}>Alterar</button></th>
                                <td>Servico 2</td>
                                <td>1682</td>
                                <td><input type="checkbox" name="" id="" /></td>
                            </tr>
                            <tr>
                            <th scope="row"><button type="button" className="btn btn-outline-dark" onClick={(e) => this.props.seletorView('AlterarServico', e)}>Alterar</button></th>
                                <td>Servico 3</td>
                                <td>302</td>
                                <td><input type="checkbox" name="" id="" /></td>
                            </tr>
                        </tbody>
                    </table>

                    <button type="button" className="btn btn-outline-primary">{'Deletar'}</button>
                </div>
            </div>
        )
    }
}