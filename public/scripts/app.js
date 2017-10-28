console.log('App.js is running');

// JSX(javascript extension) - Javascript XML

// var template = <p>This is pragraph from app.js</p>

var template = React.createElement(
    'p',
    'null',
    'This is pragraph from app.js'
);

var appid = document.getElementById('app');

ReactDOM.render(template, appid);