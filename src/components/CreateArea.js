import React from "react";

function CreateArea() {
  return (
    <div>
      <form onSubmit={e=>{e.preventDefault()}}>
        <input name="title" placeholder="Title" />
        <textarea name="content" placeholder="Take a note..." rows="3" />
        <button>+</button>
      </form>
    </div>
  );
}

export default CreateArea;