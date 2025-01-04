// const body = document.body;
// const button = document.querySelectorAll('button');
// button.forEach((button)=>{
//     // console.log(button);
//     button.addEventListener('click',()=>{
//         // console.log(button.id)
//         body.style.backgroundColor = `${button.id}`;
//     })
// })

// ========== bubbling events ==========
const bd = document.body
const root = document.querySelector('.root');
root.addEventListener('click', (event)=>{
    // console.log(event.target.tagName);
    if(event.target.tagName === "BUTTON");
    bd.style.backgroundColor = event.target.id;
})