// Select all list items (adjust selector as needed)
document.addEventListener("DOMContentLoaded", () => {
    const listItems = document.querySelectorAll("li");

    document.getElementById("print-info").addEventListener("click", () => {
        listItems.forEach((item) => {
            console.log("------ " + item.textContent + " ------");

            // Parent node
            if (item.parentNode) {
                console.log("Parent node: " + item.parentNode.tagName);
            } else {
                console.log("No parent node");
            }

            // Child nodes
            item.childNodes.forEach((child) => {
                if (child.nodeType === 1) {
                    // Only log element nodes
                    console.log("Child Node: " + child.textContent);
                }
            });

            // Next sibling
            if (item.nextSibling) {
                const nextSibling = item.nextSibling.nodeType === 3 ? item.nextSibling.nextSibling : item.nextSibling;
                console.log("Next Sibling: " + (nextSibling ? nextSibling.textContent.trim() : "No next sibling"));
            } else {
                console.log("No next sibling");
            }

            // Previous sibling
            if (item.previousSibling) {
                const prevSibling = item.previousSibling.nodeType === 3 ? item.previousSibling.previousSibling : item.previousSibling;
                console.log("Previous Sibling: " + (prevSibling ? prevSibling.textContent.trim() : "No previous sibling"));
            } else {
                console.log("No previous sibling");
            }
        });
    });
})

