//import Hikes from "./hikes.js";

const commentUI = `<div class="addComment">
  <h2>Add a comment</h2>
  <input type="text" id="commentEntry" />
  <button id="commentSubmit">Comment</button>
  </div>
  <h2>Comments</h2>
  <ul class="comments"></ul>`;

function renderCommentList(element, list) {
    list.forEach(comment => {
        let li = document.createElement("li")
        let string = `${comment.name}: ${comment.content}`
        li.textContent = string;

        element.appendChild(li);
    })
}

// function renderHikeComment(list, element) {
//     list.forEach(comment => {
//         let p = document.createElement("p")
//         let string = `${comment.name}: ${comment.content}`
//         p.textContent = string;

//         element.appendChild(p);
// //     })
// }



class CommentModel {
    constructor(type) {
        this.type = type;
        this.comments = readLS(this.type) || [];
    }


    getComments (q = null) {
        if (q === null) {
          return this.comments;
        } else {
          return this.comments.filter(element => element.name == q)
        }
    }

    addComment(name, comment) {
        const newComment = {
          name: name,
          comment: comment,
          date: new Date()
        };
        this.comments.push(newComment);
        writeLS(this.type, this.comments);
    }
}

function writeLS(key, data) {
    window.localStorage.setItem(key, JSON.stringify(data));
}

function readLS(key) {
    return JSON.parse(window.localStorage.getItem(key));
}


export default class Comments {

  constructor(type, commentElementId) {
    this.type = type;
    this.commentElementId = commentElementId;
    this.model = new CommentModel(this.type);
  }
  
  addSubmitListener(name) {
    document.getElementById('commentSubmit').onclick = () => {
      this.model.addComment(
        name,
        document.getElementById('commentEntry').value
      );
      document.getElementById('commentEntry').value = '';
      this.showCommentList(name);
    };
  }

  showCommentList(q= null) {
    try {
      const parent = document.getElementById(this.commentElementId);
      if (!parent) throw new Error('comment parent not found');
      // check to see if the commentUI code has been added yet
      if (parent.innerHTML === '') {
        parent.innerHTML = commentUI;
      }
      if (q !== null) {
        // looking at one post, show comments and new comment button
        document.querySelector('.addComment').style.display = 'block';
        this.addSubmitListener(q);
      } else {
        // no post name provided, hide comment entry
        document.querySelector('.addComment').style.display = 'none';
      }
      // get the comments from the model
      let comments = this.model.getComments(q);
      if (comments === null) {
        // avoid an error if there are no comments yet.
        comments = [];
      }
      renderCommentList(parent.lastChild, comments);
    } catch (error) {
      console.log(error);
    }
  }
}

