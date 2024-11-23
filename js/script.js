//get total
//create Product
//save localStorage
//clear input
//read
//count
//delete
//updata
//search
//clean data
let input=document.getElementsByTagName("input");
let title=document.getElementById("title");
let Price=document.getElementById("price");
let taxes=document.getElementById("taxes");
let ads=document.getElementById("ads");
let discount=document.getElementById("discount");
let total=document.getElementById("total");
let count=document.getElementById("count");
let category=document.getElementById("category");
let submit=document.getElementById("submit");
//func price
let arr=[];

let temp;
let mood='create';
if(localStorage.tasks != null){
    
    arr=JSON.parse(localStorage.tasks);
    
}

console.log(title,Price,taxes,ads,discount,total,count,category,submit)


function getPrice(){
    if(Price.value!==""){
        let result=+Price.value+ +taxes.value + +ads.value - +discount.value;
        total.innerHTML=result;
        total.style.backgroundColor="#040";
    }
    else{
        total.innerHTML="";
        total.style.backgroundColor="#a00d02";
    }

}



//create



/*************************** */

//clear input

function clearinput(){

 for(let j=0;j<input.length-1;j++){
        input[j].value="";
        total.innerHTML="";
   }

}   




function deleted(index){
    arr.splice(index,1);

    console.log(arr)
    localStorage.tasks=JSON.stringify(arr);
    showData()
  
}

let deleteAll;

let tbody=document.getElementById("tbody");
function showData(){
        
    getPrice();
       let sum='';
       for(let j=0 ; j<arr.length ;j++){
         

         sum +=`

                   <tr>
                        <td>${j}</td>
                        <td>${arr[j].title}</td>
                        <td>${arr[j].Price}</td>
                        <td>${arr[j].taxes}</td>
                        <td>${arr[j].ads}</td>
                        <td>${arr[j].discount}</td>
                        <td>${arr[j].total}</td>
                        <td>${arr[j].category}</td>
                        <td onclick="update(${j})"><button>update</button></td>
                       <td onclick="deleted(${j})"><button>delete</button></td>
                    </tr>
        `
        }   
        

       
      
        deleteAll=document.getElementById("All");
        if(arr.length>0){

           deleteAll.style.display="block";
        }
        else{
            deleteAll.style.display="none";
        }

        tbody.innerHTML=sum;
}



showData();

deleteAll.onclick=function(){
    arr.splice(0);
    localStorage.tasks=JSON.stringify(arr);
    showData()
}


function update(index){
    console.log(index);

    window.scrollTo({
        left:0,
        top:0,
        behavior:"smooth",
    })
    
    title.value=arr[index].title;
    Price.value=arr[index].Price;
    taxes.value=arr[index].taxes;
    ads.value=arr[index].ads;
    category.value=arr[index].category;
    discount.value=arr[index].discount;
    total.value=arr[index].total;
    getPrice();
    mood='update';
   
    count.style.display="none";
    submit.innerHTML="update";
    
       
    
    temp=index;
}

submit.onclick=function (){
    const task={
        title:title.value,
        Price:Price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value,

    };

    if(mood==='create'){
        if(count.value<=1000 && count.value>-1 && title.value!="" &&category.value!="" && Price.value!="  "){
        if(count.value>1 ){
            for(let i=0;i<count.value;i++){

                arr.push(task);  
                localStorage.setItem("tasks", JSON.stringify(arr) );

               

            }
        }
        else{
            arr.push(task);  
            localStorage.setItem("tasks", JSON.stringify(arr) );
        }

        clearinput();
    }
    
   
    }
    else{
        arr[temp]=task;
        mood='create';
        count.style.display="block";
        submit.innerHTML="create";
    }

    showData();




}


let searchmood;
function searchName(id){

    console.log(id);

    let search=document.getElementById("search");
    console.log(search);
    if(id=="searchTitle"){

        searchmood='title';
        search.placeholder="search By Title";
    }
    else{

        searchmood='category';
        search.placeholder="search By Category";
    }

    search.focus();

    search.value="";
    showData();

    

}
let tab;
function search(value){

    tab='';
    for(let j=0;j<arr.length;j++){
    if(searchmood=='title'){
            if((arr[j].title).includes(value.toLowerCase())){

                 tab +=`

                   <tr>
                        <td>${j}</td>
                        <td>${arr[j].title}</td>
                        <td>${arr[j].Price}</td>
                        <td>${arr[j].taxes}</td>
                        <td>${arr[j].ads}</td>
                        <td>${arr[j].discount}</td>
                        <td>${arr[j].total}</td>
                        <td>${arr[j].category}</td>
                        <td onclick="update(${j})"><button>update</button></td>
                       <td onclick="deleted(${j})"><button>delete</button></td>
                    </tr>
                `
               }   

        }
        
    

    
    if(searchmood=='category'){
            if((arr[j].category).includes(value.toLowerCase())){

            tab +=`

                   <tr>
                        <td>${j}</td>
                        <td>${arr[j].title}</td>
                        <td>${arr[j].Price}</td>
                        <td>${arr[j].taxes}</td>
                        <td>${arr[j].ads}</td>
                        <td>${arr[j].discount}</td>
                        <td>${arr[j].total}</td>
                        <td>${arr[j].category}</td>
                        <td onclick="update(${j})"><button>update</button></td>
                       <td onclick="deleted(${j})"><button>delete</button></td>
                    </tr>
        `
        }
    }
    
 }
        
        tbody.innerHTML=tab;  

        
        

        
    

   

}

