let arr =[]


if(localStorage.getItem("title")){

    arr = JSON.parse(localStorage.getItem("title"))
}

js()


const input = document.getElementById("todo_input")
input.addEventListener("change",(e)=>{
const value = e.target.value
const todo = document.createElement("div")
todo.classList.add("todo")
todo.innerHTML= `
<div>${value}</div>
<div class="check" ><input  type="checkbox"></div>
<div id="btn" >
        <i class="fa-solid fa-xmark"></i>
        </div>`
document.getElementById("page").appendChild(todo)
e.target.value = ("")

todo.children[2].onclick = (ele) =>{
           
    arr.splice(arr.length - 1,1)
    localStorage.setItem("title",JSON.stringify(arr))
    todo.remove()
}
arr.push({title:value,iscomp:false})
localStorage.setItem("title",JSON.stringify(arr))


})


function js (){
   
    const back = JSON?.parse(localStorage.getItem("title"))
    
  
  
   back.forEach(  (ele,i) => {
    const todo = document.createElement("div")
    todo.classList.add("todo")
    todo.innerHTML= `
    <div>${ele?.title}</div>
    
    <div class="check" ><input type="checkbox" ${ele.iscomp ? "checked":""}></div>
    <div class="btns">
            <i class="fa-solid fa-xmark"></i>
            </div>`
     document.getElementById("page").appendChild(todo)

    setTimeout(() => {
        todo.children[2].onclick = (ele) =>{
           
            back.splice(i,1)
            localStorage.setItem("title",JSON.stringify(back))
            todo.remove()
        }
        
        todo.children[1].onchange = (chk) =>{
            
            
            const data_arr = JSON.parse(localStorage.getItem("title"))
            data_arr[i].iscomp = chk.target.checked     
        
            localStorage.setItem("title",JSON.stringify(data_arr))

        }
            
            
            
    }, 500);


   });
  
}




let checked = JSON.parse(localStorage.getItem("checkbox"))
document.querySelectorAll("check").checked = checked


