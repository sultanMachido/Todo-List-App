import React from 'react';
import Aux from '../Hoc/Auxil';
import classes from './Alert.css';


const alert =(props)=>(
     <Aux style={classes.Alert}>
         <p>Please insert a value</p>
     </Aux>
);



export default alert;