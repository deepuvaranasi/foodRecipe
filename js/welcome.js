fetch("data/data1.json")
    .then(response => {
        return response.json();
    })
    .then((data) => {
        console.log(data.sentence)
        document.querySelector("#demo").innerHTML = data.sentence

    })