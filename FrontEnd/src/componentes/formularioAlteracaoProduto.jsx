import React, { useState, useEffect } from "react";


export default function FormularioAlteracaoProduto(props) {
    const [produtos, setProduto] = useState({
        nome: "",
        tipo: "produto",
        valor: 0,
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduto((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    useEffect(() => {
      fetchClientes();
    }, []);
  
    const fetchClientes = async () => {
      try {
       
        const response2 = await fetch(`http://localhost:3001/produtoServico/porId/${props.id}`, { method: "GET"});
        const data2 = await response2.json(); 
        console.log(data2)
        setProduto(data2);
      } catch (error) {
        console.log("Ocorreu um erro ao buscar os clientes:", error);
      }
    };

    const handleCadastro = async () => {
        try {
            const response = await fetch(`http://localhost:3001/produtoServico/${props.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(produtos)
            });

            if (response.ok) {
                console.log("Erro ao cadastrar produto");
            } else {
                console.log("Erro ao cadastrar produto");
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
                    <button className="btn btn-outline-secondary" type="button" onClick={(e) => { handleCadastro(); props.seletorView('Produtos', e) }} style={{ background: tema }}>Alterar</button>
                </div>
            </form>
        </div>
    )
}