AOS.init();


window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
//     document.getElementById("navbar").style.visibility = "visible";
//     document.getElementById("navbar").classList.add("pb-5","bg-black");
//     document.getElementById("ul1").classList.add("pt-5");
//   } else if (document.body.scrollTop < 10 || document.documentElement.scrollTop < 10) {
//     document.getElementById("navbar").style.visibility = "visible";
//   } else  {
//     document.getElementById("navbar").style.visibility = "hidden";
//   }
// }

var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.visibility = "visible";
    } else {
        document.getElementById("navbar").style.visibility = "hidden";
        document.getElementById("navbar").classList.add("pb-5","bg-black");
        document.getElementById("ul1").classList.add("pt-5");
    }
    prevScrollpos = currentScrollPos;

    if (document.documentElement.scrollTop < 400) {
            document.getElementById("navbar").classList.remove("pt-8", "bg-black");
    } 
}

    // window.onscroll = function() {scrollFunction()};
    
    // function scrollFunction() {
    //     if (document.documentElement.scrollTop > 450 && document.documentElement.scrollTop < 700 ) {
    //         document.getElementById("ul1").style.visibility = "hidden";
    //     } 
    //     else { 
    //         document.getElementById("ul1").style.visibility = "visible";
    //     } 
        
    //     if (document.documentElement.scrollTop > 1210) {
    //         var element = document.getElementById("ul1");
    //         element.classList.add("p-2", );
            
    //     } else { 
    //         var element = document.getElementById("ul1");
    //         element.classList.remove("p-2",);
    //     }

    //     if (document.documentElement.scrollTop > 1150) {
    //         var nav = document.getElementById("navbar");
    //         nav.classList.remove("pt-16")
    //         nav.classList.add("pt-10","bg-black")
    //     } else {
    //         var nav = document.getElementById("navbar");
    //         nav.classList.remove("pt-10","bg-black")
    //         nav.classList.add("pt-16")
    //     }
    // }

    function soon(params) {
        alert("Available Soon!")

    }