import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super()
        this.state = {

        }
    }
    render() {
        const fruitItems = this.props.fruits.map((eachFruit, index) => {
            return <li key={index}>{eachFruit}</li>
        });
        // Mapping an array like this
        // [<li>banana</li>, <li>apple</li>, <li>grapes</li>]

        return(
            <div>
                <ul>
                    {fruitItems}
                </ul>
            </div>
        )
    }
}

export default List;