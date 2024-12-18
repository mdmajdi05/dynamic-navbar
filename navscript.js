const h111 = document.querySelector(".ull li:nth-child(1)")
// var second = document.querySelector(".content a:nth-child(2)")
const h222 = document.querySelector(".ull li:nth-child(2)")
const h333 = document.querySelector(".ull li:nth-child(3)")
const h444 = document.querySelector(".ull li:nth-child(4)")
const h555 = document.querySelector(".ull li:nth-child(5)")
const h11 = document.querySelector(".h1")
const h22 = document.querySelector(".h2")
const h33 = document.querySelector(".h3")
const h44 = document.querySelector(".h4")
const h55 = document.querySelector(".h5")
const li= document.querySelector(".list")
const head= document.querySelector(".head")


        // li.addEventListener('click', ()=>{
        //     head.forEach(heading => {
        //         heading.style.display="block";
        //     });
        // })

h111.addEventListener('click', ()=>{
    
    h11.style.display="block";
    h22.innerHTML="";
    
    // h22.style.display="none";
    // h33.style.display="none";
    // h44.style.display="none";
    // h55.style.display="none";
    
})
// h22.innerHTML="";
    
h222.addEventListener('click', ()=>{

    h22.style.display="block";
    // h22.style.display="none";
    h11.innerHTML="";
    // h22.style.display="none";
    
    // h33.style.display="none";
    // h44.style.display="none";
    // h55.style.display="none";
})

    
h333.addEventListener('click', ()=>{
    h33.innerHTML="";
    // h22.style.display="none";
    // h22.style.display="none";
    h33.style.display="block";
    // h44.style.display="none";
    // h55.style.display="none";
})

    
h444.addEventListener('click', ()=>{
    h44.innerHTML="";
    // h44.style.display="none";
    // h22.style.display="none";
    // h33.style.display="none";
    h44.style.display="block";
    // h55.style.display="none";
})

h444.addEventListener('click', ()=>{
    h55.innerHTML="";
    // h44.style.display="none";
    // h22.style.display="none";
    // h33.style.display="none";
    // h44.style.display="none";
    h55.style.display="block";
})