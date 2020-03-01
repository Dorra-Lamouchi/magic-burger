import React, { Component } from 'react'
import Burger from './Burger/Burger'
import BuildControls from './BuildControls/BuildControls'


class BurgerBuilder extends Component {

    state = {
        ingredients: [
            {
                id: "s",
                label: "salad",
                count: 0
            },
            {
                id: "m",
                label: "meat",
                count: 0
            },
            {
                id: "c",
                label: "cheese",
                count: 0
            },
            {
                id: "e",
                label: "escalope",
                count: 0
            }
        ]
    }
    addIngredientHandler = (ingredient) => {

        const newIngredients = [...this.state.ingredients]

        const i = newIngredients.indexOf(ingredient)

        newIngredients[i].count = newIngredients[i].count + 1

        this.setState({
            ingredients: newIngredients
        })
    }

    removeIngredientHandler = (ingredient) => {

        const newIngredients = [...this.state.ingredients]

        const i = newIngredients.indexOf(ingredient)

        if (newIngredients[i].count > 0)
            newIngredients[i].count = newIngredients[i].count - 1

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
                            added={() => { this.addIngredientHandler(ingredient) }}
                            removed={() => { this.removeIngredientHandler(ingredient) }}
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