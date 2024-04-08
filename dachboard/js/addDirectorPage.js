
const directoryBtn = document.querySelector(".director-btn");
const deleteBtn = document.querySelectorAll('.del-button');
const add_page_container=document.querySelector('#add-page-container');
const add_page_box = document.querySelector('.add-page-box');


// addPage link
let link = 'addPage.html';

directoryBtn.addEventListener('click', (e)=> {
    e.preventDefault( );
    directoryChange(link);
    add_page_container.classList.add('add-page-container');
    add_page_container.style.display='block' ;
});


async function directoryChange(file) {
    let  data= await fetch(file);
    let dataText =  await data.text();  
    add_page_box.innerHTML=dataText;
    const legend = document.querySelector('legend');    
    const user_job_detail = document.querySelector('.user-job-detaills');
    const cancelBtn= document.querySelector('#cancel-btn');
    cancelBtn.addEventListener( "click", () => {
        add_page_container.style.display='none';
    })
    legend.innerHTML="add directory";
    user_job_detail.innerHTML='<label for="departement">Departement</label> <select name="Departement" id="departement" required> <option value="sales or marketing">sales or marketing</option> <option value="Finance And Accounting">Finance And Accounting</option> <option value="HR(Human Ressource)">HR(Human Ressource)</option> <option value="IT(Information Technology)">IT(Information Technology)</option> <option value="Supply Chain Management">Supply Chain Management</option> <option value="Forensic Accounting">Customer Service</option> </select> <br> <label for="start-date">start date :</label> <input type="date" name="start-date" id="start-date" required> <br> <label for="salary">salary :</label> <input type="text" name="salary" id="salary" required>';
}

deleteBtn.forEach(X => {
    X.addEventListener('click', (e)=>{
        e.preventDefault();
        X.parentElement.parentElement.remove();
   })
})