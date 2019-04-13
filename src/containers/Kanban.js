import React, {Component} from 'react';
import Column from '../components/Column';
import './Kanban.css';

let next = {
    "col1": "col2",
    "col2": "col3",
    "col3": "col4" 
}

let back = {
    "col4": "col3",
    "col3": "col2",
    "col2": "col1"
}

class Kanban extends Component {
    state = {
        col1: [0,1],
        col2: [2,3],
        col3: [4,5],
        col4: [5,6],
        cardNum: 7
    }

    addItemHandler = (col) => {
        const item = window.prompt("Add Item: ");
        let temp = [...this.state[col]];
        temp.push(item);
        this.setState({[col]: temp});
    }

    forwardHandler = (col, card) => {
        let tempAdd = [...this.state[next[col]]];
        tempAdd.push(card);
        let tempDelete = [...this.state[col]];
        let index = tempDelete.indexOf(card);
        tempDelete.splice(index, 1);
        this.setState({
            [col]: tempDelete,
            [next[col]]: tempAdd
        })
    }

    backHandler = (col, card) => {
        let tempAdd = [...this.state[back[col]]];
        tempAdd.push(card);
        let tempDelete = [...this.state[col]];
        let index = tempDelete.indexOf(card);
        tempDelete.splice(index, 1);
        this.setState({
            [col]: tempDelete,
            [back[col]]: tempAdd
        })
    }

    render() {
        return (
            <div className="Kanban">
                <div className="col1">
                    <p>To Do</p>
                    <Column 
                        cards={this.state.col1}
                        col="col1"
                        forward={this.forwardHandler}
                        addItem={this.addItemHandler}/>
                </div>
                <div className="col2">
                    <p>In Progress</p>
                    <Column 
                        cards={this.state.col2}
                        col="col2"
                        forward={this.forwardHandler}
                        back={this.backHandler}
                        addItem={this.addItemHandler}/>
                </div>
                <div className="col3">
                    <p>Code Review</p>
                    <Column 
                        cards={this.state.col3}
                        col="col3"
                        forward={this.forwardHandler}
                        back={this.backHandler}
                        addItem={this.addItemHandler}/>
                </div>
                <div className="col4">
                    <p>Done</p>
                    <Column 
                        cards={this.state.col4}
                        col="col4"
                        back={this.backHandler}
                        addItem={this.addItemHandler}/>
                </div>
            </div>
        )
    }
}

export default Kanban;
