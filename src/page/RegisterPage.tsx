import { useForm } from "react-hook-form";
import { UserRegisterForm } from "../types/index";
import ErrorMessage from "../components/ErrorMessage";
import { useMutation } from "@tanstack/react-query";
import { createUser } from "../api/authUser";

export default function RegisterView() {
  const initialValues: UserRegisterForm = {
    username: "",
    fullname: "",
    email: "",
    password: "",
    password_confirmation: "",
  };

  const {
    register,
    handleSubmit,
    watch,

    formState: { errors },
  } = useForm<UserRegisterForm>({ defaultValues: initialValues });

  const password = watch("password");

  const { mutate } = useMutation({
    mutationFn: createUser,
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const handleRegister = handleSubmit((formData) => {
    mutate(formData);
  });

  return (
    <>
      <div className="max-w-md w-full mx-auto shadow-sm border-gray-300 border rounded-lg">
        <section className="bg-gray-300 p-10 text-center">
          <h1 className="text-5xl font-black text-white">Crear Cuenta</h1>
          <p className="text-2xl font-light text-white mt-5">
            Llena el formulario para {""}
            <span className="font-bold"> crear tu cuenta</span>
          </p>
        </section>

        <form
          onSubmit={handleRegister}
          className="space-y-8 p-10  bg-white mt-10"
          noValidate
        >
          <div className="flex flex-col gap-5">
            <label className="font-normal text-2xl" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email de Registro"
              className="w-full p-3  border-gray-300 border"
              {...register("email", {
                required: "El Email de registro es obligatorio",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "E-mail no válido",
                },
              })}
            />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </div>

          <div className="flex flex-col gap-5">
            <label className="font-normal text-2xl">Nombre de usuario</label>
            <input
              type="name"
              placeholder="Nombre de usuario de Registro"
              className="w-full p-3  border-gray-300 border"
              {...register("username", {
                required: "El Nombre de usuario es obligatorio",
              })}
            />
            {errors.username && (
              <ErrorMessage>{errors.username.message}</ErrorMessage>
            )}
          </div>
          <div className="flex flex-col gap-5">
            <label className="font-normal text-2xl">Nombre completo</label>
            <input
              type="name"
              placeholder="Nombre completo de Registro"
              className="w-full p-3  border-gray-300 border"
              {...register("fullname", {
                required: "El Nombre de usuario es obligatorio",
              })}
            />
            {errors.fullname && (
              <ErrorMessage>{errors.fullname.message}</ErrorMessage>
            )}
          </div>

          <div className="flex flex-col gap-5">
            <label className="font-normal text-2xl">Password</label>

            <input
              type="password"
              placeholder="Password de Registro"
              className="w-full p-3  border-gray-300 border"
              {...register("password", {
                required: "El Password es obligatorio",
                minLength: {
                  value: 8,
                  message: "El Password debe ser mínimo de 8 caracteres",
                },
              })}
            />
            {errors.password && (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}
          </div>

          <div className="flex flex-col gap-5">
            <label className="font-normal text-2xl">Repetir Password</label>

            <input
              id="password_confirmation"
              type="password"
              placeholder="Repite Password de Registro"
              className="w-full p-3  border-gray-300 border"
              {...register("password_confirmation", {
                required: "Repetir Password es obligatorio",
                validate: (value) =>
                  value === password || "Los Passwords no son iguales",
              })}
            />

            {errors.password_confirmation && (
              <ErrorMessage>
                {errors.password_confirmation.message}
              </ErrorMessage>
            )}
          </div>

          <input
            type="submit"
            value="Registrarme"
            className="bg-sky-600 hover:bg-sky-700 w-full p-3  text-white font-black  text-xl cursor-pointer"
          />
        </form>
        <div className="flex flex-col gap-5 justify-center items-center mb-10">
          <p>
            Ready have an account?{" "}
            <span className="text-sky-600 font-bold">Login</span>
          </p>
        </div>
      </div>
    </>
  );
}
