document.getElementById("newUserForm").addEventListener("submit", function(event){

    var password= document.getElementById('pass1').value ;
    var confirm= document.getElementById('pass2').value;

    if (confirm!=password) {
        var field = document.getElementById("submit")
        alert("Does not match.")
        event.preventDefault()
    }

});