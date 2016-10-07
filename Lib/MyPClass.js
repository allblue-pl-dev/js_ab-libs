
var MyClass = Object.create(null, {

    StaticProperty: { value: "Hello static world.",
            writable: true },
    _PrivateStaticProperty: { value: "Hello private static world.",
            writable: true},

    PublicStaticFunction: { value:
    function() {
        console.log(MyClass._PrivateStaticProperty);
    }},

    _PrivateStaticFunction: { value:
    function() {
        console.log(MyClass._PrivateStaticProperty);
    }},

    StaticFunction: { value:
    function() {
        console.log(MyClass.StaticProperty);
    }},

    Class: { value:
    function(arg) {
        Object.defineProperties(this, {
            publicProperty: { value: arg + ': public',
                    writable: true },
            _privateProperty: { value: arg + ': private',
                    writable: true },
        });
    }},

    publicFunction: { value:
    function() {
        console.log(this._privateProperty);
    }, configurable: true },

    _privateFunction: { value:
    function() {
        return "Hello private world.";
    }}

});
MyClass.Class.prototype = MyClass;
module.exports = MyClass;
