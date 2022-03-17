import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export default class Form extends Component {
    setTasks = this.props.setTasks;

    constructor(props){
        super(props);

        this.state= {
            title:"",
            message:""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getTitle = (e) => {
        this.setState({title: e.target.value});
    }
    getMessage = (e) => {
        this.setState({message: e.target.value});
    }
    handleSubmit(event){
        event.preventDefault();
        const newItem = {
            id: Math.floor(Math.random() * 9999999),
            titre: this.state.title,
            message: this.state.message
        };
        this.setTasks(prev => [...prev, newItem])
    }

    render(){
        return (
            <form className="formulaire" onSubmit={this.handleSubmit}>
                <input type="text" className="title" placeholder="Titre" onChange={this.getTitle}/>
                <textarea rows="4" className="texte" placeholder="Votre message" onChange={this.getMessage}/>
                <button type={"submit"} className="btn-form">Ajouter</button>
            </form>
        )
    }
}

      
