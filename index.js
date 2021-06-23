//Parent element to store card
const taskContainer = document.querySelector(".task__container");


//Global store
let globalStore = [];

const newCard = ({id,imageUrl,taskTitle,taskType,taskDescription,}) => 
`<div class="col-md-4 col-sm-8" id=${id} key=${id}>
<div class="card">
  <div class="card-header d-flex justify-content-end gap-1">
    <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
<button type="button" id=${id} class="btn btn-outline-danger" onclick ="deleteCard.apply(this,arguments)" ><i class="fas fa-trash-alt" id=${id} onclick ="deleteCard.apply(this,arguments)" ></i></button>
  </div>
  <img src="${imageUrl}" class="card-img-top" alt="...">
  <div class="card-body"> 
    <h5 class="card-title">${taskTitle}</h5>
    <p class="card-text">${taskDescription}</p>
    <h5><span class="badge bg-primary float-start">${taskType}</span></h5>
  </div>
  <div class="card-footer text-muted">
    <button type="button" class="btn btn-outline-primary float-end">Open Task</button>
  </div>
</div></div>`;


const loadInitialTaskCards = () => {
  //Access local Storage
  const getInitalData = localStorage.getItem("tasky");
  if(!getInitalData)
    return;

  //Convert Stringified-object to object
  const {cards} = JSON.parse(getInitalData);

  //map around the array to generate HTML card and inject it to DOM
  cards.map((cardObject) => {
    const createNewCard=newCard(cardObject);
    taskContainer.insertAdjacentHTML("beforeend",createNewCard);
    globalStore.push(cardObject);
  });
};


const saveChanges = () => {
	const taskData = {
		id: `${Date.now()}`, //Unique number for card id
		imageUrl: document.getElementById("imageurl").value,
		taskTitle: document.getElementById("tasktitle").value,
		taskType: document.getElementById("tasktype").value,
		taskDescription: document.getElementById("taskdescription").value,
	};
	const createNewCard = newCard(taskData);

	taskContainer.insertAdjacentHTML("beforeend",createNewCard);
  globalStore.push(taskData);

  //Application programming inteface
  //Localstorage -> interface ->programming
  localStorage.setItem("tasky", JSON.stringify({cards: globalStore}));
  //Key(tasky) -> Data

};

const deleteCard = (event) => {
  // id
  if(!event)
  event = window.event;
  const targetID = event.target.id;
  const tagname = event.target.tagName; //Button

  //search the globalStore, remove the object which matches with the id
  const newUpdatedArray = globalStore.filter((cardObject)=> cardObject.id !== targetID);
   globalStore = newUpdatedArray;
   localStorage.setItem("tasky",JSON.stringify({cards:globalStore}));
   //Access DOM to remove them
   if(tagname=== "BUTTON"){
    //task__container
    return taskContainer.removeChild(
    event.target.parentNode.parentNode); //Column
   }

   return taskContainer.removeChild(
   event.target.parentNode.parentNode.parentNode.parentNode);


};

//Issues
//Modal not closing upon adding new card   solved  
//Cards vanished on refreshing ->localstorage (5mb) solved

//Features
//Open Task
//Delete modal Feature Added
//Edit Task

