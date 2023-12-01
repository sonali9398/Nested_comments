let commentContainer = document.getElementById("comment");

function createInput(){
        let div = document.createElement("div");
        div.setAttribute("class", "comment-details");

        div.innerHTML += `
            <input type="text" placeholder="Enter comment" class="input"/>
            <button class="btn submit">Submit</button>`;
        return div;         
}

function addReply(text){

    let div = document.createElement("div");
    div.setAttribute("class", "all-comment");
    div.innerHTML += `
    <div class="card">
        <span class="text">${text}</span>
        <span class="reply" id="reply">Add reply</span>
    </div>`; 
    return div;        
}
commentContainer.addEventListener("click", function(e) {
    let replyClick = e.target.classList.contains("reply");
    let submitClick = e.target.classList.contains("submit")
    let closeCard = e.target.closest(".all-comment");
    if(replyClick){
        closeCard.appendChild(createInput());
        console.log("reply")
    }
    if (submitClick){
        const commentdetails = e.target.closest(".comment-details");
        if(commentdetails.children[0].value){
            closeCard.appendChild(addReply(commentdetails.children[0].value));
            commentdetails.remove();
            console.log("submit")
        }
    }
});