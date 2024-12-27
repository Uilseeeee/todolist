// Document.getElementsByClassName('add-text').addEventListener('click', function () {
//     Document.getElementById('todo').style.display = 'block';
// });

const modalContainerEl = document.getElementById("modal")
const optionsEl = document.getElementById("test")

const addTask = () => {
    console.log("ehellee");
    
  modalContainerEl.appendChild(optionsEl);
  optionsEl.style.display = "block"
  optionsEl.style.background = "red"

  console.log("duuslaa");
  
}