import React, { Component } from 'react'
import { login } from './UserFunctions'

class Login extends Component {
    constructor(){
        super()
        this.state = {
            email: '',
            senha: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

        const user = {
            email: this.state.email,
            senha: this.state.senha
        }

        login(user).then(res => {
            if(res) {
                this.props.history.push('/profile')
            }
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                <div className="col-md-6 mt-5-auto">
                <form noValidate onSubmit={this.onSubmit}>
                    <h1 className="h3.mb-3.font-weight-normal">Informe seus dados</h1>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" className="form-control"
                        name="email"
                        placeholder="Informe seu email"
                        value={this.state.email}
                        onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" className="form-control"
                        name="senha"
                        placeholder="Informe sua senha"
                        value={this.state.senha}
                        onChange={this.onChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-lg btn-primary btn-block">
                        Entrar
                    </button>
                </form>
                </div>
                </div>
            </div>
        )
    }
}

export default Login