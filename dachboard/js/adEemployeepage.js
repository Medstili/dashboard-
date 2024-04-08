
const employeeBtn = document.querySelector(".emloyee-btn");
const deleteBtn = document.querySelectorAll('.del-button');
const add_page_container=document.querySelector('#add-page-container');
const add_page_box = document.querySelector('.add-page-box');
const lastRef = document.querySelector("#lastRef");
let ref=1;
if (lastRef.innerHTML==5) {
    ref=6
};
console.log(ref);






// addPage link
let link = 'addPage.html';

employeeBtn.addEventListener('click', async (e)=> {
    e.preventDefault( );
    await employeeChange(link);
    add_page_container.classList.add('add-page-container');
    add_page_container.style.display='block' ;
    addPageContentLoaded();
});
async function employeeChange(file) {
    let  data= await fetch(file);
    let dataText =  await data.text();  
    add_page_box.innerHTML=dataText;
};

function addPageContentLoaded() {

    //  form variables //

    const addBtn=document.querySelector('#submit-btn');
    const cancelBtn= document.querySelector('#cancel-btn');
    const deleteBtn = document.querySelectorAll('.del-button');
    const first_name= document.querySelector( "#first-name" );
    const last_name= document.querySelector( "#last-name" );
    const chef =  document.querySelector('#chef');
    const date = document.querySelector('#start-date');
    const atelier = document.querySelector('#atelier');
    const post = document.querySelector('#post');
    const phone_number= document.querySelector( "#phone-number" );
    const contract = document.querySelector('#contract');
    const salary = document.querySelector('#salary');
    const img = document.querySelector( "#image") ;

    // add an event listener to add button //
    addBtn.addEventListener("click",add);
    // add an event listener to cancel button //
    cancelBtn.addEventListener( "click", () => {
        add_page_container.style.display='none' ;
    });
    //  add funtion //
   function add(e) {
    e.preventDefault();
  
    if ( !first_name.value || !last_name.value || !date.value || !post.value || !phone_number.value || !salary.value ) {
        console.log('hello');
        return;
    };
   
    let  fName=first_name.value;
    let lName=last_name.value;  
    let pNum=phone_number.value;
    let atelierName=atelier.value;
    let chefName=chef.value;
    let postName=post.value;
    let startDate=date.value;
    let typeContract=contract.value;
    let employeeSalary=salary.value;
   
            // Create a new row in the table at the service page with input values
           let newRow = document.createElement('tr');
           newRow.innerHTML=` 
            <td>${ref}</td> 
            <td><img src="/images/employee-picture.jpg" alt="employee photo"  class="img"></td> 
            <td>${fName}${lName}</td> 
            <td>${chefName}</td>
            <td>${startDate}</td> 
            <td>${atelierName}/${postName}</td> 
            <td>${pNum}</td> 
            <td>${typeContract}</td> 
            <td>${employeeSalary}$</td>
            <td>
            <button class="del-button"><i class="fa-solid fa-trash-can"></i></button>
            </td>`;
    // increasing the ref variables by one //

        ref++;
    // Append the new row to the table body //
    document.querySelector('.employee-table tbody').appendChild(newRow);

    //  hide the add page when click on the add button after entering the employer data //
    add_page_container.style.display='none' ;

   // add an event listener to delete button //
    document.querySelectorAll('.del-button').forEach(X => {
    X.addEventListener('click', (e)=>{
        e.preventDefault();
        X.parentElement.parentElement.remove();
        ref=1;
   })
    });
    };

    // hide the departement selection  when we click on employeeBtn //
    document.querySelectorAll('.dep').forEach(x=>{
        x.style.display="none";
    })
 
   
  
};

    // add an event listener to delete button //

deleteBtn.forEach(X => {
    X.addEventListener('click', (e)=>{
        e.preventDefault();
        X.parentElement.parentElement.remove();
        ref = 1;
   })
});