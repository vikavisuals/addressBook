const form = document.forms[0];

form.addEventListener("submit", function (event) {
    event.preventDefault();

    var personText = this.elements.person.value;
    var phoneText = this.elements.phone.value;
    var emailText = this.elements.email.value;
    console.log(personText);

    var addressInfo = `Name: ${personText} <br> Phone: ${phoneText} <br> Email: ${emailText} <br>
    <button type="button" id="editBtn">Edit</button> <button type="button" id="deleteBtn" onclick="addressList.removeChild(this.parentNode)">Delete</button>`;

    var addressList = document.getElementById("addressList");

    var addressItem = document.createElement('div');

    addressItem.setAttribute('class', 'addressItem');

    addressList.appendChild(addressItem);

    addressItem.innerHTML = `${addressInfo}`;


    var editBtn = document.getElementById("editBtn");

    editBtn.addEventListener("click", function () {
        addressItem.contentEditable = true;
    });

});

