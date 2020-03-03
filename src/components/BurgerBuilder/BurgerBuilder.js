import React, { Component } from 'react'
import Burger from './Burger/Burger'
import BuildControls from './BuildControls/BuildControls'
import axios from 'axios'

class BurgerBuilder extends Component {

    state = {
        ingredients: [
            {
                id: 0,
                label: "salad",
                count: 0,
                price: 0.5,
                maxCount: 2
            },
            {
                id: 1,
                label: "meat",
                count: 0,
                price: 3,
                maxCount: 2
            },
            {
                id: 2,
                label: "cheese",
                count: 0,
                price: 1.5,
                maxCount: 2
            },
            {
                id: 3,
                label: "escalope",
                count: 0,
                price: 2.2,
                maxCount: 2
            }
        ],
        totalPrice: 5
    }


    addOrRemoveIngredientHandler = (id, action) => {
        const newIngredients = [...this.state.ingredients]
        let newTotalPrice = this.state.totalPrice
        const i = newIngredients.findIndex(ingredient => {
            return ingredient.id === id
        })
        if (action === "add") {
            newIngredients[i].count++
            newTotalPrice += newIngredients[i].price
        }
        else if (action === "remove") {
            newIngredients[i].count--
            newTotalPrice -= newIngredients[i].price
        }
        this.setState({
            ingredients: newIngredients,
            totalPrice: newTotalPrice
        })
    }




    render() {
        let buildControls = null
        buildControls = (<div>

            <BuildControls
                ingredients={this.state.ingredients}
                addOrRemoveIngredient={this.addOrRemoveIngredientHandler}
                totalPrice={this.state.totalPrice}
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