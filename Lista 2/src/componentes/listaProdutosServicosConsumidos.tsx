/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
type props = {
    tema: string
}

export default class ListaProdutosServicosConsumidos extends Component<props>{
    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <div className="list-group">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Descrição</th>
                                <th scope="col">Valor</th>
                                <th scope="col">Quantidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Produto 1</td>
                                <td>300</td>
                                <td>1000</td>
                            </tr>
                            <tr>
                                <td>Produto 2</td>
                                <td>150</td>
                                <td>700</td>
                            </tr>
                            <tr>
                                <td>Produto 3</td>
                                <td>2000</td>
                                <td>200</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}