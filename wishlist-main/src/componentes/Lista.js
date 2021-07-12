import { render } from '@testing-library/react';
import react, { Component, componet } from 'react';
import './Lista.css'
 class Lista extends Component {

    constructor(props) {
        super(props);

        this.state = {

            email: "",
            senha: "",
            desejo: "",
            lista: []
        }
    }

    atualizarestadoemail = (emaildigitado) => {
        this.setState({ email: emaildigitado.target.value })
    }

    atualizarestadosenha = (senhadigitada) => {
        this.setState({ senha: senhadigitada.target.value })
    }

    listar = () => {
        console.log(" Agora vamos a chamada para API")

        let url = 'http://localhost:5000/api/desejos'

            .then(res => res.json())

            .then(dados => this.setstate({ lista: dados }))

            .catch(erro => console.log(erro))
    }

    componetDidMount() { }


    render() {
       return(
        <div className="Lista">
        <main>
            <section className="topo">
                <form onSubmit>
                    <input type="text" placeholder="Email" value={this.state.email}onChange ={this.atualizarestadoemail}></input>
                    <input type="text" placeholder="Senha" value={this.state.senha}onChange={this.atualizarestadosenha}></input> 
                    <button type="submit">Buscar</button>

                </form>
            </section>
            <section className="lista">
                <table>
                    <thead>
                        <tr>
                            <th>Descricao</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.lista.map((lista) => {
                                return (
                                    <tr key={lista.idDesejos}>
                                        <td>{lista.Descricao}</td>
                                    </tr>
                                )
                            }
                            )
                        }


                    </tbody>
                </table>
            </section>
            <section className="cadastro">
                <input type="text" value={this.state.desejo}></input>
                <button type="submit ">meu desejo é uma ordem</button>

            </section>
            <sidebar>
                <img src="./componentes/img/image 2.png" />
            </sidebar>
        </main>

    </div>
       )
    }

}
 
export default Lista


