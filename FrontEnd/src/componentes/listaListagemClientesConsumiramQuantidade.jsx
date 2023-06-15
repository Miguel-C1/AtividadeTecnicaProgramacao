/* eslint-disable jsx-a11y/anchor-is-valid */

import { useEffect, useState } from "react";


export default function ListaClienteMaisConsumiramQuantidade(props) {


    const [compra, setCompras] = useState([])

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:3001/compras/listagem/Consumo-qtd-cli", {
                method: "GET",
            });
            const data = await response.json();
            setCompras(data);
        } catch (error) {
            console.log("Ocorreu um erro:", error);
        }
    };


    let tema = props.tema
    return (
        <div className="container-fluid">
            <div className="list-group">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Quantidade Consumida</th>
                        </tr>
                    </thead>
                    <tbody>
                        {compra.map((compra, index) => (
                            <tr key={compra.clienteId}>
                                <th scope="row">
                                    {index+1}
                                </th>
                                <td>{compra.nome}</td>
                                <td>{compra.somaQuantidade}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}