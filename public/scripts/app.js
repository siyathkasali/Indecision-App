'use strict';

var appName = 'Visibility Toggle';
var showContent = "Here is some content";
var showDetails = function showDetails() {};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        appName
    ),
    React.createElement(
        'button',
        { onClick: showDetails },
        'Show Details'
    ),
    React.createElement(
        'p',
        { hide: true },
        showContent
    )
);

var appId = document.getElementById('app');

ReactDOM.render(template, appId);
