const listItems = document.querySelectorAll();

document.getElementById("print-info").addEventListener("click", ()=>{
    listItems.forEach((item)=>{
        console.log("------ " + item.textContent + " ------");

        // Parent node
        console.log("Parent node" + item.parentNode.tagName);

        // Child nodes
        item.childNodes.forEach((child) =>{
            if(child.nodeType === 1){ /* used in the DOM to check if a particular node is an element node.*/
                console.log("Child Node: " + child.textContent);
            }
        });

        // Next sibling

        if(item.nextSibling){
            console.log("Next Sibling: " + item.nextSibling.textContent.trim());
        }
        else {
            console.log("No next sibling");
        }

        if(item.previousSibling){
            console.log("Previous Sibling: " + item.previousSibling.textContent.trim());
        }
        else {
            console.log("No previous sibling");
          }
    })
});;