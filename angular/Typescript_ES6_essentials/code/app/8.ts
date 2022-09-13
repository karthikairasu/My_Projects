/* {
    type K = 'Bacteria' | 'Protozoa' | 'Chromista' | 'Plantae' | 'Fungi' | 'Animalia' | 200;

    let kingdom: K; 

    // OK
    kingdom = 'Bacteria';  

    kingdom=200;

    // Error: Type 'Protista' is not assignable to type 'Kingdom'
    kingdom = 'Protista';

    
} */