const db = firebase.database();

const mon8am = document.getElementById('8amMon');
const mon9am = document.getElementById('9amMon');
const mon10am = document.getElementById('10amMon');
const mon11am = document.getElementById('11amMon');


//get elements
const monday = db.ref('Monday');
const tuesday = db.ref("Tuesday");
const wednesday = db.ref("Wednesday");
const thursday = db.ref("Thursday");
const friday = db.ref("Friday");
const saturday = db.ref("Saturday");
const sunday = db.ref("Sunday");


//create references
const dbMon8am = db.ref().child('Monday');
const dbMon9am = db.ref().child('Monday');

const dbTue8am = db.ref().child('Tuesday');

//Sync changes
dbMon8am.on('value', snap =>
{
    mon8am.innerHTML = JSON.stringify(snap.val());
});

dbMon9am.on('value', snap =>
{
    mon9am.innerHTML = JSON.stringify(snap.val());
});


// addBtn.addEventListener('click', (e) =>
// {
//     e.preventDefault();
//     monday.child("8am").set(mon8am.value);
// });

