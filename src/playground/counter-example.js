// let count = 0;
// const plusOne = ()=>{
//     count++;
//     counterApp();
// };
// const minusOne = ()=>{
//     count--;
//     counterApp();
// }

// const reset = ()=>{
//     count=0;
//     counterApp();
// }


// const appid = document.getElementById('app');


// const counterApp = ()=>{
//     const templateTwo = (
//         <div>
//             <h1 className="headerOne">Count: {count}</h1>
//             <button onClick={plusOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appid);
// };

// counterApp();



class Counter extends React.Component{
    constructor(props){
        super(props);
        this.plusOne = this.plusOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count:0
        }
    }

    plusOne(){
        this.setState((prevState)=>{
            return{
                count: prevState.count + 1
            }
        });
    }

    minusOne(){
        this.setState((prevState)=>{
            return{
                count: prevState.count - 1
            }
        })
    }

    reset(){
        this.setState(()=>{
            return{
                count: 4
            }
        });

        this.setState((prevState)=>{
            return{
                count: prevState.count + 1
            }
        });
    }

    render(){
        return(
            <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.plusOne}>+1</button>
            <button onClick={this.minusOne}>-1</button>
            <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}


ReactDOM.render(<Counter/>, document.getElementById('app'));