import React from 'react';

import TodoListItem from '../TodoListItem';

import './TodoList.css';

export default ({ todos, mode, search, onDeleted,
                onToggleImportant,
                onToggleDone }) => {
    console.log(search);
    const elements = todos
        .filter((obj) => {
        const mapFilter = {
            'default': () => true,
            'done': () => obj.done === true,
            'active': () => obj.done === false,
        }
        return mapFilter[mode]()
    })
        .filter((obj) => obj.label.toLowerCase().includes(search))
        .map((item) => {

        const {id, ...itemProps} = item;

        return (
            <li key={item.id} className="list-group-item">
                <TodoListItem {...itemProps}
                onDeleted={() => onDeleted(id)}
                onToggleImportant={() => onToggleImportant(id)}
                onToggleDone={() => onToggleDone(id)} />
            </li>
        )
    })

    return (
            <ul className="list-group todo-list">
                {elements}
            </ul>
    )
}