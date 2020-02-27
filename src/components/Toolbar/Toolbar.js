import React from 'react'
import NavigationItems from './NavigationItems/NavigationItems'
import classes from './Toolbar.module.css'
import burgerLogo from '../../assets/images/logo.png'
const toolbar = () => {
    return (
        <div className={classes.Toolbar}>
            <div>MENU</div>
            <div className={classes.Logo}>
                <img src={burgerLogo} alt='Magic Burger' />
            </div>
            <NavigationItems />
        </div>
    )
}

export default toolbar