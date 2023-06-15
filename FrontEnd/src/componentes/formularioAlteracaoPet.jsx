import React, { useState, useEffect } from "react";

export default function FormularioCadastroPet(props) {
  const [pet, setPet] = useState({
    nome: "",
    tipo: "",
    raca: "",
    genero: "",
    clienteId: 0,
  });
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    fetchClientes();
  }, []);

  const fetchClientes = async () => {
    try {
      const response = await fetch("http://localhost:3001/cliente/", { method: "GET"});
      const data = await response.json();
      setClientes(data);
      const response2 = await fetch(`http://localhost:3001/pet/${props.id}`, { method: "GET"});
      const data2 = await response2.json(); 
      setPet(data2);
    } catch (error) {
      console.log("Ocorreu um erro ao buscar os clientes:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPet((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCadastro = async () => {
    try {
      const response = await fetch("http://localhost:3001/pet/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pet),
      });

      if (response.ok) {
        console.log("Erro ao cadastrar pet");
      } else {
        console.log("Pet cadastrado com sucesso");
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
            value={pet.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Tipo Pet"
            aria-label="Tipo Pet"
            aria-describedby="basic-addon1"
            name="tipo"
            value={pet.tipo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Raça Pet"
            aria-label="Raça Pet"
            aria-describedby="basic-addon1"
            name="raca"
            value={pet.raca}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Gênero Pet"
            aria-label="Gênero Pet"
            aria-describedby="basic-addon1"
            name="genero"
            value={pet.genero}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group mb-3">
          <label htmlFor="clienteId">Cliente:</label>
          <select
            className="form-select"
            id="clienteId"
            name="clienteId"
            value={pet.clienteId}
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
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={(e) => {
              handleCadastro();
              props.seletorView("Pet", e);
            }}
            style={{ background: tema }}
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}
