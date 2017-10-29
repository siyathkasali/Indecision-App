'use strict';

console.log('App.js is running');

// JSX(javascript extension) - Javascript XML

var app = {
    title: "Indecision App",
    subtitle: 'React',
    options: ['one', 'two']
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    app.options.length > 1 ? React.createElement(
        'p',
        null,
        'Here are your options ',
        app.options[1],
        ' and ',
        app.options[0]
    ) : 'no options',
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Jailani'
        ),
        React.createElement(
            'li',
            null,
            'Jainambu'
        ),
        React.createElement(
            'li',
            null,
            'Bhasidh'
        ),
        React.createElement(
            'li',
            null,
            'Siddika'
        ),
        React.createElement(
            'li',
            null,
            'Siyath'
        )
    )
);

var user = {
    name: 'siyath',
    age: 25,
    location: 'Bangalore'
};
var userName = 'siyath';
var userAge = '24';
var userLoaction = 'Tirunelveli';
function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location : ',
            location
        );
    }
}
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonmoyous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appid = document.getElementById('app');

ReactDOM.render(template, appid);
