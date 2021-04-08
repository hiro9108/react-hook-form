import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();

  const demoHandler = (data) => {
    console.log(data);
  };

  // const demoHandler = ({ firstName, lastName, category }) => {
  //   console.log(firstName, lastName, category);
  // };

  return (
    <form onSubmit={handleSubmit(demoHandler)}>
      <input
        {...register("firstName", { required: true, maxLength: 5 })}
        placeholder="First name"
      />
      <input
        {...register("lastName", { required: true })}
        placeholder="Last namesssss"
      />
      <select {...register("category")}>
        <option value="">Select...</option>
        <option value="A">Category A</option>
        <option value="B">Category B</option>
      </select>
      <input type="submit" />
    </form>
  );
}

export default App;
