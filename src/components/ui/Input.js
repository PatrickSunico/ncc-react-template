import React from 'react'

class Input extends React.Component {
    constructor(props) {
        super(props);

    }
    onChange = e => {
        if (typeof this.props.onChange === "function") this.props.onChange(e.target.value);
    };
    render() {
        const { min,max,type,required, placeholder, value, className, style,readOnly } = this.props

        return (
            <input
            readOnly={readOnly}
                min={min} 
                max={max}
                required={required}
                type={type}
                style={style}
                className={className}
                placeholder={placeholder}
                value={value}
                onChange={this.onChange} />
        )
    }
}

export default Input