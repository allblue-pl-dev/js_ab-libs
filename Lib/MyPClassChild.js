
var MyPClass = require('./MyPClass');

/* Inheritance */
var MyPClassChild = Object.create(MyPClass, {

    Class: { value:
    function() {
        MyPClass.Class.call(this, 'Hello world from child class.');
        // this.Class('Hello world from child class.');
    }},

    childPublicFunction: { value:
    function() {
        console.log('Child function says hello.');
    }},

    publicFunction: { value:
    function() {
        console.log('Overriden: ' + this.publicProperty);
    }}

});
MyPClassChild.Class.prototype = MyPClassChild;
module.exports = MyPClassChild;

// var override = MyClassChild.Class.prototype = Object.create(MyClass);
// module.exports = MyClassChild;
//
// /* New Child Properties/Functions */
// override.childPublicFunction = function()
// {
//     console.log('Child function says hello.');
// };
//
// /* MyClass Overrides */
// override.publicFunction = function()
// {
//     console.log('Overriden: ' + this.publicProperty);
// };
