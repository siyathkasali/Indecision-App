class IndecisonApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            options:["Siyath", "Kasali"]
        }
        this.removeAll = this.removeAll.bind(this);
        this.randomShow = this.randomShow.bind(this);
        this.pushValue = this.pushValue.bind(this);
    }

    removeAll(){
        this.setState(()=>{
            return{
                options:[]
            }
        });
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
        this.setState((prevState)=>{
            return{
                options:prevState.options.concat(option)
            }
        });
    }
    render(){
        const title = "Indecison App";
        const subtitle = "Put life in the hands of computer";
        return(
            <div>
            <Header title={title} subtitle={subtitle}/>
            <Action randomShow={this.randomShow} options={this.state.options.length > 0}/>
            <Options options={this.state.options} removeAll={this.removeAll}/>
            <Addoption pushValue={this.pushValue}/>
            </div>
        );
    }
}

class Header extends React.Component{
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component{
    render(){
        return(
            <div>
            <button onClick={this.props.randomShow} disabled={!this.props.options}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component{
    render(){
        return(
            <div>
            <button onClick={this.props.removeAll}>Remove All</button>
            {
                this.props.options.map((option)=> <Option key={option} textOption={option}/>)
            }
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return(
            <div>
            {this.props.textOption}
            </div>
         );
    }
}

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
              <form onSubmit={this.formSubmit}>
              <input type="text" name="options" />
              <input type="submit" value="submit"/>
              </form>  
            </div>
        );
    }
}

ReactDOM.render(<IndecisonApp />, document.getElementById('app'));