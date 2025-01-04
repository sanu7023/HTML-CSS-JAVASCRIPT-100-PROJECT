let button = document.querySelectorAll("button");
let countValue = document.getElementById("countValue");

let count = 0;

button.forEach(function(btn){
    btn.addEventListener("click", function(e){
        let id = e.target.id;
        // console.log(id)

        if(id === "decrees"){
            count--
        }
        else if(id === "increase"){
            count++
        }
        else{
            count = 0;
        }

        if(count < 0){
            countValue.style.color = "red"
        }
        else if(count > 0){
            countValue.style.color = "green"
        }
        else{
            countValue.style.color = "black"
        }
        // console.log(count)
        countValue.innerHTML = count;
    })
})