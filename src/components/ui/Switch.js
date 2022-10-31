import React from 'react'
import './Switch.css';
import PropTypes from "prop-types";

class Switch extends React.Component {
    static defaultProps = {
        checked: true,
    }
    state = {
        checked: this.props.checked
    };
    onChange = e => {
        this.setState({
            checked: e.target.checked
        });
        if (typeof this.props.onChange === "function") this.props.onChange();
    };
   
    render() {
        return (
            <React.Fragment>
                <input
                    checked={this.props.checked}
                    onChange={this.onChange}
                    disabled={this.props.disabled}
                    className="react-switch-checkbox"
                    id={this.props.id}
                    name={this.props.id}
                    type="checkbox"
                />
                <label
                    className="react-switch-label"
                    htmlFor={this.props.id}
                    style={{ background: this.props.checked && '#06D6A0' }}>
                    <span className={'react-switch-button'} />
                </label>
            </React.Fragment>
        )
    }
}

export default Switch