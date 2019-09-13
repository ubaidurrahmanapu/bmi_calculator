
function bmi() {
    var h = document.getElementById("height").value;
    var w = document.getElementById("weight").value;
    var n = document.getElementById("name").value;
    var x = w / h**2;
    // x = x ? x : 0;

    if (h == "") {
        alert("Please enter height");
        return false;
    };

    if (w == "") {
        alert("Please enter weight");
        return false;
    };

    if (n == "") {
        alert("Please enter name");
        return false;
    };

    document.write("<span style=\"color:green; font-size:60px; display:flex; align-items: center; height:100%; justify-content:center; text-align:center;\">" + " Your BMI is " +  x + "<br>"  );
    if (x > 25) {
           document.write(n + " you are overweight");
        } else {
             document.write(n + " you are not overweight");
        }
    

}



