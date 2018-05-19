import React from 'react';
import './ListItem.css';

export default class ListItem extends React.Component {
    constructor(props){
        super(props);
    }
   



removeList(id) {
    this.props.removeList(id);
}


render(){
    return(
        <div className="listWrap">
            <button className="removeList" onClick={(e) => this.removeList((this.props.id))}> Remove</button>{this.props.list.text}
            
            


            </div>

            )
   
        }


}