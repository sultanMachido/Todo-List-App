import React, { Component } from 'react';
import Aux from '../Hoc/Auxil';
import classes from './ListItem.css'


class ListItem extends Component{

    state={
        underline:false
    }
   
   checkRefHandler =()=>{
       console.log(this.inputElement)
       this.setState({
           underline:!this.state.underline
       })
   }
    
    render(){
        return(
        <Aux style={classes.Item} >
            <li  
            className={this.state.underline?classes.Ticked:classes.UnTicked}>{this.props.item}</li>
            {console.log(this.state.underline)}
            <div className={classes.Check}>
                <input type='checkbox'  onClick={this.checkRefHandler}/>
                <h5 onClick={this.props.remove}>x</h5>
            </div>
         
        </Aux>
        )
    }
}

// const listItem =(props)=>(
//     <Aux style={classes.Item}>
//         <li  className={props.isTicked && props.currentItem>=0?classes.Ticked:null}>{props.item}</li>
//         <div className={classes.Check} onClick={props.tick}>
//           <input type='checkbox' />
//           <h5>x</h5>
//         </div>
        
//     </Aux>
    
// )

export default ListItem;