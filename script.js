randomNum = Math.floor(Math.random()* 88) +1;
randomNum != 14;


document.getElementById('fetchButton').addEventListener('click', fetchUserData);

function fetchUserData () {
    if (document.getElementById('name').value == "Tom") {
        return document.getElementById('answer').innerHTML = `<h2>You are Han Solo</h2>`    
    } else {
    fetch(`https://swapi.py4e.com/api/people/${randomNum}/`) 
        .then(response => { 
            return response.json();
        })
        .then(people => {
            people.name;
            document.getElementById('answer').innerHTML = `<h2>You are ${people.name}</h2>`
        });

    };}



   