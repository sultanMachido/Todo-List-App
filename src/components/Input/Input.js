import React from 'react';
import Button from '../Button/Button';
import classes from './Input.css';
import Aux from '../Hoc/Auxil';

const input =(props)=>(
    <Aux style={classes.ListInput}>
        <form onSubmit={props.submit}>
             <Aux style={classes.Inputs}>
                <input type={props.type}  placeholder={props.placeholder} />
             </Aux>
            <Button>Add Task</Button>
        </form>
    </Aux>
);


export default input;