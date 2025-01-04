let colorGenerate = document.querySelector(".colorGenerate");
colorGenerate.addEventListener("click", ()=>{
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    // console.log(red)

    let color = `rgb(${red}, ${green}, ${blue})`
    console.log(color)

    let value = document.querySelector(".value");
    value.innerHTML = color;

    document.body.style.background = color;
})