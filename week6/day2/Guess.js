// function showValue1() {
//   let val1 = document.getElementById("one").value;
//   console.log(val1);
// }
// function showValue2() {
//   let val2 = document.getElementById("two").value;
//   console.log(val2);
// }
// function showValue3() {
//   let val3 = document.getElementById("three").value;
//   console.log(val3);
// }
// function showValue4() {
//   let val4 = document.getElementById("four").value;
//   console.log(val4);
// }




function checkOne() {
    let one = document.getElementById("one")
    if (one.value === "1") {
        console.log("correct")
    }
    else {
        document.getElementById("img1").src = "boom.png"
    }
    document.getElementById("two").focus()
}

function checkNine() {
    let one = document.getElementById("two")
    if (one.value === "9") {
        console.log("correct")
    }
    else {
        document.getElementById("img2").src = "boom.png"
    }
    document.getElementById("three").focus()
}

function checkEight() {
    let one = document.getElementById("three")
    if (one.value === "8") {
        console.log("correct")
    }
    else {
        document.getElementById("img3").src = "boom.png"
    }
    document.getElementById("four").focus()
}

function checkZero() {
    let one = document.getElementById("four")
    if (one.value === "0") {
        console.log("correct")
    }
    else {
        document.getElementById("img4").src = "boom.png"
    }

}

function clearAll() {
    document.getElementById("one").value = "";
    document.getElementById("two").value = "";
    document.getElementById("three").value = "";
    document.getElementById("four").value = "";



    document.getElementById("img1").src = "bomb.png";
    document.getElementById("img2").src = "bomb.png";
    document.getElementById("img3").src = "bomb.png";
    document.getElementById("img4").src = "bomb.png";
}



