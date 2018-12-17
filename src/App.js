import React, { Component } from 'react';
import firebase from 'firebase';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      user: null
    };

    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleAuth(){
    //esto crea un proveedor de google para utilizar
    const provider = new firebase.auth.GoogleAuthProvider();

    //este sigIn devuelve una promesa
    firebase.auth().signInWithPopup(provider)
        .then(result => {
            console.log(`${result.user.displayName} ha inciado sesion`)
        })
        .catch(error => {
          console.log(`Error ${error.code}: ${error.message}`)
        })
  }

  handleLogout(){
    firebase.auth().signOut() //tambien devuelve una promesa
        .then(result => {
            console.log(`${result.user.displayName} ha salido del sistema`)
        })
        .catch(error => {
            console.log(`Error ${error.code}: ${error.message}`)
        })
  }

  renderLoginButton(){
    if( this.state.user ){
      return (
          <div>
              <img className="avatar" src={this.state.user.photoURL} alt={this.state.user.displayName}/>
              <p>Bienvenido {this.state.user.displayName} !!</p>
              <button onClick={this.handleLogout}>Salir</button>
          </div>
      );
    }else {
        return(
            <button className="" onClick={this.handleAuth}>Sign in with Google</button>
        );
    }
  }
  //es un metodo de ciclo de vida, que se dispara una vez que haya sido renderizado en DOM
  componentWillMount(){
    firebase.auth()
        .onAuthStateChanged(user =>{
          this.setState({
              user: user //ahora user vale lo que nos devuelve la funcion onAuthState
          })
        })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Not Instagram App</h2>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
              {this.renderLoginButton()}
          </p>

        </header>
      </div>
    );
  }
}

export default App;
