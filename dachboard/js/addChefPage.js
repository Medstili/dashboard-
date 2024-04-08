
const chefBtn = document.querySelector(".chef-btn");
const add_page_container=document.querySelector('#add-page-container');
const add_page_box = document.querySelector('.add-page-box');
const departementSelection = document.querySelector('#departementSelection');
const salesMarketing =document.querySelector('.salesMarketing');
const financeAndAccounting =document.querySelector('.financeAndAccounting');
const humanRessource =document.querySelector('.humanRessource');
const informationTechnology =document.querySelector('.informationTechnology');
const supplyChainManagement =document.querySelector('.supplyChainManagement');
const customerService =document.querySelector('.customerService');
const deleteBtn = document.querySelectorAll('.del-button');


// addPage link
let link = 'addPage.html';



chefBtn.addEventListener('click', (e)=> {
    e.preventDefault( );
    chefChange(link);
    add_page_container.classList.add('add-page-container');
    add_page_container.style.display='block' ;
});

async function chefChange (file){
    let  data= await fetch(file);
    let dataText =  await data.text();   
    add_page_box.innerHTML=dataText;
   
    const label = document.querySelector('.chef-label');
    const selectionOption= document.querySelector("#chef");
    const legend = document.querySelector('legend');    
    legend.innerHTML="add chef";
    label.innerHTML='director :';
    selectionOption.innerHTML='<option value="Mr.Rachid">Mr.Rachid</option> <option value="Mr.Mohamed">Mr.Mohamed</option> <option value="Mrs.Fatima">Mrs.Fatima</option> <option value="Mr.Ahmed">Mr.Ahmed</option> <option value="Mr.Yasin">Mr.Yasin</option> <option value="Mrs.youssra">Mrs.youssra</option>';
    document.querySelector('#post').style.display='none';
    const cancelBtn= document.querySelector('#cancel-btn');
    cancelBtn.addEventListener( "click", () => {
        add_page_container.style.display='none' ;
    });

   }

let selectedValue;

departementSelection.addEventListener('change',display);
function display() {
 selectedValue =departementSelection.value;
console.log(selectedValue);
 switch (selectedValue) {
  case 'all':
    salesMarketing.style.display='block';
    financeAndAccounting.style.display='block';
    humanRessource.style.display='block';
    informationTechnology.style.display='block';
    supplyChainManagement.style.display='block';
    customerService.style.display='block';
    break;
    case 'SalesOrMarketing':
    salesMarketing.style.display='block';
    financeAndAccounting.style.display='none';
    humanRessource.style.display='none';
    informationTechnology.style.display='none';
    supplyChainManagement.style.display='none';
    customerService.style.display='none';
    break;
    case 'FinanceAndAccounting':
    financeAndAccounting.style.display='block';
    salesMarketing.style.display='none';
    humanRessource.style.display='none';
    informationTechnology.style.display='none';
    supplyChainManagement.style.display='none';
    customerService.style.display='none';
    break;
    case 'HumanRessource':
    humanRessource.style.display='block';
    salesMarketing.style.display='none';
    financeAndAccounting.style.display='none';
    informationTechnology.style.display='none';
    supplyChainManagement.style.display='none';
    customerService.style.display='none';
    break;
    case 'InformationTechnology':
    informationTechnology.style.display='block';
    salesMarketing.style.display='none';
    financeAndAccounting.style.display='none';  
    humanRessource.style.display='none';
    supplyChainManagement.style.display='none';
    customerService.style.display='none';
    break;
    case  'SupplyChainManagement':
    supplyChainManagement.style.display='block';
    informationTechnology.style.display='none';
    salesMarketing.style.display='none';
    financeAndAccounting.style.display='none';  
    humanRessource.style.display='none';
    customerService.style.display='none';
    break;

    case  'CustomerService':
    customerService.style.display='block';
    informationTechnology.style.display='none';
    salesMarketing.style.display='none';
    financeAndAccounting.style.display='none';  
    humanRessource.style.display='none';
    supplyChainManagement.style.display='none';
    break;

  default:
    console.log('not found');
    break;
}
}



   


   



