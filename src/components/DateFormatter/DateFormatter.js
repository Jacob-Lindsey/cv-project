import React, { Component } from "react";
import Cleave from "cleave.js/react";

class DateFormatter extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            dateRawValue: '',
        };

        this.onDateChange = this.onDateChange.bind(this);
    }

    onDateChange(event) {
        this.setState({dateRawValue: event.target.rawValue});
    }

    render() {
        return (
            <>
                <Cleave placeholder={this.props.placeholder}
                        options={{ date: true, datePattern: ["m", "d", "Y"] }}
                        onChange={e => this.onDateChange(e)}
                />

            </>
        )
    }
}

export default DateFormatter;