var count=0;
function htmlReader(){
    document.querySelector(".meraButton").addEventListener("click",() => {
        let userInput=document.getElementById("searchBar").value;
        if(userInput.trim() !== ""){
            createTask(userInput);
        }
    }
    )
}
function checkTask(inp){
    inp.addEventListener("click",function(){   
        if(this.checked){
            count-=1;
            this.parentElement.style.opacity="0.5";
            this.nextSibling.style.textDecoration = "line-through";
        }
        else{
            count+=1;
            this.parentElement.style.opacity="1";
            this.nextSibling.style.textDecoration = "none";
        }
        updateTasksLeft(count);
    })
}
function addDelButton(cross,inp){
    cross.addEventListener("click",function(){
        if(inp.checked){
            cross.parentElement.remove();
        }
    })
}

function updateTasksLeft(count){
    document.querySelector(".counter").innerHTML="Your remaining todos: "+count;
}

function createTask(text){
    let target=document.querySelector(".container");
    let a = document.createElement("div");                     //container->task->{inp,p}
    a.className="task";

    let inp=document.createElement("input");
    inp.type="checkbox";
    inp.className="done";
    checkTask(inp);
    a.append(inp);

    let val=document.createElement("p");
    val.innerHTML=text;
    val.addEventListener("dblclick",function(){
        let newVal=prompt("Update the task");
        if(newVal.trim()!=""){
            this.innerHTML=newVal;
        }
    })
    a.append(val);

    let cross=document.createElement("button");
    cross.innerHTML="X";
    cross.className="btn btn-outline-success crossButton";
    addDelButton(cross,inp);
    a.append(cross);

    target.append(a);
    count+=1;
    updateTasksLeft(count);
}
htmlReader();
