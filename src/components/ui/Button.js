import React from 'react'

class Button extends React.Component {
    render() {
        const { type,onClick, disabled, title, className, style } = this.props
        const classEffect = className + ' hvr-shadow-radial';
        return (
            <button
                type={type}
                className={classEffect}
                title={title}
                style={style}
                onClick={onClick}
                disabled={disabled}>
                {this.props.children}
            </button>
        )
    }
}

export default Button