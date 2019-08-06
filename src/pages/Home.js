import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAll } from '../store/actions/stock';
import Colors from '../constants/Colors';


class Home extends Component{
  state = {
    categorias:[{'Cat':'Categoria 1'},{'Cat':'Categoria 2'}],
    showModal:false
  }

  addCategory = () =>{
    this.setState({showModal:true})
  }

  handleAddCategory = () => {
    const val = {'Cat':'Categoria 3'}
    this.setState({categorias:[...this.state.categorias,val],showModal:false})
  }

  removeCategory = (cat) =>{
    const newArray = this.state.categorias.filter(c => c.Cat !== cat.Cat)
    this.setState({categorias:newArray})
  }

  render(){
    return (
      <div>
         <nav className="navbar" role="navigation"  aria-label="main navigation">
        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                User Name
              </a>

              <div className="navbar-dropdown is-right">
                <a className="navbar-item">
                  Settings
                </a>
                <a className="navbar-item">
                  Profile
                </a>
                <a className="navbar-item">
                  Cerrar Sesion
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      <section style={{backgroundColor:Colors.primary}} className="hero">
        <div className="hero-body">
          <p className="title">
            MasMelos
          </p>
          <p className="subtitle">
            Categorias
          </p>
        </div>
      </section>
      
      <div style={{width:'50%',margin:'0 auto',marginTop:20}}>
        {this.state.categorias.map((item, index) => (
          <div className='box' key={index} item={item} >
            <a className="delete" onClick={() => { this.removeCategory(item) }}></a>
            {item.Cat}
          </div>
        ))}
        <a style={{width:'100%'}} className="button is-success" onClick={ () => {this.addCategory()}}>
          <span className="icon is-small">
            <i className="fas fa-check"></i>
          </span>
          <span>Añadir Categoria</span>
        </a>
        
      </div>
      {
        this.state.showModal ?

        <div class="modal is-active">
      <div class="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">Agregar Categoria</p>
              <button class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
              <input class="input" type="text" placeholder="Text input"/>
            </section>
            <footer class="modal-card-foot">
              <button class="button is-success" onClick={() => {this.handleAddCategory()}}>Añadir</button>
              <button class="button" onClick={() => {this.setState({showModal:false})}}>Cancel</button>
            </footer>
          </div>
      </div>:null
      }
      

    </div>

    )
  }
}

const mapStateToProps = state => {
    return {
      stock: state.stock,
      cartProducts: state.cart.products,
      isLoading: state.ui.isLoading,
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      onGetProducts: () => dispatch(getAll())
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home)
