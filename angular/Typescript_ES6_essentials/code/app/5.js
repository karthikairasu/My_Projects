{
    // primitive type annotation
    // AM    identifier            :type       ="value"
    var name_1 = 'Steve';
    var heightInCentimeters = 182.88;
    var isActive = true;
    // array type annotation
    var names = ['James', 'Nick', 'Rebecca', 'Lily'];
    // function annotation with parameter type annotation and return type annotation
    var sayHello = void 0;
    // implementation of sayHello function   
    sayHello = function (name) {
        return 'Hello ' + name;
    };
    console.log(sayHello('henry'));
    // object type annotation
    var person = void 0;
    // Implementation of a person object
    person = {
        name: 'Mark',
        heightInCentimeters: 183
    };
}
