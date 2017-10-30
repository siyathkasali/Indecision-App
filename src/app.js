console.log('App.js is running');

// JSX(javascript extension) - Javascript XML

const app = {
    title : "Indecision App",
    subtitle: 'React',
    options : ['one','two']
};
const template =(
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

const user = {
    name : 'siyath',
    age: 25,
    location: 'Bangalore'
};
const userName = 'siyath';
const userAge = '24';
const userLoaction = 'Tirunelveli';
function getLocation(location){
    if(location){
        return <p>Location : {location}</p>;
    }
}
const templateTwo = (
    <div>
    <h1>{user.name ? user.name : 'Anonmoyous'}</h1>
    {(user.age && user.age>=18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
    </div>
);


const appid = document.getElementById('app');

ReactDOM.render(template, appid);