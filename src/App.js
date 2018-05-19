import React, { Component } from 'react';
import './App.css';
import Header2 from './components/Header2';
import ChecklistInput from './components/ChecklistInput';
import ListItem from './components/ListItem';

class App extends Component {
  constructor(props)
  {
     super(props);
     this.state= {
       lists:[
         {id: 0, text: "Complete assignments"},
         {id: 1, text: "Pay rent"},
         {id: 3, text: "Cleanup room"}
       ],
       nextId : 4
     }
     this.addList = this.addList.bind(this);
     this.removeList = this.removeList.bind(this);
  }
  addList(addText)
  {
    let lists = this.state.lists.slice();
    lists.push({id: this.state.nextId, text: addText});
    this.setState(
      {
        lists: lists,
        nextId: ++this.state.nextId
      }
    )
  }

  removeList(id)
  {
   this.setState({
     lists: this.state.lists.filter((list, index) => list.id != id)
   })
  }
  render() {
    return (
      <div className="App">
      <div className="todo-boundry">
      <Header2 />
      <ChecklistInput addText="" addList={this.addList} />
      <ul>
        {
          this.state.lists.map((list) => {
            return <ListItem list={list} key={list.id} id={list.id} removeList={this.removeList}/>
          })
        }
      </ul>
    </div>
    </div>
    )
    }
  
}

export default App;
