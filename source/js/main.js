const mobile_navbar_items = document.querySelectorAll('.mobile-navbar ul li');
const nav_toggle = document.getElementById('nav-toggle');
const transparent_bg = document.querySelector('.transparent-bg');
const contact_form = document.getElementById('contactForm');
const xhttp = new XMLHttpRequest();

transparent_bg.addEventListener('click', function() {
    nav_toggle.checked = false;
})

mobile_navbar_items.forEach(item => {
    item.addEventListener('click', function() {
        nav_toggle.checked = false;
    })
})

contact_form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = contact_form.querySelector('#name');
    const email = contact_form.querySelector('#email');
    const message = contact_form.querySelector('#message');
    const data = {
        name: name.value,
        email: email.value,
        message: message.value
    };
    
    // xhttp.open("GET", "https://script.google.com/macros/s/AKfycbzo3firdx66c-E9ykKhal08NP2b4iiWbafaN-oBjwjGg_44QQA/exec", true);
    // xhttp.setRequestHeader("Content-type", "application/json");
    // xhttp.send(JSON.stringify(data));
    $.ajax({
        type: "GET",
        url: "https://script.google.com/macros/s/AKfycbzo3firdx66c-E9ykKhal08NP2b4iiWbafaN-oBjwjGg_44QQA/exec",
        data,
        success: function(response) {
            if(response == "成功"){
                alert("寄出成功");
                name.value = email.value = message.value = "";
            }
        }
    })
 
})
