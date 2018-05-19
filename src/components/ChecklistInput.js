import React from 'react';

import { render } from 'react-dom';
import './ChecklistInput.css';

export default class ChecklistInput extends React.Component {
    constructor(props){
        super(props)
        this.state = {
           value: " "
        };

        this.handleChange = this.handleChange.bind(this);
        this.addList = this.addList.bind(this);
    }
    handleChange(e)
    {
        this.setState({value: e.target.value});
    }
   
    addList(list)
    {
        if(list.length > 0) {
            this.props.addList(list);
            this.setState({value:''});
        }

   
    }

    render(){
        return(
            <div>
            <input placeholder="Enter text!" type="text" value = {this.state.value} onChange={this.handleChange}/>
            <button className="btn btn-primary" onClick = {() => this.addList(this.state.value)}>
                Submit
                </button> 

        
          </div>
        );
    }
}