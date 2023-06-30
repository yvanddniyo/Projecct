const form = document.getElementById("addForm");
const itemLists = document.getElementById("items");
const filter = document.getElementById("filter");

//form submit event

form.addEventListener("submit", addItems);

// delete event
itemLists.addEventListener("click", removeItem);

filter.addEventListener("keyup", filterItems)
 
// add items funtion

function addItems(e){
 e.preventDefault();
 // get input value

  const newItem = document.getElementById("item").value;

  // create new li element
  
  const li = document.createElement("li");

  // add  class
  li.className = "list-group-item";
  
  // add text node
  li.appendChild(document.createTextNode(newItem));

  // create delete buttton

 const deleteBtn = document.createElement("button");
 
//  add class to the new items

deleteBtn.className = "btn btn-danger btn-sm float-right delete";

//  append text node

deleteBtn.appendChild(document.createTextNode("x"));

// append button to li

li.appendChild(deleteBtn);

// append li to list


  itemLists.appendChild(li);
  
}
function removeItem(e){
   if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure ?")){
      const li = e.target.parentElement;
      itemLists.removeChild(li);
    }
   }
}
// filter

function  filterItems(e){
  
   const text = e.target.value.toLowerCase();
    // get list

    const items = itemLists.getElementsByTagName("li");

    // convert to array

    Array.from(items).forEach(function(item){
     const itemName = item.firstChild.textContent;
      if (itemName.toLowerCase().indexOf(text)  !=-1){
        item.style.display = "block";
      }
      else{
        item.style.display = "none";
      }
    })
}







