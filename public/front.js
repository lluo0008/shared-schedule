function changeColor(obj_id) {
    var textIn = document.getElementById(obj_id).innerHTML;
    var name = document.getElementById("info").innerHTML;
    const db = firebase.database();
    if (name == "") {
        alert("Please Enter a Name")
        
    } else {
        if (textIn === "Open"){
            document.getElementById(obj_id).style.backgroundColor = "#FFFFFF";
            document.getElementById(obj_id).innerHTML = name;
            this.value=name;
        } else {
            document.getElementById(obj_id).style.backgroundColor = "#DDDDDD";
            document.getElementById(obj_id).innerHTML = "Open";
            this.value = "Open";
        }   

        const mon8am = document.getElementById('8amMon');
        const monday = db.ref('Monday');
        const dbMon8am = db.ref().child('Monday');
        monday.child("8am").set("TEST");
    }
    //this.value="Lawrence";
    //alert(this.value)
}



    var input = document.getElementById("fname");
    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("fname_button").click();
        }
    });

function dispInfo() {
    var first = document.getElementById("fname").value;
    document.getElementById("info").innerHTML = first;
    
    
    db.ref('Names').set(first);
    
    
}