import React from 'react'

class Label extends React.Component {
    render() {
        const { htmlFor, title, className, style } = this.props

        return (
            <label
                className={className}
                style={style}
                htmlFor={htmlFor}
                title={title}>
                {this.props.children}
            </label>
        )
    }
}

export default Label