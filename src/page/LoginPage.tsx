import { useForm } from "react-hook-form";
import { UserLoginForm } from "../types";
import { getUser } from "../api/authUser";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

function LoginPage() {
  const initialValues: UserLoginForm = {
    email: "",
    password: "",
  };
  const { register, handleSubmit } = useForm({ defaultValues: initialValues });
  getUser();
  const handleLogin = (formData: UserLoginForm) => {};
  return (
    <div className="max-w-md w-full mx-auto shadow-sm border-gray-300 border rounded-lg bg-white">
      <section className="bg-gray-300 p-10 text-center grid place-content-center">
        <Logo />
      </section>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="space-y-8 p-10"
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

      <div className="flex flex-col gap-5 justify-center items-center mb-10">
        <p>
          doesn't have an account?{" "}
          <Link to="/register" className="text-sky-600 font-bold">
            Reguister
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
