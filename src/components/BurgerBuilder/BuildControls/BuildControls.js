import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'


const buildControls = (props) => {

    const ingredients = props.ingredients.map((ingredient) => {
        return <BuildControl
            label={ingredient.label}
            added={props.added}
            removed={props.removed}
            key={ingredient.id}
        />
    })


    return (
        <div className={classes.BuildControls}>
            <p>Current Price: 4</p>
            {ingredients}
            <button className={classes.OrderButton}>ORDER NOW</button>

        </div>
    )
}

export const labelIdentificator = (ingredients, id) => {

    return (
        ingredients[id].label
    )

}




export default buildControls
