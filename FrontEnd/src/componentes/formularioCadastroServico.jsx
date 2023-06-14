import React, { useState } from "react";


export default function FormularioCadastroServico(props) {
    const [produtos, setProduto] = useState({
        nome: "",
        tipo: "servico",
        valor: 0,
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduto((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCadastro = async () => {
        try {
            const response = await fetch("http://localhost:3001/produtoServico/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(produtos)
            });

            if (response.ok) {
                console.log("Erro ao cadastrar servico");
            } else {
                console.log("Erro ao cadastrar servico");
            }
        } catch (error) {
            console.log("Ocorreu um erro:", error);
        }
    };

    let tema = props.tema
    return (
        <div className="container-fluid">
            <form>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nome"
                        aria-label="Nome"
                        aria-describedby="basic-addon1"
                        name="nome"
                        value={produtos.nome}
                        onChange={handleChange}
                        required
                    />            </div>
                <div className="input-group mb-3">
                    <input
                        required
                        type="number"
                        className="form-control"
                        placeholder="Valor"
                        aria-label="Valor"
                        aria-describedby="basic-addon1"
                        name="valor"
                        value={produtos.valor}
                        onChange={handleChange}
                    />                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" onClick={(e) => { handleCadastro(); props.seletorView('Servicos', e) }} style={{ background: tema }}>Cadastrar</button>
                </div>
            </form>
        </div>
    )
}