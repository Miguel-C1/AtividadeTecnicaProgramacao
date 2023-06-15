/* eslint-disable jsx-a11y/anchor-is-valid */

import { useEffect, useState } from "react";


export default function ListaPet(props) {

    const [pet, setPet] = useState([])
    const [petSelecionado, setPesSelecionados] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:3001/pet/", {
                method: "GET",
            });
            const data = await response.json();
            setPet(data);
        } catch (error) {
            console.log("Ocorreu um erro:", error);
        }
    };

    const handleCheckboxChange = (event, usuarioId) => {
        const isChecked = event.target.checked;

        if (isChecked) {
            setPesSelecionados((prevSelecionados) => [...prevSelecionados, usuarioId]);
        } else {
            setPesSelecionados((prevSelecionados) =>
                prevSelecionados.filter((id) => id !== usuarioId)
            );
        }
    };

    const handleDelete = async () => {
        try {
            await Promise.all(
                petSelecionado.map(async (usuarioId) => {
                    await fetch(`http://localhost:3001/pet/${usuarioId}`, {
                        method: "DELETE",
                    });
                })
            );

            setPesSelecionados([]);
            fetchData();
        } catch (error) {
            console.log("Ocorreu um erro ao excluir os Pet:", error);
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
                            <th scope="col">Raça</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Dono</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {pet.map((pet) => (
                            <tr key={pet.id}>
                                <th scope="row">
                                    <button
                                        type="button"
                                        className="btn btn-outline-dark"
                                        onClick={(e) => props.seletorView("AlterarPet", e, pet.id)}
                                    >
                                        Alterar
                                    </button>
                                </th>
                                <td>{pet.nome}</td>
                                <td>{pet.raca}</td>
                                <td>{pet.tipo}</td>
                                <td>{pet.Cliente.nome}</td>
                                <td>
                                    <input
                                        type="checkbox"
                                        name=""
                                        id=""
                                        onChange={(e) => handleCheckboxChange(e, pet.id)}
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