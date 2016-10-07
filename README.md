# AB-Libs

Javascript AllBlue Libs is a convention for working with javascript objects and prototypes in an object oriented manner. It is JUST a convention so basically using `_private` methodes and properties outside the class is considered dangerous, but not impossible. It allows creating classes in 2 ways: regular and by defining properties. Inheritance is also possible.

## Examples

MyClass class regular example:

```javascript
var MyClass = {
  
  _PrivateStaticProperty: "Hello private static world.",
  StaticProperty: "Hello static world.",
 
  _PrivateStaticFunction: function()
  {
    console.log(MyClass.StaticProperty);
  },
  
  StaticFunction: function()
  {
    console.log(MyClass.StaticProperty);
  },
 
  _privateProperty: null,
  privateProperty: null,

  Class: function()
  {
    /* Class constructor. */
    
    
  },
  
  publicFunction: function()
  {
    return "Hello world.";
  },
  
  _privateFunction: function()
  {
    return "Hello private world.";
  }
  
};
MyClass.Class.prototype = MyClass;

MyClass.StaticMethod();

var my_object = new MyClass.Class();
my_object.publicMethod();
```

