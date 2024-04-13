import { useForm } from "react-hook-form";
import { UserLoginForm } from "../types";

function LoginPage() {
  const initialValues: UserLoginForm = {
    email: "",
    password: "",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const handleLogin = (formData: UserLoginForm) => {};
  return (
    <div className="max-w-md w-full mx-auto shadow-sm border-gray-300 border rounded-lg p-10">
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="space-y-8 p-10 bg-white"
        noValidate
      >
        <div className="flex flex-col gap-5">
          <label className="font-normal text-2xl">Email</label>

          <input
            id="email"
            type="email"
            placeholder="Email de Registro"
            className="w-full p-3  border-gray-300 border"
            {...register("email", {
              required: "El Email es obligatorio",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "E-mail no válido",
              },
            })}
          />
        </div>

        <div className="flex flex-col gap-5">
          <label className="font-normal text-2xl">Password</label>

          <input
            type="password"
            placeholder="Password de Registro"
            className="w-full p-3  border-gray-300 border"
            {...register("password", {
              required: "El Password es obligatorio",
            })}
          />
        </div>

        <input
          type="submit"
          value="Iniciar Sesión"
          className="bg-sky-600 hover:bg-sky-700 w-full p-3  text-white font-black  text-xl cursor-pointer"
        />
      </form>

      <div className="flex flex-col gap-5 justify-center items-center">
        <p>
          doesn't have an account?{" "}
          <span className="text-sky-600 font-bold">Reguister</span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
