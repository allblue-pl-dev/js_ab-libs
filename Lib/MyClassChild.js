
var MyClass = require('./MyClass');

/* Inheritance */
var MyClassChild = {

    Class: function() {
        this.Class('Hello world from child class.');
    },

};
var override = MyClassChild.Class.prototype = Object.create(MyClass);
module.exports = MyClassChild;

/* New Child Properties/Functions */
override.childPublicFunction = function()
{
    console.log('Child function says hello.');
};

/* MyClass Overrides */
override.publicFunction = function()
{
    console.log('Overriden: ' + this.publicProperty);
};
