/* eslint-disable jsx-a11y/anchor-is-valid */
export default function InterfaceListagem(props) {
    let tema = props.tema
    return (
        <div className="container-fluid">
            <ul className="navbar-nav">
                <li key={'Listagem dos 10 clientes que mais consumiram em quantidade'}>
                    <button type="button" className="btn btn-outline-primary" onClick={(e) => props.seletorView('Listagem dos 10 clientes que mais consumiram em quantidade', e)}>{'Listagem dos 10 clientes que mais consumiram em quantidade'}</button>
                </li>
                <br />
                <li key={'Listagem geral dos serviços e produtos mais consumidos em quantidade'} >
                    <button type="button" className="btn btn-outline-primary" onClick={(e) => props.seletorView('Listagem geral dos serviços e produtos mais consumidos em quantidade', e)}>{'Listagem geral dos serviços e produtos mais consumidos em quantidade'}</button>
                </li>
                <br />
                <li key={'Listagem dos 5 clientes que mais consumiram em valor'} >
                    <button type="button" className="btn btn-outline-primary" onClick={(e) => props.seletorView('Listagem dos 5 clientes que mais consumiram em valor', e)}>{'Listagem dos 5 clientes que mais consumiram em valor'}</button>
                </li>
            </ul>
        </div>
    )
}