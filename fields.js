function onblur() {
    alert('kaskdfjdklsjf')
}

function printData(id, type) {
    let element = document.getElementById(id);
    let temp = document.createElement('label')
    let temp2;
    if (type === 'input') {
        temp2 = element.value
    } else if (type === 'option') {
        var e = element.options[element.selectedIndex];
        temp2 = e.innerHTML
    }

    element.parentNode.replaceChild(temp, element)
    temp.innerHTML = temp2
}


document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('submit').addEventListener("click",
        function() {
            // let toFirstName = document.getElementById('toFirstName');
            // let fromFirstName = document.getElementById('fromFirstName');
            // let toLastName = document.getElementById('toLastName');
            // let fromLastName = document.getElementById('fromLastName');
            // let toAddressLine1 = document.getElementById('toAddressLine1');
            // let fromAddressLine1 = document.getElementById('fromAddressLine1');
            // let toAddressLine2 = document.getElementById('toAddressLine2');
            // let fromAddressLine2 = document.getElementById('fromAddressLine2');
            // let toCity = document.getElementById('toCity');
            // let fromCity = document.getElementById('fromCity');
            // var e = document.getElementById('toState');
            // var f = document.getElementById('fromState');
            // var toState = e.options[e.selectedIndex];
            // var fromState = f.options[f.selectedIndex];
            // let toZipCode = document.getElementById('toZipcode');
            // let fromZipCode = document.getElementById('fromZipcode');
            //console.log(toFirstName.replaceChild("<label"+toFirstName.getAttribute("id")+">"+"<\/label>")
            //console.log(toState.innerHTML)

            printData('toFirstName', 'input')
            printData('fromFirstName', 'input')
            printData('toLastName', 'input')
            printData('fromLastName', 'input')
            printData('toAddressLine1', 'input')
            printData('fromAddressLine1', 'input')
            printData('toAddressLine2', 'input')
            printData('fromAddressLine2', 'input')
            printData('toCity', 'input')
            printData('fromCity', 'input')
            printData('toZipcode', 'input')
            printData('fromZipcode', 'input')
            printData('toState', 'option')
            printData('fromState', 'option')

            // toFirstName.replaceWith(toFirstName.value)
            // fromFirstName.replaceWith(fromFirstName.value)
            // toLastName.replaceWith(toLastName.value)
            // fromLastName.replaceWith(fromLastName.value)
            // toAddressLine1.replaceWith(toAddressLine1.value)
            // fromAddressLine1.replaceWith(fromAddressLine1.value)
            // toAddressLine2.replaceWith(toAddressLine2.value)
            // fromAddressLine2.replaceWith(fromAddressLine2.value)
            // toCity.replaceWith(toCity.value)
            // fromCity.replaceWith(fromCity.value)
            // toZipCode.replaceWith(toZipCode.value)
            // fromZipCode.replaceWith(fromZipCode.value)
            // e.replaceWith(toState.innerHTML)
            // f.replaceWith(fromState.innerHTML)


            var myobj = document.getElementById("submit");
            myobj.remove();




        })

    //toFirstName.addEventListener("blur", onblur())
})