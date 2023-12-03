//scrollhover
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal('.text',{delay:200, origin: 'top'})
sr.reveal('.form-container form',{delay:800, origin: 'left'})
sr.reveal('.heading',{delay:400, origin: 'top'})
sr.reveal('.ride-container .box',{delay:400, origin: 'top'})
sr.reveal('.accessories-container .box',{delay:400, origin: 'top'})
sr.reveal('.services-container .box',{delay:400, origin: 'top'})
sr.reveal('.about-container about',{delay:400, origin: 'top'})
sr.reveal('.reviews-container',{delay:400, origin: 'top'})
sr.reveal('.newsletter-container',{delay:400, origin: 'top'})

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

$(window).on("hashchange", function () {
	if (location.hash.slice(1) == "signup") {
		$(".page").addClass("extend");
		$("#login").removeClass("active");
		$("#signup").addClass("active");
	} else {
		$(".page").removeClass("extend");
		$("#login").addClass("active");
		$("#signup").removeClass("active");
	}
});
$(window).trigger("hashchange");

function validateLoginForm() {
	var name = document.getElementById("logName").value;
	var password = document.getElementById("logPassword").value;

	if (name == "" || password == "") {
		document.getElementById("errorMsg").innerHTML = "Please fill the required fields"
		return false;
	}

	else if (password.length < 8) {
		document.getElementById("errorMsg").innerHTML = "Your password must include atleast 8 characters"
		return false;
	}
	else {
		alert("Successfully logged in");
		return true;
	}
}
function validateSignupForm() {
	var mail = document.getElementById("signEmail").value;
	var name = document.getElementById("signName").value;
	var password = document.getElementById("signPassword").value;

	if (mail == "" || name == "" || password == "") {
		document.getElementById("errorMsg").innerHTML = "Please fill the required fields"
		return false;
	}

	else if (password.length < 8) {
		document.getElementById("errorMsg").innerHTML = "Your password must include atleast 8 characters"
		return false;
	}
	else {
		alert("Successfully signed up");
		return true;
	}
}