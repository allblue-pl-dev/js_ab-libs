
/* ABLibs Library */
var ABLibs = require('./Lib');

/* ABLibs MyClass */
var MyClass = ABLibs.MyClass;
var MyClassChild = ABLibs.MyClassChild;
/* ABLibs MyPClass */
var MyPClass = ABLibs.MyPClass;
var MyPClassChild = ABLibs.MyPClassChild;


/* MyClass */
console.log('\r\nMyClass Test:\r\n');
MyClass.PublicStaticFunction();

var my_object = new MyClass.Class("Hello world.");
my_object.publicFunction();

/* MyClassChild */
var my_child_object = new MyClassChild.Class("Hello universe.");
my_child_object.childPublicFunction();
my_child_object.publicFunction();

/* MyPClassTest */
console.log('\r\nMyPClass Test:\r\n');
MyPClass.PublicStaticFunction();

var my_p_object = new MyPClass.Class("Hello world.");
my_p_object.publicFunction();

/* MyPClassChild */
var my_p_child_object = new MyPClassChild.Class("Hello universe.");
my_p_child_object.childPublicFunction();
my_p_child_object.publicFunction();
