let star_icons = document.querySelectorAll(".fa-star");
let face_icons = document.querySelectorAll(".fa-regular");
let colors = ["red", "orange", "lightblue", "light-green", "green"]

for(let i=0; i<star_icons.length; i++){
    star_icons[i].onclick = function(){
        // alert(this.getAttribute("rating-num"));
        let rate_star = this.getAttribute("rating-num")
        updateRate(rate_star);
    }
}

function updateRate(rate_star){
    for(let j=0; j<star_icons.length; j++){
        if(j<=rate_star-1){
            star_icons[j].classList.add("active_star");
        }
        else{
            star_icons[j].classList.remove("active_star");
        }
    }

    for(let k=0; k<face_icons.length; k++){
        face_icons[k].style.transform = "translate(-"+(rate_star-1)*50+"px)";
        face_icons[k].style.color = colors[k]
    }
}