function send() {
    number_1 = document.getElementById("number1").value;
    number_2 = document.getElementById("number2").value;
    correct = parseInt(number_1) * parseInt(number_2);
    tag1 = "<h4>" + number_1 + "X" + number_2 + "</h4>";
    tag2 = "<br>Ansewer: <input type='text' placeholder='ansewer' id='ansewer><br>";
    tag3 = "<br><button class='btn btn-inverse' onclick='check()'>check</button>";
    full = tag1 + tag2 + tag3;
    document.getElementById("output").innerHTML = full;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}