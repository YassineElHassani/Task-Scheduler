let name = document.getElementById("name");
let desc = document.getElementById("description");
let type = document.getElementById("select");
let date = document.getElementById("date");

function addTasks() {
    if(name.value != "" && desc.value != ""  && type.value != "" && date.value != "") {
        let tableBody = document.getElementById("task-list");
        
        let color = ""
        if(type.value == "To Do") {
            color = "#0369a1";
        } else if(type.value == "Doing") {
            color = "#ca8a04";
        } else {
            color = "#22c55e";
        }

        tableBody.innerHTML += `
        <tr class="border-solid">
            <td class="px-6 py-3">${name.value}</td>
            <td class="px-6 py-3">${desc.value}</td>
            <td class="px-6 py-3 text-[${color}] rounded-b-[5px] rounded-t-[5px]">${type.value}</td>
            <td class="px-6 py-3">${date.value}</td>
            <td class="flex flex items-center gap-[10px] border-solid px-6 py-3">
                <button onclick="updateTasks(event)" class="flex items-center justify-center w-[30px] h-[30px]"><img src="./Assest/images/edit.png" class="w-[20px] h-[20px]"></button>
                <button onclick="deleteTask(event)" class="flex items-center justify-center w-[30px] h-[30px]"><img src="./Assest/images/trash.png" class="w-[20px] h-[20px]"></button>
            </td>
        </tr>
        `
    } else {
        alert("Please fill the form first!");
    }

    document.getElementById("form-tasks").reset();
}

let tr;
function updateTasks(event) {
    tr = event.currentTarget.parentElement.parentElement;
    
    name.value = tr.getElementsByTagName("td")[0].textContent;
    desc.value = tr.getElementsByTagName("td")[1].textContent;
    type.value = tr.getElementsByTagName("td")[2].textContent;
    date.value = tr.getElementsByTagName("td")[3].textContent;
    let editButton=document.getElementById("Submit");
    editButton.textContent="Save";
    editButton.setAttribute("onclick","saveTasks()");
}

function saveTasks() {
    tr.getElementsByTagName("td")[0].textContent = name.value;
    tr.getElementsByTagName("td")[1].textContent = desc.value;
    tr.getElementsByTagName("td")[2].textContent = type.value;
    tr.getElementsByTagName("td")[3].textContent = date.value;
    let editButton=document.getElementById("Submit");
    editButton.textContent = "Add Task";

    document.getElementById("form-tasks").reset();
    editButton.setAttribute("onclick","addTasks()");
}

function deleteTask(event) {
    let tr_delete = event.currentTarget.parentElement.parentElement;
    tr_delete.innerHTML = "";
}