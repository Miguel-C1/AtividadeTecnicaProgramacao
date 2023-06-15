/* eslint-disable jsx-a11y/anchor-is-valid */
export default function InterfacePet(props) {
    let tema = props.tema
    return (
        <div className="container-fluid">
                <ul className="navbar-nav">
                    <li key={'Listar Pet'}>
                        <button type="button" className="btn btn-outline-primary" onClick={(e) => props.seletorView('Listar Pet', e)}>{'Listar Pet'}</button>
                    </li>
                    <br />
                    <li key={'Cadastrar Pet'} >
                    <button type="button" className="btn btn-outline-primary" onClick={(e) => props.seletorView('Cadastrar Pet', e)}>{'Cadastrar Pet'}</button>
                    </li>
                    <br />
                </ul>
            </div>
    )
}