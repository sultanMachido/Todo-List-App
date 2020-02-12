import React from 'react';
import Aux from '../Hoc/Auxil';
import classes from './Ul.css'

const ul = (props)=>{
    return(
        <Aux style={classes.Ul}>
            <ul>{props.children}</ul>
        </Aux>
        
    );
}

export default ul;