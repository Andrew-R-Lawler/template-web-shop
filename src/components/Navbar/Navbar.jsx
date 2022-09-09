import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import logo from '../../assets/commerce.png';
import useStyles from './styles';

const Navbar = ({ cart }) => {
    const classes = useStyles();
    const cartLoading = !cart;

    const MissingCart = () => {

    }


    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
                        Commerce.js
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label="Show cart items" color="inherit">
                        { cartLoading ? <Badge badgeContent={0} color="secondary">
                                <ShoppingCart />
                            </Badge>
                            :
                            <Badge badgeContent={cart.total_items} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        }
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
  )
}

export default Navbar