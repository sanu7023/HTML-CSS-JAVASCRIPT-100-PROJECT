let drop_btn = document.querySelectorAll(".drop_btn");

drop_btn.forEach((val) => {
    val.addEventListener('click', (asd) => {
        asd.stopPropagation()
        // console.log(val)
        let drop = val.querySelectorAll(".drop")
        drop.forEach((item) => {
            toggelvie(item)
        })
    })
})

let drop_child_btn = document.querySelectorAll(".drop_child_btn");

drop_child_btn.forEach((i) => {
    i.addEventListener("click", (qwe) => {
        qwe.stopPropagation()
        let drop_child = i.querySelectorAll(".drop_child");
        drop_child.forEach((ic) => {
            toggelvie(ic)
        })
    })
})

function toggelvie(e) {
    if (e.style.display === "none" || e.style.display === "") {
        e.style.display = "block"
    } else {
        e.style.display = "none"
    }
}