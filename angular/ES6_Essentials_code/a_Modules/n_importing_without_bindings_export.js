// module code without exports or imports
Array.prototype.pushAll = function (items) { // NPP - native prototype pattern - "treat this a module" - anti-pattern
  // items must be an array
  if (!Array.isArray(items)) {
    throw new TypeError("Argument must be an array.");
  }
  // use built-in push() and spread operator
  return this.push(...items);
};

//export - bindings 
//default - 







