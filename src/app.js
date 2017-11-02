console.log('App.js is running');

// JSX(javascript extension) - Javascript XML

const formSubmit = (e) =>{
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value='';
        countArray(); 
    }
}

const remove = ()=>{
    app.options.length = 0;
    countArray();
}

const app = {
    title : "Indecision App",
    subtitle: 'React',
    options : []
};

const makeDecsion =()=>{
    const randomNumber = Math.round((Math.random() * app.options.length));
    const option = app.options[randomNumber];
    alert(option);
    
};

const appId = document.getElementById('app');
const countArray = () =>{
    const template =(
        <div>
        <h1>{app.title}</h1> 
        {app.subtitle && <p>{app.subtitle}</p>}
        {app.options.length>1 ? <p>Here are your options {app.options[1]} and {app.options[0]}</p> : 'no options'}
        <button disabled={app.options.length===0} onClick={makeDecsion}>What should i do?</button>
        <button onClick={remove}>Remove</button>
        
        <ol>{
            app.options.map((word)=> <li key={word}>{word}</li>)
        }
        </ol>
        <form onSubmit={formSubmit}>
        <input type="text" placeholder="Enter Text" id="getText" name="option"/>
        <button>Add Option</button>
        </form>
        </div>
    );
    
    ReactDOM.render(template, appId);
};

countArray();
