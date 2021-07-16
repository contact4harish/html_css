function onblur() {
    alert('kaskdfjdklsjf')
}
document.addEventListener('DOMContentLoaded', function() {
    let toFirstName = document.querySelector('#toFirstName');
    // let fromFirstName = document.querySelector('#fromFirstName').value;
    // let toLastName = document.querySelector('#toLastName').value;
    // let fromLastName = document.querySelector('#fromLastName').value;
    // let toAddressLine1 = document.querySelector('#toAddressLine1').value;
    // let fromAddressLine1 = document.querySelector('#fromAddressLine1').value;
    // let toAddressLine2 = document.querySelector('#toAddressLine2').value;
    // let fromAddressLine2 = document.querySelector('#fromAddressLine2').value;
    // let toCity = document.querySelector('#toCity').value;
    // let fromCity = document.querySelector('#fromCity').value;
    // let toState = document.querySelector('#toState').value;
    // let fromState = document.querySelector('#fromState').value;
    document.getElementById('submit').addEventListener("click",
        function() {
            alert(toFirstName);
        })

    //toFirstName.addEventListener("blur", onblur())
})