function beforesubmit(){
    let outputdate = document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");
    console.log("inputdate ",inputdate.value); //string (en_US)

    let formatteDate = new Date(inputdate.value).toLocaleDateString("en-US");
    outputdate.value = formatteDate;
}