let myLeads = []

myLeads = JSON.stringify(myLeads)

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEL = document.getElementById("ul-el")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

inputBtn.addEventListener ("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = ""; // clears input field 
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads();
});

function renderLeads() {
let listItems = ""
for (let i = 0; i < myLeads.length; i++) {
    // ulEL.innerHTML += `<li>${myLeads[i]}</li>`;
    /*Another way of writing the above:
    const li = document.createElement("li")
    li.textContent = myLeads[i]
    ulEl.append(li)*/
    listItems += `
    <li>
    <a target= "_blank" href = "${myLeads[i]}">
    ${myLeads[i]}
    </a>
    </li>
    `;
    //"<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
}
ulEL.innerHTML = listItems;
}