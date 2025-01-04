document.body.addEventListener('click', (event)=>{
    const bgColor = ['red', 'green', 'yellow', 'pink', 'orange', 'purple', 'teal', 'blue', 'brown', 'white'];
    const generateBg = bgColor[Math.floor(Math.random()*bgColor.length)];

    const bubbleText = ['hello', 'hii', 'sanu', 'suraj', 'setu'];
    const generateText = bubbleText[Math.floor(Math.random()*bubbleText.length)];

    const bubble = document.createElement("div");
    bubble.className = "root";
    bubble.textContent = `${generateText}`;
    bubble.style.backgroundColor = `${generateBg}`;

    const x = event.clientX;
    const y = event.clientY;
    bubble.style.left = `${x-25}px`;
    bubble.style.top = `${y-25}px`;

    document.body.appendChild(bubble)

    setTimeout(()=>{
        bubble.remove();
    },5000)
})