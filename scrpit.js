let string = "";
let button = document.querySelectorAll(".button");
Array.from(button).forEach((button)=>{
    button.addEventListener("click", (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == "C"){
            string="";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == "%"){
            string=string+"/100";
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == `<i class="fa-solid fa-delete-left" style="margin-top: 4px;"></i>`){
            let l=string.length;
            string = string.slice(0,l-1);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == "+/-"){
            let len=string.length
            if(string[0]=="-"){
                string = string.slice(1,len);
            }
            else{
                string = "-"+string;
            }
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})
    document.addEventListener("keydown",(event)=>{
        let arr=[1,2,3,4,5,6,7,8,9,0]
        if (event.key == "Enter"){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(event.key>=0){
            string = string + event.key;
            document.querySelector('input').value = string;
        }
        else if(event.key=="-"||event.key=="+"||event.key=="/"||event.key=="*"||event.key=="%"||event.key=="."){
            string = string + event.key;
            document.querySelector('input').value = string;
        }
        else if(event.key=="Backspace"){
            let l=string.length;
            string=string.slice(0,l-1)
            document.querySelector('input').value = string;
        }
    })


