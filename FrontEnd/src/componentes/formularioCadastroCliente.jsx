import React, { useState } from "react";

export default function FormularioCadastroCliente(props) {
    const [cliente, setCliente] = useState({
        nome: "",
        nomeSocial: "",
        cpf: "",
        email: "",
        dataEmissaoCpf: new Date()
    });

    const [telefone, setTelefone] = useState({
        clienteId: 0,
        ddd: "",
        numero: ""
    })

    const [rg, setRg] = useState({
        clienteId: 0,
        valor: "",
        dataEmissao:new Date(),
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCliente((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleChangeTelefone = (event) => {
        const { name, value } = event.target;
        setTelefone((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleChangeRG = (event) => {
        const { name, value } = event.target;
        setRg((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCadastroRg = async (clienteId) => {
        try {

            const rgFormatado = {
                ...rg,
                clienteId: clienteId
            }

            const response = await fetch(`http://localhost:3001/rg/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(rgFormatado)
            });

            if (response.ok) {
                console.log("RG cadastrado com sucesso");
            } else {
                console.log("Erro ao cadastrar RG");
            }
        } catch (error) {
            console.log("Ocorreu um erro:", error);
        }
    };

    const handleCadastroTelefone = async (clienteId) => {
        try {
            const telefoneFormatado = {
                ...telefone,
                clienteId: clienteId
            }
            const response = await fetch(`http://localhost:3001/telefone/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(telefoneFormatado)
            });

            if (response.ok) {
                console.log("Telefone cadastrado com sucesso");
            } else {
                console.log("Erro ao cadastrar telefone");
            }
        } catch (error) {
            console.log("Ocorreu um erro:", error);
        }
    };



    const handleCadastro = async () => {
        try {
            const response = await fetch("http://localhost:3001/cliente/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(cliente)
            });

            if (response.ok) {

                const clienteCadastrado = await response.json();
                const clienteId = clienteCadastrado.id;
                console.log(clienteCadastrado)
                console.log(clienteId)
                setTelefone({
                    ...telefone,
                    clienteId: clienteId
                })
                setRg({
                    ...rg,
                    clienteId: clienteId
                })
                await handleCadastroRg(clienteId);
                await handleCadastroTelefone(clienteId); 
                console.log("Cliente cadastrado com sucesso");
            } else {
                console.log("Erro ao cadastrar cliente");
            }
        } catch (error) {
            console.log("Ocorreu um erro:", error);
        }
    };

    let tema = props.tema;

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
                        value={cliente.nome}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nome social"
                        aria-label="Nome social"
                        aria-describedby="basic-addon1"
                        name="nomeSocial"
                        value={cliente.nomeSocial}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="CPF"
                        aria-label="CPF"
                        aria-describedby="basic-addon1"
                        name="cpf"
                        value={cliente.cpf}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group mb-3">
                    <input
                        type="date"
                        className="form-control"
                        placeholder="Data Emissão CPF"
                        aria-label="Data Emissão CPF"
                        aria-describedby="basic-addon1"
                        name="dataEmissaoCpf"
                        value={cliente.dataEmissaoCpf}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group mb-3">
                    <input
                         type="text"
                        className="form-control"
                        placeholder="RG"
                        aria-label="RG"
                        aria-describedby="basic-addon1"
                        name="valor"
                        value={rg.valor}
                        onChange={handleChangeRG}
                    />
                </div>
                <div className="input-group mb-3">
                    <input
                        type="date"
                        className="form-control"
                        placeholder="Data Emissão RG"
                        aria-label="Data Emissão RG"
                        aria-describedby="basic-addon1"
                        name="dataEmissao"
                        value={rg.dataEmissao}
                        onChange={handleChangeRG}
                    />
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Telefone DDD"
                        aria-label="Telefone DDD"
                        aria-describedby="basic-addon1"
                        name="ddd"
                        value={telefone.ddd}
                        onChange={handleChangeTelefone}
                    />
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Telefone Número"
                        aria-label="Telefone Número"
                        aria-describedby="basic-addon1"
                        name="numero"
                        value={telefone.numero}
                        onChange={handleChangeTelefone}
                    />
                </div>
                <div className="input-group mb-3">
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        style={{ background: tema }}
                        onClick={(e) => { handleCadastro(); props.seletorView('Clientes', e)}}
                    >
                        Cadastrar
                    </button>
                </div>
            </form>
        </div>
    );
}
