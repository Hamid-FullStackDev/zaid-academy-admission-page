const plus = document.querySelector(".plus");
const phone = document.querySelector(".phone");
const whatsapp = document.querySelector(".whatsapp");
const venue = document.querySelector(".location");
const btnDiv = document.querySelector(".btnsDiv");
const cover = document.querySelector(".cover")

plus.addEventListener("click", () => {
    if (cover.classList.contains("active")){
        plus.classList.toggle("active")
        setTimeout(() => {
            phone.classList.toggle("active")
            setTimeout(() => {
                whatsapp.classList.toggle("active")
                setTimeout(() => {
                    venue.classList.toggle("active")
                    setTimeout(() => {
                        btnDiv.classList.toggle("active")
                        setTimeout(() => {
                            cover.classList.toggle("active") 
                        }, 500);
                    }, 200);
                }, 200);
            }, 200);
        }, 200);
    } else{
        cover.classList.toggle("active")    
        setTimeout(() => {
            btnDiv.classList.toggle("active")
            setTimeout(() => {
                plus.classList.toggle("active")
                setTimeout(() => {
                    phone.classList.toggle("active")
                    setTimeout(() => {
                        whatsapp.classList.toggle("active")
                        setTimeout(() => {
                            venue.classList.toggle("active")
                        }, 200);
                    }, 200);
                }, 200);
                
            }, 200);
        }, 400);
    }

})


const humburger = document.querySelector(".humburger")
const aside = document.querySelector("aside")

humburger.addEventListener("click", () => {
    humburger.classList.toggle("active")
    aside.classList.toggle("active")
})