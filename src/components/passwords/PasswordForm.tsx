import { FieldErrors, UseFormRegister } from "react-hook-form";
import { PasswordFormData } from "../../types";
import { RiAiGenerate } from "react-icons/ri";
import { GrView } from "react-icons/gr";
import { BiHide } from "react-icons/bi";

import { useState } from "react";
import { generatePasswordForm } from "../../libs/generatePassword";
import ErrorMessage from "../ErrorMessage";
type PasswordFormProps = {
  errors: FieldErrors<PasswordFormData>;
  register: UseFormRegister<PasswordFormData>;
};

export default function PasswordForm({ errors, register }: PasswordFormProps) {
  const [input, setInput] = useState("");
  const [view, setVieq] = useState(false);

  const textField = register("password", { required: true });
  const handlePassword = () => {
    const password = generatePasswordForm();
    setInput(password);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col gap-5">
        <select
          id="category"
          className="w-full p-3  border-gray-300 border mb-5"
          {...register("category", {
            required: "La categoria de la tarea es obligatorio",
          })}
        >
          <option value="">Seleccione una categoria</option>
          <option value="">Categoria 1</option>
          <option value="">Categoria 2</option>
          <option value="">Categoria 3</option>
        </select>
        {errors.category && (
          <ErrorMessage>{errors.category.message}</ErrorMessage>
        )}
      </div>
      <div className="flex flex-col gap-5">
        <label className="font-normal" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="name"
          className="w-full p-3  border-gray-300 border"
          {...register("name", {
            required: "name is reqired",
          })}
        />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
      </div>

      <div className="flex flex-col gap-5 mt-5">
        <label className="font-normal" htmlFor="user">
          Url
        </label>
        <input
          id="url"
          placeholder="name of url"
          className="w-full p-3  border-gray-300 border"
          {...register("url", {
            required: "el url es obligatoria",
          })}
        />
        {errors.user && <ErrorMessage>{errors.user.message}</ErrorMessage>}
      </div>
      <div className="grid grid-cols-2 gap-5 mb-5">
        <div className="flex flex-col gap-5 mt-5">
          <label className="font-normal" htmlFor="url">
            User
          </label>
          <input
            id="user"
            placeholder="user de la web"
            className="w-full p-3  border-gray-300 border"
            {...register("user", {
              required: "La user  es obligatoria",
            })}
          />
          {errors.user && <ErrorMessage>{errors.user.message}</ErrorMessage>}
        </div>

        <div className="flex flex-col gap-5 mt-5">
          <label
            className="font-normal flex items-center gap-3"
            htmlFor="description"
          >
            <p>Password</p>
            <span
              className="bg-gray-300 rounded-full p-2"
              onClick={handlePassword}
            >
              <RiAiGenerate />
            </span>
          </label>
          <div className="flex items-center">
            <input
              id="password"
              type={view ? "text" : "password"}
              placeholder="Descripción de la tarea"
              className="w-full p-3  border-gray-300 border"
              {...textField}
              onChange={(e) => {
                textField.onChange(e);
                handleSubmit(e);
              }}
              value={input}
            />
            <button
              className="bg-gray-300 h-full p-3"
              onClick={() => setVieq(!view)}
            >
              {!view ? <GrView /> : <BiHide />}
            </button>
          </div>
          {errors.url && <ErrorMessage>{errors.url.message}</ErrorMessage>}
        </div>
      </div>
    </>
  );
}
