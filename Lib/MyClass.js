
var MyClass = {

    StaticProperty: "Hello static world.",
    _PrivateStaticProperty: "Hello private static world.",

    PublicStaticFunction: function()
    {
        console.log(MyClass._PrivateStaticProperty);
    },

    _PrivateStaticFunction: function()
    {
        console.log(MyClass._PrivateStaticProperty);
    },

    StaticFunction: function()
    {
        console.log(MyClass.StaticProperty);
    },

    publicProperty: null,
    _privateProperty: null,

    Class: function(arg)
    {
        /* Class constructor. */
        this.publicProperty = arg + ": public";
        this._privateProperty = arg + ": private";
    },

    publicFunction: function()
    {
        console.log(this._privateProperty);
    },

    _privateFunction: function()
    {
        return "Hello private world.";
    }

};
MyClass.Class.prototype = MyClass;
module.exports = MyClass;
