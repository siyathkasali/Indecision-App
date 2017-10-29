console.log('App.js is running');

// JSX(javascript extension) - Javascript XML

var app = {
    title : "Indecision App",
    subtitle: 'React',
    options : ['one','two']
};
var template =(
    <div>
    <h1>{app.title}</h1> 
    {app.subtitle && <p>{app.subtitle}</p>}
    {app.options.length>1 ? <p>Here are your options {app.options[1]} and {app.options[0]}</p> : 'no options'}
    <ol>
    <li>Jailani</li>
    <li>Jainambu</li>
    <li>Bhasidh</li>
    <li>Siddika</li>
    <li>Siyath</li>
    </ol>
    </div>
);

var user = {
    name : 'siyath',
    age: 25,
    location: 'Bangalore'
};
var userName = 'siyath';
var userAge = '24';
var userLoaction = 'Tirunelveli';
function getLocation(location){
    if(location){
        return <p>Location : {location}</p>;
    }
}
var templateTwo = (
    <div>
    <h1>{user.name ? user.name : 'Anonmoyous'}</h1>
    {(user.age && user.age>=18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
    </div>
);


var appid = document.getElementById('app');

ReactDOM.render(template, appid);