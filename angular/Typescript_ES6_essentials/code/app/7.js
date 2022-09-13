// Type annotation for a union type  // widen your type  
var union;
// OK: number
union = 100;
// OK: boolean
union = true;
// Error: Type "string" is not assignable to type 'number | boolean' 
union = 'hello';
