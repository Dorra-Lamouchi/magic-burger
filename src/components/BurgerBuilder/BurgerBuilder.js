import React, { Component } from 'react'
import Burger from './Burger/Burger'
import BuildControls from './BuildControls/BuildControls'


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

            <BuildControls
                ingredients={this.state.ingredients}
                addIngredientHandler={this.addIngredientHandler}
                removeIngredientHandler={this.removeIngredientHandler}

            />

            )}
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