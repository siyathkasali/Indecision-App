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

const Header = (props)=>{
    return(
        <div>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        </div>
    )
}

const Action = (props)=>{
    return(
    <button disabled={!props.hasOptions} onClick={props.randomPick}>What should I do?</button>
    );
}

const Options = (props)=>{
    return(
        <div>
        {props.options.length===0 && <p>Enter some options to store</p>}
        <button onClick={props.handelRemoveAll}>Remove All</button>
        {
            props.options.map((option)=> <Option key={option} optionText={option} handelRemoveOption={props.handelRemoveOption}/>)
        }
        </div>
    );
}

const Option = (props)=>{
    return(
        <div>
        {props.optionText}
        <button onClick={(e)=>{
            props.handelRemoveOption(props.optionText);
        }}>Remove</button>
        </div>
    );
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

ReactDOM.render(<IndecisionApp />,document.getElementById('app'));