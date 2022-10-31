import React from 'react'
import {loadModules} from 'esri-loader';

class Location extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayValue: ""
        }
    }
    displayValue = point => {
        if (typeof point != 'undefined' && point.hasOwnProperty('x') && point.hasOwnProperty('y'))
            return   '{"x": '+ point.x +', "y": '+ point.x +', "spatialReference": {"wkid": 4326 }'; // "x:" + point.x + " , y:" + point.y;
        else
            return "";
    };
    onChange = e => {
        loadModules(['esri/geometry/Point', 'esri/geometry/SpatialReference'])
        .then(([Point, SpatialReference]) => {
            const pointStr = e.target.value;
           
            const point = new Point(pointStr);
            if (typeof this.props.onChange === "function") this.props.onChange(point);
            console.log(point);
        });
       
    };
    render() {
        const { placeholder, value, className, style } = this.props

        return (
            <input
                type="text"
                style={style}
                className={className}
                placeholder={placeholder}
                value={value}
                onChange={this.onChange} />
        )
    }
}

export default Location