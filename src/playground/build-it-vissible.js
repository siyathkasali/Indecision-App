// const appName= 'Visibility Toggle';
// const app = {
//     someContent : []
// }

// const showDetails= ()=>{

// };



// const template = (
//     <div>
//     <h1>{appName}</h1>
//     <button onClick={showDetails}>Show Details</button>
//     <p>{showContent}</p>
//     </div>
// );

// var appId = document.getElementById('app');

// ReactDOM.render(template, appId);


class Toogle extends React.Component{
    constructor(props){
        super(props);
        this.toogle = this.toogle.bind(this);
        this.state = {
            visibility: false
        }
    }
    toogle(){
        this.setState((prevState)=>{
            return{
                visibility: !prevState.visibility
            };
        })
    }
    render(){
        return(
            <div>
                <button onClick={this.toogle}>
                {this.state.visibility ? "Hide Data":"Show Data"}
                </button>
                {this.state.visibility && <p>There is some data</p>}
            </div>
        );
    }
}

ReactDOM.render(<Toogle/>, document.getElementById('app'));