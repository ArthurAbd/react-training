import React from 'react';

import './ItemStatusFilter.css';

export default class ItemStatusFilter extends React.Component {
  
  state = {
    all: 'btn btn-info',
    active: 'btn btn-outline-secondary',
    done: 'btn btn-outline-secondary'
  }

  render() {
    const {onButtonDefault, onButtonActive, onButtonDone} = this.props;
    
    const onClick = (e) => {
      const map = {
        all: onButtonDefault,
        active: onButtonActive,
        done: onButtonDone,
      }

      map[e.target.name]();

      const newState = {
        all: 'btn btn-outline-secondary',
        active: 'btn btn-outline-secondary',
        done: 'btn btn-outline-secondary'
      };

      newState[e.target.name] = 'btn btn-info';
      this.setState(newState)
    }

    const {all, active, done} = this.state;

    return (
      <div className="btn-group">
        <button type="button" name="all"
                onClick={onClick}
                className={all}>All</button>
        <button type="button" name="active"
                onClick={onClick}
                className={active}>Active</button>
        <button type="button" name="done"
                onClick={onClick}
                className={done}>Done</button>
      </div>
    )
  }
}