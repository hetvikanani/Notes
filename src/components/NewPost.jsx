import classes from "./NewPost.module.css";

function NewPost(props) {
  //   const submitHandler = (e) => {
  //     e.preventDefault();

  //     console.log(name);
  //   };

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={props.titleChange} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={props.authorChange} />
      </p>
      <p className={classes.actions}>
        <button onClick={props.cancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
