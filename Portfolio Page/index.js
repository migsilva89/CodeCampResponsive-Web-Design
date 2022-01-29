AOS.init();

    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
        if (document.documentElement.scrollTop > 450 && document.documentElement.scrollTop < 700 ) {
            document.getElementById("ul1").style.visibility = "hidden";
        } 
        else { 
            document.getElementById("ul1").style.visibility = "visible";
        } 
        
        if (document.documentElement.scrollTop > 1210) {
            var element = document.getElementById("ul1");
            element.classList.add("bg-black", "p-2", "w-full",);
            
        } else { 
            var element = document.getElementById("ul1");
            element.classList.remove("bg-black", "p-2", "w-full");
        }

        if (document.documentElement.scrollTop > 1210) {
            var nav = document.getElementById("navbar");
            nav.classList.remove("pt-16")
            nav.classList.add("pt-10",)
        } else {
            var nav = document.getElementById("navbar");
            nav.classList.remove("pt-10")
            nav.classList.add("pt-16")
        }
    }

    function soon(params) {
        alert("Available Soon!")

    }