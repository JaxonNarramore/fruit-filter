import React, { Component } from 'react';

// Components
import List from './List';
import Input from './Input';

class FruitContainer extends Component {
    constructor(props) {
        super()
        this.state = {
            // Initalize the fruit list to the full list passed into props
            fruitsToDisplay: props.fruits,
            // Initalize the filter value to an empty string
            filterValue: "",
        }
    }

    handleFilterChange = (e) => {
        e.preventDefault();
        let filterValue = e.target.value;
        // Remove the fruits that dont contain the filter value
        const filterFruitList = this.props.fruits.filter(fruit => {
            return fruit.toLowerCase().includes(filterValue.toLowerCase());
            // Or
            // if (fruit.toLowerCase() === filterValue.toLowerCase) {
            //     return true;
            // }
        })

        this.setState({ fruitsToDisplay: filterFruitList, filterValue })
    }

    render() {
        // Inside of Input component, to access props, I will say props.value
        // Inside of List component, to access props, I will say props.fruits
        console.log('---- state -----');
        console.log(this.state.fruitsToDisplay);
        console.log('---- props -----');
        console.log(this.props.fruits);
        return(
            <div>
                <Input value={this.state.filterValue} onChange={this.handleFilterChange}/>
                <List fruits={this.state.fruitsToDisplay}/>
            </div>
        )
    }
}

export default FruitContainer;