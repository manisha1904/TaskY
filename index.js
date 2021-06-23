//Parent element to store card
const taskContainer = document.querySelector(".task__container");


//Global store
const globalStore = [];

const newCard = ({id,imageUrl,taskTitle,taskType,taskDescription,}) => 
`<div class="col-md-4 col-sm-8" id=${id}>
<div class="card">
  <div class="card-header d-flex justify-content-end gap-1">
    <button type="button" class="btn btn-outline-success rounded-pill"><i class="fas fa-pencil-alt"></i></button>
<button type="button" class="btn btn-outline-danger rounded-pill"><i class="fas fa-trash-alt"></i></button>
  </div>
  <img src="${imageUrl}" class="card-img-top" alt="...">
  <div class="card-body"> 
    <h5 class="card-title">${taskTitle}</h5>
    <p class="card-text">${taskDescription}</p>
    <h5><span class="badge bg-primary float-start">${taskType}</span></h5>
  </div>
  <div class="card-footer text-muted">
    <button type="button" class="btn btn-outline-primary float-end rounded-pill">Open Task</button>
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

//Issues
//Modal not closing upon adding new card   solved  
//Cards vanished on refreshing ->localstorage (5mb)

//Features
//Open Task
//Delete modal Feature
//Edit Task

