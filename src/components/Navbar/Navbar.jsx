import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography, Button } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import { NavDrawer } from './Drawer/Drawer';
import { useSelector } from 'react-redux';
import logo from '../../assets/commerce.png';
import useStyles from './styles';
import { showUser } from '../../redux/payment-api-slice';

const Navbar = ({ cart }) => {

    // imports classes object form ./styles
    const classes = useStyles();

    // checks for existence of cart
    const cartLoading = !cart;

    //checks for pathname
    const location = useLocation();

    // initializes user object using user redux state
    const user = useSelector(showUser);


    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <NavDrawer />
                    <Typography component={Link} to='/' variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
                        Web Shop
                    </Typography>
                    <div className={classes.grow} />
                        {/* if pathname is /products Shopping cart will render into Navbar */}
                        { location.pathname === '/products' && (
                            <div className={classes.button}>
                                <IconButton component={Link} to='/cart' aria-label="Show cart items" color="inherit">
                                    { cartLoading ? 
                                        <Badge badgeContent={0} color="secondary">
                                            <ShoppingCart />
                                        </Badge>
                                        :
                                        <Badge badgeContent={cart.total_items} color="secondary" overlap='rectangular'>
                                            <ShoppingCart />
                                        </Badge>
                                    }
                                </IconButton>
                            </div>
                        )}
                        {/* if pathname is at root shopping cart will render into Navbar */}
                        { location.pathname === '/' && (
                            <div className={classes.button}>
                                <IconButton component={Link} to='/cart' aria-label="Show cart items" color="inherit">
                                    { cartLoading ? 
                                        <Badge badgeContent={0} color="secondary">
                                            <ShoppingCart />
                                        </Badge>
                                        :
                                        <Badge badgeContent={cart.total_items} color="secondary" overlap='rectangular'>
                                            <ShoppingCart />
                                        </Badge>
                                    }
                                </IconButton>
                            </div>
                        )}
                        { location.pathname === '/login' && (
                            <div className={classes.button}>
                                <IconButton component={Link} to='/cart' aria-label="Show cart items" color="inherit">
                                    { cartLoading ? 
                                        <Badge badgeContent={0} color="secondary">
                                            <ShoppingCart />
                                        </Badge>
                                        :
                                        <Badge badgeContent={cart.total_items} color="secondary" overlap='rectangular'>
                                            <ShoppingCart />
                                        </Badge>
                                    }
                                </IconButton>
                            </div>
                        )}
                        { user ? 
                             <Typography>logged in</Typography>
                            :
                            <Button component={Link} to='/login'>Log In</Button> 
                        }
                            
                </Toolbar>
            </AppBar>
        </>
  )
}

export default Navbar