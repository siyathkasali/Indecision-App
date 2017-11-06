class IndecisionApp extends React.Component{
    render(){
        const title = "Indecision App";
        const subtitle = "Put your life in the hands of computer";
        const options = ["Siyath","Bhasidh", "sid"];
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component{
    render(){
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
                <button>What shall I Do?</button>
            </div>
        );
    }
}

class Options extends React.Component{
    render(){
        return (
            <div>
                <p>This is Option Component</p>
                <Option />
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return(
            <div>
            Option Component Here
            </div>
        );
    }
}

class AddOption extends React.Component{
    render(){
        return(
            <div>
            <p>This is AddOption Component</p>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));