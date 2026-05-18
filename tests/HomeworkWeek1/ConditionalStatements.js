

function launchBrowser(browserName){

//let browserName="chrome" 

    if(browserName="chrome")
    {
        console.log("This is expected and browser is chrome")
    }
    else if(browserName="safari")
    {
        console.log("Mac Machine")
    }
    else{
        console.log("No Browser")
    }
}

launchBrowser("chrome");