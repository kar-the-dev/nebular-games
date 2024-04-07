document.onreadystatechange(() => {
    if(document.readyState !== "complete") {
        document.querySelector(".spinner").style.visibility = "visible";
        document.querySelector("body").style.visibility = ""
    } else {

    }
})