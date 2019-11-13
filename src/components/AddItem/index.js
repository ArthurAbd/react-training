import React from 'react';

import './AddItem.css';

export default class AddItem extends React.Component {

    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddItem(this.state.label)
        this.setState({
            label: ''
        })
    }

    render() {
        const label = this.state.label;
        
        return (
            <form className="add-item"
                onSubmit={this.onSubmit}>
                <input type="text"
                        value={label}
                        className="form-control"
                        onChange={this.onLabelChange}
                        placeholder="What to do?" />
                <button className="btn btn-outline-secondary btn-sm">
                    <i className="fa fa-plus-circle" />
                </button>
            </form>
        )
    }
}
