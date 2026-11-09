document.getElementById("addAction").addEventListener("click", ()=>{

    // div for input
    const actionBox = document.getElementById("actionBox");
    // div where item is going to be added
    const newAction = document.getElementById("actionBox").value;

    // checking that action is not empty
    if (newAction.trim() !== ""){
        // creating a new element and setting its content to the action
        const newActionItem = document.createElement("li");
        newActionItem.innerText = newAction;
        newActionItem.classList.add("itemDeco")

        // creating a remove button, when user click, remove action
        const removeBtn = document.createElement("button");
        removeBtn.innerText = "Remove";
        removeBtn.classList.add("removeButton")
        removeBtn.addEventListener("click", ()=>{
            newActionItem.remove()
        })

        // rendering item onto the screen
        newActionItem.append(removeBtn)
        document.getElementById("actionList").appendChild(newActionItem);

        // reset the input field
        actionBox.value = "";
        actionBox.focus();
    }


})