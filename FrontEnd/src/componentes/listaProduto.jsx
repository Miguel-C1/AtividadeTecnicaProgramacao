/* eslint-disable jsx-a11y/anchor-is-valid */

import { useEffect, useState } from "react";


export default function ListaProduto(props) {

    const [produtos, setProdutos] = useState([])
    const [produtoSelecionado, setProdutosSelecionados] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:3001/produtoServico/produto/", {
                method: "GET",
            });
            const data = await response.json();
            setProdutos(data);
        } catch (error) {
            console.log("Ocorreu um erro:", error);
        }
    };

    const handleCheckboxChange = (event, usuarioId) => {
        const isChecked = event.target.checked;

        if (isChecked) {
            setProdutosSelecionados((prevSelecionados) => [...prevSelecionados, usuarioId]);
        } else {
            setProdutosSelecionados((prevSelecionados) =>
                prevSelecionados.filter((id) => id !== usuarioId)
            );
        }
    };

    const handleDelete = async () => {
        try {
            await Promise.all(
                produtoSelecionado.map(async (usuarioId) => {
                    await fetch(`http://localhost:3001/produtoServico/${usuarioId}`, {
                        method: "DELETE",
                    });
                })
            );

            setProdutosSelecionados([]);
            fetchData();
        } catch (error) {
            console.log("Ocorreu um erro ao excluir os Produtos:", error);
        }
    };

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
                        {produtos.map((produto) => (
                            <tr key={produto.id}>
                                <th scope="row">
                                    <button
                                        type="button"
                                        className="btn btn-outline-dark"
                                        onClick={(e) => props.seletorView("AlterarProduto", e, produto.id)}
                                    >
                                        Alterar
                                    </button>
                                </th>
                                <td>{produto.nome}</td>
                                <td>{produto.valor}</td>
                                <td>
                                    <input
                                        type="checkbox"
                                        name=""
                                        id=""
                                        onChange={(e) => handleCheckboxChange(e, produto.id)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>

                <button type="button" className="btn btn-outline-primary" onClick={handleDelete}>
                    Deletar
                </button>
            </div>
        </div>
    )
}