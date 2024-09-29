const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask() {
    if (inputBox.value === "") {
        alert("Plese Enter a name!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        document.getElementById("list-container").appendChild(li);
        document.getElementById("list-container").appendChild(li).style.listStyleType = "none";
        var span = document.createElement("span");
        span.innerText = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = '';
    saveData();

}
listContainer.addEventListener("click", function (e) {

    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false)


function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
} 
function hello() {
    document.getElementById("list-container").innerHTML = localStorage.getItem ("data");
    // listContainer.innerHTML = localStorage.getItem("data");
    // alert("hello saabji");
}
hello();