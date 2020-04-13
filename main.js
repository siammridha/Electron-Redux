
const XpcConnect = require('xpc-connect');
const xpcConnect = new XpcConnect('com.apple.blued');

xpcConnect.on('error', function (message) {
    console.error(message)
});

xpcConnect.on('event', function (event) {
    console.log(event)
});

xpcConnect.setup();

const message = {
    test: 'test'
};

xpcConnect.sendMessage(message);


console.log(xpcConnect)