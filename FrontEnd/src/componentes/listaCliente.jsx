import { useEffect, useState } from "react";

export default function ListaCliente(props) {
    const [clientes, setClientes] = useState([]);
    const [usuariosSelecionados, setUsuariosSelecionados] = useState([]);


    const handleCheckboxChange = (event, usuarioId) => {
        const isChecked = event.target.checked;

        if (isChecked) {
            setUsuariosSelecionados((prevSelecionados) => [...prevSelecionados, usuarioId]);
        } else {
            setUsuariosSelecionados((prevSelecionados) =>
                prevSelecionados.filter((id) => id !== usuarioId)
            );
        }
    };

    const handleDelete = async () => {
        try {
            await Promise.all(
                usuariosSelecionados.map(async (usuarioId) => {
                    await fetch(`http://localhost:3001/cliente/${usuarioId}`, {
                        method: "DELETE",
                    });
                })
            );

            setUsuariosSelecionados([]);
            fetchData();
        } catch (error) {
            console.log("Ocorreu um erro ao excluir os usuários:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    
    

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:3001/cliente/", {
                method: "GET",
            });
            const data = await response.json();
            setClientes(data);
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
                            <th scope="col">CPF</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map((cliente) => (
                            <tr key={cliente.id}>
                                <th scope="row">
                                    <button
                                        type="button"
                                        className="btn btn-outline-dark"
                                        onClick={(e) => props.seletorView("AlterarCliente", e, cliente.id)}
                                    >
                                        Alterar
                                    </button>
                                </th>
                                <td>{cliente.nome}</td>
                                <td>{cliente.CPF}</td>
                                <td>
                                    <input
                                        type="checkbox"
                                        name=""
                                        id=""
                                        onChange={(e) => handleCheckboxChange(e, cliente.id)}
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
    );
}
