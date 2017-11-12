class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            options:[]
        };
        this.randomPick = this.randomPick.bind(this);
        this.handelRemoveAll=this.handelRemoveAll.bind(this);
        this.handelAddOne=this.handelAddOne.bind(this);
    }

    randomPick(){
        const random = Math.floor(Math.random() * this.state.options.length);
        const value=this.state.options[random];
        alert(value);
    };

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
            <Options options={this.state.options} handelRemoveAll={this.handelRemoveAll}/>
            <AddOption addOption={this.handelAddOne}/>
            </div>
        );
    }
}

const Header = (props)=>{
    return(
        <div>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        </div>
    )
}

class Action extends React.Component{
    render(){
        return(
            <button disabled={!this.props.hasOptions} onClick={this.props.randomPick}>What should I do?</button>
        );
    }
}

class Options extends React.Component{
    render(){
        return(
            <div>
            <button onClick={this.props.handelRemoveAll}>Remove All</button>
            {
                this.props.options.map((option)=> <Option key={option} optionText={option} />)
            }
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return(
            <div>
            {this.props.optionText}
            </div>
        );
    }
}

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

ReactDOM.render(<IndecisionApp />,document.getElementById('app'));