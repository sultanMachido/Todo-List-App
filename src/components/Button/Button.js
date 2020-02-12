import React from 'react';
import Aux from '../Hoc/Auxil';
import classes from './Button.css';

const button =(props)=>(
    <Aux style={classes.Button}>
        <button className={props.name}>{props.children}</button>
    </Aux>
)

export default button;