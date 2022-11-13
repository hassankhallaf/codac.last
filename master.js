// Headers Selectors//  

let allli= document.querySelectorAll(" header ul li ")

let span=document.querySelectorAll(" header ul li a span")

let hide=document.querySelectorAll("header")



allli.forEach(function(ele){
    ele.onclick= function(){
        allli.forEach(function(ele){
             ele.classList.remove("home")
        })
        this.classList.add("home")
    }    
})  
//