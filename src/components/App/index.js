import React from 'react';

import TodoList from '../TodoList';
import SearchPanel from '../SearchPanel';
import AppHeader from '../AppHeader';
import ItemStatusFilter from '../ItemStatusFilter';

import './App.css'

export default () => {

    const todoData = [
        {label: 'Learn React', important: false, id: 1 },
        {label: 'Build todo list', important: true, id: 2 },
        {label: 'Have a hunch', important: false, id: 3 },
    ]

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>

            <TodoList todos={todoData} />
        </div>
    )
}