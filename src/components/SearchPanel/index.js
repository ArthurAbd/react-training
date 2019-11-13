import React from 'react';

import './SearchPanel.css';

export default (props) => {
    const onSearch = props.onSearch;
    return (
        <input type="text"
            onChange={((e) => onSearch(e.target.value))}
            className="form-control search-input"
            placeholder="type to search" />
      )
}