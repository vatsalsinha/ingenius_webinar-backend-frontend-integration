import React from 'react';
import axios from 'axios';

class Todo extends React.Component{
    state={data:[], item: ""}
    componentDidMount(){
        this.getTodos()
    }
    getTodos = () =>{
        axios.get('http://localhost:8000/api/', {
            headers: {
                'accept': 'application/json'
            }
        }).then(resp => {
            console.log(resp)
            this.setState({data: resp.data})
        })
    }
    onFormSubmit = () => {
        var itm = {'detail': this.state.item};
        console.log(itm)
        axios.post('http://localhost:8000/api/', itm).then(res => this.getTodos())
        this.setState({item: " "})
    }
    renderTodos(){
        return(
            <div>
                {this.state.data.map(d => {
                    return <li key = {d.id}>{d.detail}</li>
                })}
            </div>
        )
    }
    render(){
        return (
            <div>
                <label name = "todo">Todo: </label>
                <input value = {this.state.item} onChange = {e => this.setState({item: e.target.value})} />
                <button onClick = {this.onFormSubmit}>Add</button>
                <hr/>
                Current todos:
                {this.renderTodos()}
            </div>
        )
    }
}

export default Todo;