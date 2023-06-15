/* eslint-disable jsx-a11y/anchor-is-valid */

import { useEffect, useState } from "react";


export default function ListaClientesMaisConsumiram(props) {
    let tema = props.tema

    const [compra, setCompras] = useState([])

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:3001/compras/listagem/Consumo-qtd-cli-val", {
                method: "GET",
            });
            const data = await response.json();
            setCompras(data);
        } catch (error) {
            console.log("Ocorreu um erro:", error);
        }
    };
    return (
        <div className="container-fluid">
            <div className="list-group">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {compra.map((compra, index) => (
                            <tr key={compra.clienteId}>
                                <th scope="row">
                                    {index+1}
                                </th>
                                <td>{compra.nome}</td>
                                <td>{compra.valorTotal}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}