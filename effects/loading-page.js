document.onreadystatechange(() => {
    if(document.readyState !== "complete") {
        document.querySelector(".spinner").style.visibility = "visible";
        document.querySelector("body").style.visibility = "hidden";
    } else {
        document.querySelector(".spinner").style.visibility = "visible";
        document.querySelector("body").style.visibility = "hidden";
    }
})