function createNode(element) {
    return document.createElement(element);
}
function append(parent, el) {
    return parent.appendChild(el);
}
const ul = document.querySelector('#select');
const url = 'data/data2.json';

fetch(url)
    .then( function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        // for(var i=0;i<data.length;i++){
        //   document.getElementById("demo").innerHTML +=
        //         data[i].id + "=>" +data[i].name +"<br />";
        // }

        console.log(+ data.select[1].id)
        let select  = data.select;

        return select.map(function(select) {
            let li = createNode('li');
            li.innerHTML = select.id + " " + select.name;
            append(ul, li);
        })


    }).catch(function (err)
{
    console.log(err);
});


