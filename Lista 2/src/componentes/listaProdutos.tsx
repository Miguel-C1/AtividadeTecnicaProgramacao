/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
type props = {
    tema: string
    seletorView: Function
}

export default class ListaProduto extends Component<props>{
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
                                <th scope="row"><button type="button" className="btn btn-outline-dark" onClick={(e) => this.props.seletorView('AlterarProduto', e)}>Alterar</button></th>
                                <td>Produto 1</td>
                                <td>300</td>
                                <td><input type="checkbox" name="" id="" /></td>
                            </tr>
                            <tr>
                            <th scope="row"><button type="button" className="btn btn-outline-dark" onClick={(e) => this.props.seletorView('AlterarProduto', e)}>Alterar</button></th>
                                <td>Produto 2</td>
                                <td>150</td>
                                <td><input type="checkbox" name="" id="" /></td>
                            </tr>
                            <tr>
                            <th scope="row"><button type="button" className="btn btn-outline-dark" onClick={(e) => this.props.seletorView('AlterarProduto', e)}>Alterar</button></th>
                                <td>Produto 3</td>
                                <td>2000</td>
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