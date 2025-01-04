let budget_input = document.querySelector(".budget_input");
let budget_btn = document.querySelector(".budget_btn");

let totla_budget = document.querySelector(".totla_budget_child");
let total_expense = document.querySelector(".total_expense_child");
let total_balance = document.querySelector(".total_balance_child");

let product_title = document.querySelector(".product_title");
let product_cost = document.querySelector(".product_cost");
let product_btn = document.querySelector(".product_btn");

let parent_list = document.querySelector(".parent_list");

budget_btn.addEventListener("click", (e)=>{
    e.preventDefault();
    // alert(budget_input.value)
    if(budget_input.value != ""){
        localStorage.setItem("budget", budget_input.value);
        location.href = location.href;
    }
    else{
        alert("budget input is empty")
    }
})

product_btn.addEventListener("click", (e)=>{
    e.preventDefault();
    if(product_title.value != "" && product_cost.value != ""){
        // alert("sucess")
        let p_t_value = product_title.value;
        let p_c_value = product_cost.value;
        let data = {
            product_title : p_t_value,
            product_cost : p_c_value
        }
        let str = JSON.stringify(data);
        localStorage.setItem("product_"+product_title.value, str);
        location.href = location.href  
    }
    else{
        alert("faild")
    }
})

function all_data(){
    for(let i=0; i<localStorage.length; i++){
        let all_key = localStorage.key(i)
        // alert(all_key)
        if(all_key.match("product_")){
            let json_string = localStorage.getItem(all_key);
            let json_parsel = JSON.parse(json_string);
            // alert(json_parsel.product_cost)
            // parent_list.innerHTML += '<div class="list_container"><div class="product"><h5>'+json_parsel.product_title+'</h5></div><div class="price">'+json_parsel.product_cost+'</div><div class="edit_delite"><i class="ri-edit-box-line edit_btn"></i><i class="ri-delete-bin-5-line delete_item"></i></div></div>'     
            parent_list.innerHTML += '<div class="list_container"><div class="product"><h4 class="f_box">'+json_parsel.product_title+'</h4><p class="f_box price">'+json_parsel.product_cost+'</p><div class="edit_del f_box"><i class="ri-edit-box-line edit_btn"></i><i class="ri-delete-bin-5-line delete_item"></i></div></div></div>'    
        }
    }

    let price_list = document.getElementsByClassName("price");
    let price_arr = [];
    for(let i=0; i<price_list.length; i++){
        // console.log(price_list[i])
        price_arr[i] = price_list[i].innerHTML;
    }

    let price_str = [];
    for(let i=0; i<price_arr.length; i++){
        price_str.push(parseInt(price_arr[i]))
    }

    let final_price = 0;
    for(let i=0; i<price_str.length; i++){
        final_price += price_str[i];
    }
    total_expense.innerHTML = final_price
    // console.log(final_price)
    // console.log(price_str)
    // console.log(price_arr)
    totla_budget.innerHTML = localStorage.getItem("budget");
    let final_bl = totla_budget.innerHTML;
    let final_pr = total_expense.innerHTML;
    let final_tot = final_bl - final_pr;
    total_balance.innerHTML = final_tot

    // delit product code
    let del_item = document.getElementsByClassName("delete_item");
    for(let i=0; i<del_item.length; i++){
        del_item[i].onclick = function(){
            let conf = window.confirm("Do You wanna Delete it ?");
            if(conf == true){
                let del_parent = this.parentElement;
                let del_child = del_parent.parentElement;
                let del_text = del_child.parentElement;
                let del_chitex = del_text.firstChild.childNodes[0].innerHTML
                // console.log(del_text)
                // alert(del_chitex)
                // console.log(del_chitex)
                localStorage.removeItem("product_"+del_chitex);
                location.href = location.href
            }
            else{
                alert("Your data is safe !");
            }
        }
    }

    // edit product code
    let edit_btn = document.getElementsByClassName("edit_btn");
    for(let i=0; i<edit_btn.length; i++){
        edit_btn[i].onclick = function(){
            // alert()
            let confs = window.confirm("Do you want to update it ?");
            if(confs == true){
                // alert("sucess");
                let edit_parent = this.parentElement;
                let edit_child = edit_parent.parentElement;
                let edit_text = edit_child.parentElement;

                let edit_pro_name = edit_text.firstChild.childNodes[0].innerHTML
                let edit_price = edit_text.firstChild.childNodes[1].innerHTML
                // alert(edit_price)

                product_title.value = edit_pro_name;
                product_cost.value = edit_price;
                product_title.focus();
                product_btn.innerHTML = "Update Product";
                product_btn.style.backgroundColor = "green";
                product_btn.style.color = "white";

                product_btn.onclick = function(){
                    localStorage.removeItem("product_"+edit_pro_name)
                    let p_t_value = product_title.value;
                    let p_c_value = product_cost.value;
                    let data = {
                        product_title : p_t_value,
                        product_cost : p_c_value
                    }
                    let str = JSON.stringify(data);
                    localStorage.setItem("product_"+product_title.value, str);
                    location.href = location.href
                }
            }
            else{
                alert("Your data is safe !")
            }
        }
    }
    
}
all_data()