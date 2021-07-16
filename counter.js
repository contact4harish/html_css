count = 0;

function clickCount() {

    console.log(count);
    let element = document.getElementById('test1');
    if (element.textContent === 'click') {
        count++;
        element.innerText = 'clicked ' + count + ' times';
        if (count % 10 === 0) {
            alert('clicked ' + count + ' times');
        }

    } else
        element.innerText = 'click'
}


function displayItems() {
    var obj = {
        "org": 10,
        "items": ["select", "one", "two"]
    }

    console.log(obj);
    console.log(obj.org);
    // define(function(require) {
    //     obj = require('/Users/harishkumarsriramula/EduBox/git/html_css/basic');
    // });
    // console.log(obj, 'the json obj');
    //var obj = JSON.parse(document.getElementById('data').firstChild.data);
    //https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_hash.json

    //read promises-js

    // fetch('https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_hash.json').then(results => results.json())
    //     .then(data => {
    //         obj = data
    //         console.log(obj);
    let element = document.getElementById('test2');


    //let list = element.options.add(obj.items[i]);
    for (let i = 0; i < obj.items.length; i++) {
        let list = new Option(obj.items[i], i)
        element.options.add(list);



    }

}







function displayItems2() {

    let obj;

    //https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_hash.json
    //read promises-js

    fetch('./basic.json').then(results => results.json())
        .then(data => {
            obj = data
            console.log(obj);
            let element = document.getElementById('test3');


            // let list = element.options.add(obj.items[]);
            for (let i = 0; i < obj.items.length; i++) {
                let list = new Option(obj.items[i], i)
                element.options.add(list);



            }

        })

}

function displayItems3(id) {

    let obj;

    //https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_hash.json

    //read promises-js

    fetch('https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_hash.json').then(results => results.json())
        .then(data => {
            obj = data
            console.log(obj);
            console.log("obj 1 " + obj[1]);
            let element = document.getElementById(id);
            let i = 0;
            let list = new Option("Select", i);
            element.options.add(list);
            i++;
            for (key in obj) {

                if (obj.hasOwnProperty(key)) {
                    let value = obj[key];
                    list = new Option(value, i)
                    element.options.add(list);
                    i++;
                }





            }

        })




}

document.addEventListener("DOMContentLoaded", function clickVisible() {

    document.getElementById('test1').innerText = 'click'

});

document.addEventListener("DOMContentLoaded", function() { displayItems() })

document.addEventListener("DOMContentLoaded", function() { displayItems2() })


document.addEventListener("DOMContentLoaded", function() { displayItems3('test4') })

document.addEventListener("DOMContentLoaded", function() { displayItems3('toState') })

document.addEventListener("DOMContentLoaded", function() { displayItems3('fromState') })