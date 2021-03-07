var url = "login.html";

switch(url){
    case "home.html":
    console.log("Load & display home page");
    break;

    case "services.html":
    case "about.html":
    console.log("Load & display About us page");
    break;

    case "login.html":
    console.log("Load & display Login page");
    break;

    default:
    console.log("Load and display home page");
}