import React, { useState, useEffect } from "react";


export default function FormularioCadastroConsumoCliente(props) {

    const [clientes, setClientes] = useState([])
    const [produtoServico, setProdutoServico] = useState([])
    const [pets, setPet] = useState([])

    const [form, setForm] = useState({
        clienteId: 0,
        produtoServicoId: 0,
        petId: 0,
        quantidade: 0,
    })

    const handleCadastro = async () => {
        try {
            const response = await fetch("http://localhost:3001/compras/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            });
           
        } catch (error) {
            console.log("Ocorreu um erro:", error);
        }
    };


    useEffect(() => {
        fetchData();
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:3001/cliente/", { method: "GET" });
            const data = await response.json();
            setClientes(data);
            const response2 = await fetch(`http://localhost:3001/pet/`, { method: "GET" });
            const data2 = await response2.json();
            setPet(data2);
            const response3 = await fetch(`http://localhost:3001/produtoServico/`, { method: "GET" });
            const data3 = await response3.json();
            setProdutoServico(data3)
        } catch (error) {
            console.log("Ocorreu um erro ao buscar os clientes:", error);
        }
    };

    let tema = props.tema
    return (
        <div className="container-fluid">
            <form>
                <div className="input-group mb-3">
                    <label htmlFor="clienteId">Cliente:</label>
                    <select
                        className="form-select"
                        id="clienteId"
                        name="clienteId"
                        value={form.clienteId}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Selecione um cliente</option>
                        {clientes.map((cliente) => (
                            <option key={cliente.id} value={cliente.id}>
                                {cliente.nome}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="input-group mb-3">
                <label htmlFor="produtoServicoId">Produto/Serviço:</label>
                    <select
                        className="form-select"
                        id="produtoServicoId"
                        name="produtoServicoId"
                        value={form.produtoServicoId}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Selecione um Produto/Serviço</option>
                        {produtoServico.map((produtoServico) => (
                            <option key={produtoServico.id} value={produtoServico.id}>
                                {produtoServico.nome}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="input-group mb-3">
                    <label htmlFor="quantidade">Quantidade:</label>
                    <input
                        required
                        type="number"
                        className="form-control"
                        placeholder="Quantidade"
                        aria-label="Quantidade"
                        aria-describedby="basic-addon1"
                        name="quantidade"
                        value={form.quantidade}
                        onChange={handleChange}
                    />                </div>
                <div className="input-group mb-3">
                <label htmlFor="petId">Pet "Não Obrigatório":</label>
                    <select
                        className="form-select"
                        id="clienteId"
                        name="clienteId"
                        value={form.petId}
                        onChange={handleChange}
                        
                    >
                        <option value="">Selecione um Pet</option>
                        {pets.map((pet) => (
                            <option key={pet.id} value={pet.id}>
                                {pet.nome}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="input-group mb-3">
                <button
                        className="btn btn-outline-secondary"
                        type="button"
                        style={{ background: tema }}
                        onClick={(e) => { handleCadastro(); props.seletorView('Clientes', e)}}
                    >
                        Cadastrar
                    </button>                </div>
            </form>
        </div>
    )
}