import React from 'react'

class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectValue: ""
        };
    }
    
    onChange = e => {
        if (typeof this.props.onChange === "function") this.props.onChange(e.target.value);
    };

    render() {
        const { id, value, options, className, style } = this.props
        return (
            <select
                id={id}
                onChange={this.onChange}
                style={style}
                className={className}
                value={value}>
                {options.map(item => (
                    <option
                        key={item.id}
                        value={item.id}>
                        {item.text}
                    </option>
                ))}

            </select>
        )
    }
}

export default Select