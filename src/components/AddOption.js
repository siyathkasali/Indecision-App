import React from 'react';

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.fomrSubmit=this.fomrSubmit.bind(this);
        this.state={
            error: undefined
        }
    }
    fomrSubmit(e){
        e.preventDefault();
        const inputVal = e.target.elements.options.value.trim();
         const error = this.props.addOption(inputVal);
         this.setState(()=>{
           return{
            error:error
           }
       }); 
       if(!error){
        e.target.elements.options.value='';
       }
    }
    render(){
        return(
            <div>
            {this.state.error && <p>{this.state.error}</p>}
               <form onSubmit={this.fomrSubmit}>
               <input type="text" name="options"/>
               <input type="submit" value="submit"/>
               </form> 
            </div>
        );
    }
}
