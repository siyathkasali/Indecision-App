const appName= 'Visibility Toggle';
const showContent = "Here is some content";
const showDetails= ()=>{
    
};

const template = (
    <div>
    <h1>{appName}</h1>
    <button onClick={showDetails}>Show Details</button>
    <p hide>{showContent}</p>
    </div>
);

var appId = document.getElementById('app');

ReactDOM.render(template, appId);