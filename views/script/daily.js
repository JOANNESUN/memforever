const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')

draggables.forEach(draggable => {
draggable.addEventListener('dragstart', ()=>{
    draggable.classList.add('dragging')

})
draggable.addEventListener('dragend',()=>{
    draggable.classList.remove('dragging')
})
});

containers.forEach(container=> {
    container.addEventListener('dragover', e =>{
        e. preventDefault() // change the cursor to allow sign only 
        const draggable = document.querySelector('.dragging')
        container.appendChild(draggable)
    })
});

function dragElement (container, y){

    const draggeableE = [container.querySelectorAll('draggable:not(.dragging)')]


}

