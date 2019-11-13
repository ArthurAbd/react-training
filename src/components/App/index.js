import React from 'react';

import TodoList from '../TodoList';
import SearchPanel from '../SearchPanel';
import AppHeader from '../AppHeader';
import ItemStatusFilter from '../ItemStatusFilter';
import AddItem from '../AddItem';


import './App.css'

export default class App extends React.Component {

    maxId = 100;
    
    state = {
        search: '',
        mode: 'default',
        todoData: [
            this.createTodoItem('Learn React'),
            this.createTodoItem('Build todo list'),
            this.createTodoItem('Have a hunch'),
        ]
    }

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArray = todoData.slice();
            newArray.splice(idx, 1);
            return {
                todoData: newArray
            }
        })
    }

    addItem = (value) => {
        this.setState(({todoData}) => {
            return {
                todoData: [...todoData, this.createTodoItem(value)]
            }
        })
    }

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);
            const oldItem = arr[idx];
            const newItem = {...oldItem, [propName]: !oldItem[propName]};
            return [
                ...arr.slice(0,idx),
                newItem,
                ...arr.slice(idx + 1)
            ];
    }

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        })
    }

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        })
    }

    onButtonDefault = () => {
        this.setState({
            mode: 'default'
        })
    }

    onButtonActive = () => {
        this.setState({
            mode: 'active'
        })
    }
    
    onButtonDone = () => {
        this.setState({
            mode: 'done'
        })
    }

    onSearch = (value) => {
        this.setState({
            search: value.toLowerCase()
        })
    }
    
    render() {

        const {todoData, mode, search} = this.state;
        const doneCount = todoData
                        .filter((el) => el.done).length;
        const todoCount = todoData.length
         - doneCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel onSearch={this.onSearch} />
                    <ItemStatusFilter
                        onButtonDefault={this.onButtonDefault}
                        onButtonActive={this.onButtonActive}
                        onButtonDone={this.onButtonDone} />
                </div>
    
                <TodoList
                    search={search}
                    mode={mode}
                    todos={todoData}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone} />
                <AddItem
                    onAddItem={(value) => this.addItem(value)} />
            </div>
        )
    }
}