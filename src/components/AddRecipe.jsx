import Form from "./Form";
function AddRecipe(props) {
  return (
    <div>
      <h1>Add Your Own Recipe:</h1>
      <Form setToggleFetch={props.setToggleFetch} />
    </div>
  );
}

export default AddRecipe;
