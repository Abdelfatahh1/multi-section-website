let servicesSec = document.querySelector(".skills");
let progs = document.querySelectorAll(".progress");
let stateSec = document.querySelector(".state");
let numbers = document.querySelectorAll(".state .contaner .card .num");

function set(element){
    let top = element.offsetTop;
        let height = element.offsetHeight;
        let wheight = window.innerHeight;
        let s = (top + height - wheight);
        return s;
}
window.addEventListener("scroll",function(){
  
    if(window.scrollY > set(servicesSec)){
        progs.forEach((prg)=>{
            prg.style.width = prg.getAttribute("percentage");
        })
    }
}) 


    
let start = false;
window.addEventListener("scroll",()=>{
    if(window.scrollY > set(stateSec)){
        if(!start){
            numbers.forEach((num)=>{
                let counter = setInterval(()=>{
                    num.textContent++;
                    if(num.textContent === num.dataset.number){
                        clearInterval(counter);
                    }
                },5000 / num.dataset.number);
            })
            start = true;
           }
    }
  
})
       

