// window.onscroll = () => {
//     emmanuel.classList.remove("fa-times");
//     myBoss.classList.remove("active");
// }

// let emmanuel = document.querySelector("#menu-btn");
// let myBoss = document.querySelector(".navbar");

// emmanuel.onclick = () => {
//     emmanuel.classList.toggle("fa-times");
//     myBoss.classList.toggle("active");
// }

// window.onscroll =()=> {
//     emmanuel.classList.remove("fa-times");
//     myBoss.classList.remove("active");
// }




// <!-- GetButton.io widget -->
(function () {
    var options = {
        whatsapp: "+2349064967544", // WhatsApp number
        call_to_action: "Message us", // Call to action
        button_color: "#FF6550", // Color of button
        position: "right", // Position may be 'right' or 'left'
    };
    var proto = 'https:', host = "getbutton.io", url = proto + '//static.' + host;
    var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
    s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
    var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
})();






AOS.init({
    duration: "800",
    delay: "300",
    easing: "ease",

});


let menu = document.querySelector("#menu-btn");
let nav = document.querySelector(".navbar-links");


menu.addEventListener("click", (e) => {
   nav.classList.toggle("active")
   console.log("hello")

})