

{
    var firstName = 'Chris';      

    {
        var firstName = 'Tudor';   

        console.log('Name 1: ' + firstName);  
    }

    console.log('Name 2: ' + firstName);

    // Output:
    // Name 1: Tudor
    // Name 2: Tudor
}

{
    let firstName = 'Chris';      

    {
        let firstName = 'Tudor';   

        console.log('Name 1: ' + firstName);  
    }

    console.log('Name 2: ' + firstName);

    // Output:
    // Name 1: Tudor
    // Name 2: Tudor
}

{
    const firstName = 'Chris';      

    {
        const firstName = 'Tudor';   

        console.log('Name 1: ' + firstName);  
    }

    console.log('Name 2: ' + firstName);

    // Output:
    // Name 1: Tudor
    // Name 2: Tudor
}








