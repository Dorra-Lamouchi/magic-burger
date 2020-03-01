import React, { Component } from 'react'
import Burger from './Burger/Burger'
import BuildControls from './BuildControls/BuildControls'
import { labelIdentificator } from './BuildControls/BuildControls'

class BurgerBuilder extends Component {

    state = {
        ingredients: [
            {
                id: 0,
                label: "salad",
                count: 0
            },
            {
                id: 1,
                label: "meat",
                count: 0
            },
            {
                id: 2,
                label: "cheese",
                count: 0
            },
            {
                id: 3,
                label: "escalope",
                count: 0
            }
        ]
    }


    addIngredientHandler = (label) => {
        const newIngredients = [...this.state.ingredients]
        switch (label) {
            case "salad":
                newIngredients[0].count++
                break;
            case "meat":
                newIngredients[1].count++
                break;
            case "cheese":
                newIngredients[2].count++
                break;
            case "escalope":
                newIngredients[3].count++
                break;

        }

        this.setState({
            ingredients: newIngredients
        })
    }

    removeIngredientHandler = (label) => {

        const newIngredients = [...this.state.ingredients]
        switch (label) {
            case "salad":
                newIngredients[0].count--
                break;
            case "meat":
                newIngredients[1].count--
                break;
            case "cheese":
                newIngredients[2].count--
                break;
            case "escalope":
                newIngredients[3].count--
                break;

        }
        this.setState({
            ingredients: newIngredients
        })
    }


    render() {
        let buildControls = null
        buildControls = (<div>
            {
                this.state.ingredients.map((ingredient) => {

                    return (
                        <BuildControls
                            ingredients={this.state.ingredients}
                            added={() => { this.addIngredientHandler(labelIdentificator(this.state.ingredients, ingredient.id)) }}
                            removed={() => { this.removeIngredientHandler(labelIdentificator(this.state.ingredients, ingredient.id)) }}
                            key={ingredient.id}
                        />
                    )
                })}
        </div>)
        return (
            <div>
                <Burger
                    ingredients={this.state.ingredients}
                />
                {buildControls}
            </div>
        )
    }
}

export default BurgerBuilder