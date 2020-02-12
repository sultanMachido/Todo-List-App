import React,{Component} from  'react';
import Input from '../../components/Input/Input';
import Ul from '../../components/Ul/Ul';
import ListItem from '../../components/ListItem/ListItem';
import classes from './Layout.css';
import Alert from '../../components/Alert/Alert';
import { setTimeout } from 'timers';


class Layout extends Component{

state={
    arr:[],
    task:"",
    ticked:false,
    currentItem:null,
    displayAlert:0
}

addTaskHandler =(e)=>{
    // alert('Hey!');
    var value;
    if (document.querySelector('input').value) {
        value = document.querySelector('input').value

        this.setState(prevState=>{
            return{arr:prevState.arr.concat(value),
            displayAlert:0}
        })
    }else{
        setTimeout(()=>{
            this.setState({
                displayAlert:1
            })
        },1000)
        
    }
    
   
    
    document.querySelector('input').value=''
    
    e.preventDefault()
}
removeTaskHandler=(index)=>{
     let newArr = [...this.state.arr];
     newArr.splice(index,1);
     console.log(newArr)
     this.setState({
         arr:newArr
     })

     
}

tickTaskHandler = (e,index) =>{
    console.log(e.target.nextSibling.innerHTML)
    console.log(this.inputElement)
      
        this.setState({ticked:!this.state.ticked,
                        currentItem:index,
                        sibling:e.target.nextSibling.innerHTML,
                        });
    
    e.persist()
}

render(){
    return(
        <div className={classes.Layout}>
            <h1>Todo List App</h1>
    {this.state.displayAlert?<Alert />:null}
                <Input submit={this.addTaskHandler}
                 placeholder="Add Task"
                 type="text"
                 value={this.state.inputValue}/>

                 <Ul>
                      {this.state.arr.map((list,index)=>(
                        <ListItem 
                             key={list} 
                            //  ref= {inp =>{ this.inputElement = inp}}
                             item={list} 
                             tick={(e)=>this.tickTaskHandler(e,index,list)} 
                             index={index}
                             remove={()=>this.removeTaskHandler(index)}
                             keepTicked={this.state.keepTicked}
                             />  
                      ))}
                 </Ul>


        </div>
    )
}

}

export default Layout;