//Parent element to store card
const taskContainer = document.querySelector(".task__container");
console.log(taskContainer);

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
};