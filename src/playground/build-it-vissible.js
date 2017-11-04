const appName= 'Visibility Toggle';
const app = {
    someContent : []
}

const showDetails= ()=>{

};



const template = (
    <div>
    <h1>{appName}</h1>
    <button onClick={showDetails}>Show Details</button>
    <p>{showContent}</p>
    </div>
);

var appId = document.getElementById('app');

ReactDOM.render(template, appId);