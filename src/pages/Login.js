import React, { Component } from 'react';
import Colors from '../constants/Colors';
import { AUTH_SET_TOKEN } from '../store/actions/actionTypes';
import logo from '../assets/images/logomasmelos.png'


export default class Login extends Component{
  state = {
    
  }

  handleLogin = () => {
    this.props.history.push('/home');
  }

  render(){
    return (
      <div>
        <figure style={{ margin: '0 auto',marginTop:20,marginBottom:20}} class="image is-128x128">
            <img src={logo}/>
        </figure>
        <div style={styles.container} className="field">
            <label className="label">Email</label>
            <div className="control">
                <input className="input" type="email" placeholder="Email input" />  
            </div>
        </div>
        <div style={styles.container} className="field">
            <label className="label">Contraseña</label>
            <div className="control">
                <input className="input" type="password" placeholder="Text input"/>
            </div>
        </div>
        <button style={{backgroundColor:Colors.primary,color:'white',marginTop:20,width:'50%'}} className="button" onClick={this.handleLogin}>Ingresar</button>
      </div>

    )
  }
}

let styles = {
    container: {
      width:'50%',
      margin: '0 auto',
    }
  }