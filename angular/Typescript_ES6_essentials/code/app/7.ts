// Type annotation for a union type  // widen your type  
let union: boolean | 100 | "hello";

// OK: number
union = 100;   

// OK: boolean
union = true;  

// Error: Type "string" is not assignable to type 'number | boolean' 
union = 'hello'; 

// Type alias for a union type
type StringOrError = string | Error;  

// Type alias for union of many types
type SeriesOfTypes = string | number | boolean | Error;



