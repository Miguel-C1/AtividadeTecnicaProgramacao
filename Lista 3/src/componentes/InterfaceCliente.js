/* eslint-disable jsx-a11y/anchor-is-valid */
export default function InterfaceCliente(props) {
    let tema = props.tema
    return (
        <div className="container-fluid">
                <ul className="navbar-nav">
                    <li key={'Listar Clientes'}>
                        <button type="button" className="btn btn-outline-primary" onClick={(e) => props.seletorView('Listar Clientes', e)}>{'Listar Clientes'}</button>
                    </li>
                    <br />
                    <li key={'Cadastrar Cliente'} >
                    <button type="button" className="btn btn-outline-primary" onClick={(e) => props.seletorView('Cadastrar Cliente', e)}>{'Cadastrar Cliente'}</button>
                    </li>
                    <br />
                    <li key={'Registrar Consumo do Cliente'} >
                    <button type="button" className="btn btn-outline-primary" onClick={(e) => props.seletorView('Registrar Consumo do Cliente', e)}>{'Registrar Consumo do Cliente'}</button>
                    </li>
                </ul>
            </div>
    )
}