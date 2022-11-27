import React, {useState} from "react";

function EditPost({ post, reloadData }) {
    const [newLocation, setNewLocation] = useState(post.location);
    const [newMsg, setNewMsg] = useState(post.body);

    async function onSubmit() {
        const newEdits = {postId: post._id, location: newLocation, body: newMsg};
        const res = await fetch("/editPost", 
            {method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newEdits)});
        const data = await res.json();
        console.log("success: ", data);

        reloadData();
    }

    return (
        <>
<button type="button" className="btn btn-outline-dark btn-sm" data-bs-toggle="modal" data-bs-target="#editModal">
  Edit
</button>
<div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="editModalLabel">Edit Post</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="location-name" class="col-form-label">Location:</label>
            <input onChange={(evt) => setNewLocation(evt.target.value)} type="text" class="form-control" id="location-name" placeholder={post.location}/>
          </div>
          <div class="mb-3">
          <label for="message-text" class="col-form-label">Message:</label>
            <textarea onChange={(evt) => setNewMsg(evt.target.value)} class="form-control" id="message-text" placeholder={post.body}></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="submit" onClick={onSubmit} class="btn btn-primary" data-bs-dismiss="modal">Submit Change</button>
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default EditPost;