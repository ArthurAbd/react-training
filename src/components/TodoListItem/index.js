import React from 'react';

import './TodoListItem.css'

export default class TodoListItem extends React.Component {

    state = {
        done: false,
        important: false
    }

    onLabelClick = () => {
        this.setState({
            done: this.state.done ? false : true
        })
    }
    onImportant = () => {
        this.setState({
            important: this.state.important ? false : true
        })
    }

    
    render() {
        const { label = false } = this.props;
        const { done, important } = this.state;
        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }
        if (important) {
            classNames += ' important';
        }
        
        return (
            <span className={classNames}>
                <span
                    className="todo-list-item-label"
                    onClick={this.onLabelClick}>
                    {label}
                </span>
    
                <button type="button"
                        onClick={this.onImportant}
                        className="btn btn-outline-success btn-sm float-right">
                    <i className="fa fa-exclamation" />
                </button>
    
                <button type="button"
                        className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        )
    }
}