//Validation for the first form checking if the field is filled
function valid() {

    if (document.docForm.first_name.value == "") {
        alert("Name must be filled out");
        document.docForm.first_name.focus();

        return false;
    } else if (document.docForm.last_name.value == "") {
        alert("Last name must be filled out");
        document.docForm.last_name.focus();
        return false;
    } else if (document.docForm.email.value == "") {
        alert("Your email must be filled out");
        document.docForm.email.focus();
        return false;
    } else if (document.docForm.phone.value == "") {
        alert("Your phone must be filled out");
        document.docForm.phone.focus();
        return false;
    } else if (document.docForm.subject.value == "") {
        alert("Your subject must be filled out");
        document.docForm.subject.focus();
        return false;
    } else if (document.docForm.text_area.value == "") {
        alert("Your message must be filled out");
        document.docForm.text_area.focus();
        return false;
    } else {
        alert("your message has been sent !");
        return true;
    }

}

//Reset the fields from the first form
function reset() {
    document.getElementById("first_name").innerHTML = "";
    document.getElementById("last_name").innerHTML = "";
    document.getElementById("email").innerHTML = "";
    document.getElementById("phone").innerHTML = "";
    document.getElementById("subject").innerHTML = "";
    document.getElementById("text_area").innerHTML = "";
}

//Jquery function to activate the nav bar when scrolling down
$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');

    } else {
        $('nav').removeClass('black');
    }
})

//Page 2 payment validation
//Fields get red when not filled
function payment_fields() {
    var name = document.payForm.name.value;
    var address = document.payForm.address.value;
    var email = document.payForm.email.value;
    var card = document.payForm.card_number.value;

    if (name == "" || address == "" || email == "" || card == "") {

        if (name == "") {
            document.getElementById("name").style.backgroundColor = "red";
        }
        if (address == "") {
            document.getElementById("address").style.backgroundColor = "red";
        }
        if (email == "") {
            document.getElementById("email").style.backgroundColor = "red";
        }
        if (card == "") {
            document.getElementById("card_number").style.backgroundColor = "red";
        }


    } else {
        var name = document.payForm.name.value;
        var address = document.payForm.address.value;
        var email = document.payForm.email.value;
        var type = document.querySelector('input[name="card_type"]:checked').value;
        var card = document.payForm.card_number.value;
        card = card.replace(/.(?=.{4})/g, 'x');
        document.getElementById("message").innerHTML = "Hi " + name + " thanks for purchasing our product using your " + type + " credit card no." + card + ". We will email your receipt on " + email + " and send the product to " + address + ".";
    }
}

    //Change the tab content

    $(document).ready(function () {
        $(".nav-tabs a").click(function () {
            $(this).tab('show');
        });
    });