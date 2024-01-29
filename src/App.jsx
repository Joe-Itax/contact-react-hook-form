import { useState } from "react";

import { useForm } from "react-hook-form";

import "./App.css";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    age: 18,
    gender: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: formData });

  const onSubmit = (data) => {
    console.log(data);
    alert(`${data.name} a été enregistré`);
  };

  return (
    <main>
      <h1>Contact Form</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Nom</label>
            <input
              type="text"
              name="nom"
              {...register("name", {
                required: "Ce champ est obligatoire",
              })}
            />
            {errors.name && (
              <span style={{ color: "red" }}>{errors.name?.message}</span>
            )}
          </div>
          <div>
            <label>Telephone</label>
            <input
              type="text"
              name="phone"
              {...register("phone", {
                required: "Ce champ est obligatoire",
                pattern: {
                  value: /^[0-9]{10}$/i,
                  message: "Ce champ n'est pas au bon format",
                },
              })}
            />
            {errors.phone && (
              <span style={{ color: "red" }}>{errors.phone?.message}</span>
            )}
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="email" {...register("email")} />
          </div>
          <div>
            <label>Age</label>
            <input type="number" name="age" {...register("age")} />
          </div>
          <div>
            <label>Genre</label>
            <select {...register("gender")}>
              <option value={"femme"}>Femme</option>
              <option value={"homme"}>Homme</option>
              <option value={"autre"}>Autre</option>
            </select>
          </div>
          <button type="submit">Enregistrer</button>
        </form>
      </div>
    </main>
  );
}
