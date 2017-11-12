class IndecisonApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            options:[]
        }
        this.removeAll = this.removeAll.bind(this);
        this.randomShow = this.randomShow.bind(this);
        this.pushValue = this.pushValue.bind(this);
    }

    removeAll(){
        this.setState(()=>({
            options:[]
        }));
    }


    randomShow(){
        const random = Math.floor(Math.random()* this.state.options.length);
        const option = this.state.options[random];
        alert(option);
    }

    pushValue(option){
        if(!option){
            return "Enter a proper value";
        }else if(this.state.options.indexOf(option)>-1){
            return "This value is already there";
        }

        this.setState((prevState)=>({options:prevState.options.concat(option)}));
        
    }
    render(){
        const title = "Indecison App";
        const subtitle = "Put life in the hands of computer";
        return(
            <div>
            <Header subtitle={subtitle}/>
            <Action randomShow={this.randomShow} options={this.state.options.length > 0}/>
            <Options options={this.state.options} removeAll={this.removeAll}/>
            <Addoption pushValue={this.pushValue}/>
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
    );
};

Header.defaultProps={
    title: "Indecision"
}

const Action = (props)=>{
    return(
        <div>
        <button disabled={!props.options} onClick={props.randomShow}>What should I do? </button>
        </div>
    )
};


const Options = (props)=>{
    return(
        <div>
            <button onClick={props.removeAll}>Remove All</button>
            {
                props.options.map((option)=> <Option key={option} textOption={option}/>)
            }
        </div>
    );
};


const Option = (props)=>{
    return(
        <div>
        <p>{props.textOption}<button onClick={}>Remove</button></p>
        </div>
    );
};

class Addoption extends React.Component{
    constructor(props){
        super(props);
        this.formSubmit = this.formSubmit.bind(this);
        this.state={
            error:undefined
        };
    }
    formSubmit(e){
        e.preventDefault();
        const inputValue = e.target.elements.options.value.trim();
      const error= this.props.pushValue(inputValue);
   

    this.setState(()=>({
        error
    }));
    }
    
    render(){
        return(
            <div>
            {this.state.error && <p>{this.state.error}</p>}
              <form onSubmit={this.formSubmit}>
              <input type="text" name="options" />
              <input type="submit" value="submit"/>
              </form>  
            </div>
        );
    }
}

ReactDOM.render(<IndecisonApp />, document.getElementById('app'));