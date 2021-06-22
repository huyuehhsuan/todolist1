//設空資料夾
let data = [
    {content:"把冰箱發霉的檸檬拿去丟",status:"todo"},
    {content:"打電話叫媽媽匯款給我",status:"todo"},
    {content:"打電話叫媽媽匯款給我",status:"done"}
];
//要用輸入框和按鈕取data所以設DOM變數
const txt = document.querySelector(".txt");
const save = document.querySelector(".save");
const list = document.querySelector(".list");
const todototal = document.querySelector(".todototal");

//先設定函式
function renderdata(){
    let str ="";
    //把data內的值用forEach一個個取出加上HTML標籤
    data.forEach(function(item,index){   
    str+=`<li class="contentLi"><div class="checkbox"></div>${item.content}<input type="button" value="X" class="delete" data-num="${index}"></li>`;
    });
    //放入UL裡 
    list.innerHTML = str; 
}
renderdata();
totalTodo();


 //有幾個待完成項目todototal
 function totalTodo(){
    const total = document.querySelector(".total");
    let  todoary= [];         
        data.forEach(function(item){
            if(item.status !== "todo"){
                return;                
            }
            else{
                todoary.push("item");
            }                  
        });    
    const todoNum = todoary.length;
    console.log(todoNum);
    todototal.textContent = `${todoNum}個待完成項目`;
 };



//綁定新增按鈕點集監聽
save.addEventListener("click",function(e){
    //防止有白痴沒填
    if(txt.value == ""){
        alert("請輸入內容");
        return;
    }
    //做成data的物件格式
    let obj = {};
    obj.content = txt.value;
    obj.status = "todo";
    //加到data陣列裡
    data.push(obj);
    //初始顯示
    renderdata();
    totalTodo();
    //動作結束歸零
    txt.value = "";
});
//綁定刪除按鈕點集監聽
list.addEventListener("click",function(e){
    if(e.target.getAttribute("class")!=="delete"){
        //alert("沒點到刪除紐");
        return;
    }
    let num = e.target.getAttribute("data-num");
    console.log(e.target);
    console.log(num);
    data.splice(num,1);
    renderdata();
    totalTodo();
});



//<div class="show">篩選器
const btn = document.querySelector(".btn");
//console.log(btn);
btn.addEventListener("click",function(e){
    let str = "";          
    data.forEach(function(item,index){
        //發生事件的元素值(all)要等於元陣列裡的屬性值(all)
        console.log(e.target.getAttribute("class"));
        if(e.target.getAttribute("class") == "all"){
            //要寫入ul的標籤
            str+=`<li class="contentLi"><div class="checkbox"></div>${item.content}<input type="button" value="X" class="delete" data-num="${index}"></li>`;
        }
       
        //發生事件的元素值(todo/done)要等於元陣列裡的屬性值(todo/done)
        else if(e.target.getAttribute("class") == item.status){
            //要寫入ul的標籤
            str+=`<li class="contentLi"><div class="checkbox"></div>${item.content}<input type="button" value="X" class="delete" data-num="${index}"></li>`;
        }  
           
    })
    //設ul的DOM變數
    const list = document.querySelector(".list");
    //將加好的字串寫入HTML
    list.innerHTML=str;
});


//清除已完成項目deletedone
// const deletedone = document.querySelector(".deletedone");
// //console.log(deletedone);
// deletedone.addEventListener("click",function(e){
//     data.forEach(function(item,index){
//         //console.log(item);
//         if(item.status!=="done"){
//             return;
//         }        
//         else if(item.status="done"){
            
//         }       
//     });   
// });

//點擊將待完成變成已完成加刪除線反灰
list.addEventListener("click",function(e){
    if(e.target.getAttribute("class")!="checkbox"){
        //return;
        console.log(e.target.getAttribute("class"));
    }
    else if (e.target.getAttribute("class")=="checkbox"){
        const li = document.querySelector(".contentLi");
        
        
        //data[num].status = "done";
        li.setAttribute("class","changeDone");
        
        console.log(li);
    };
});
