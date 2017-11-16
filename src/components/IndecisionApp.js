import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';


class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            options:[]
        };
        this.randomPick = this.randomPick.bind(this);
        this.handelRemoveAll=this.handelRemoveAll.bind(this);
        this.handelAddOne=this.handelAddOne.bind(this);
        this.handelRemoveOption=this.handelRemoveOption.bind(this);
    }

    
    componentDidMount() {
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(()=>({
                    options
                }));
            }     
        }catch(e){

        }
    }
    
    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log("saving Data");
        }
    }

    randomPick(){
        const random = Math.floor(Math.random() * this.state.options.length);
        const value=this.state.options[random];
        alert(value);
    };

    handelRemoveOption(optionToRemove){
        this.setState((prevState)=>{
            return{
                options: prevState.options.filter((option)=>{
                    return optionToRemove !== option;
                })
            }
        })
    }

    handelRemoveAll(){
        this.setState(()=>{
            return{
                options:[]
            }
        })
    }

    handelAddOne(option){
        if(!option){
            return 'Please enter a valid item';
        }else if(this.state.options.indexOf(option)>-1){
            return 'This Item Already Exits';
        }
            this.setState((prevState)=>{
                return{
                    options: prevState.options.concat(option)
                }
            });
    }

    render(){
        const title = "Indecision App";
        const subtitle = "Put Your Life in the handes of Computer";
        return(
            <div>
            <Header title={title} subtitle={subtitle}/>
            <Action hasOptions={this.state.options.length>1} randomPick={this.randomPick}/>
            <Options options={this.state.options} handelRemoveAll={this.handelRemoveAll} handelRemoveOption={this.handelRemoveOption}/>
            <AddOption addOption={this.handelAddOne}/>
            </div>
        );
    }
}

export default IndecisionApp;