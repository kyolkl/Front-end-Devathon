import React from "react";

function RegisterView() {
  return <div>RegisterPage</div>;
}

export default RegisterView;

// import { useForm } from "react-hook-form";
// import { UserRegisterForm } from "../types/index";
// import ErrorMessage from "../components/ErrorMessage";

// export default function RegisterView() {
//   const initialValues: UserRegisterForm = {
//     username: "",
//     fullname: "",
//     email: "",
//     password: "",
//     password_confirmation: "",
//   };

//   const {
//     register,
//     handleSubmit,
//     watch,
//     reset,
//     formState: { errors },
//   } = useForm<UserRegisterForm>({ defaultValues: initialValues });

//   const password = watch("password");

//   const handleRegister = () => {};

//   return (
//     <>
//       <div className="max-w-md w-full mx-auto shadow-sm border-gray-300 border rounded-lg">
//         <section className="bg-gray-300 p-10 text-center">
//           <h1 className="text-5xl font-black text-white">Crear Cuenta</h1>
//           <p className="text-2xl font-light text-white mt-5">
//             Llena el formulario para {""}
//             <span className="font-bold"> crear tu cuenta</span>
//           </p>
//         </section>

//         <form
//           onSubmit={handleSubmit(handleRegister)}
//           className="space-y-8 p-10  bg-white mt-10"
//           noValidate
//         >
//           <div className="flex flex-col gap-5">
//             <label className="font-normal text-2xl" htmlFor="email">
//               Email
//             </label>
//             <input
//               id="email"
//               type="email"
//               placeholder="Email de Registro"
//               className="w-full p-3  border-gray-300 border"
//               {...register("email", {
//                 required: "El Email de registro es obligatorio",
//                 pattern: {
//                   value: /\S+@\S+\.\S+/,
//                   message: "E-mail no válido",
//                 },
//               })}
//             />
//             {errors.email && (
//               <ErrorMessage>{errors.email.message}</ErrorMessage>
//             )}
//           </div>

//           <div className="flex flex-col gap-5">
//             <label className="font-normal text-2xl">Nombre</label>
//             <input
//               type="name"
//               placeholder="Nombre de Registro"
//               className="w-full p-3  border-gray-300 border"
//               {...register("name", {
//                 required: "El Nombre de usuario es obligatorio",
//               })}
//             />
//             {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
//           </div>

//           <div className="flex flex-col gap-5">
//             <label className="font-normal text-2xl">Password</label>

//             <input
//               type="password"
//               placeholder="Password de Registro"
//               className="w-full p-3  border-gray-300 border"
//               {...register("password", {
//                 required: "El Password es obligatorio",
//                 minLength: {
//                   value: 8,
//                   message: "El Password debe ser mínimo de 8 caracteres",
//                 },
//               })}
//             />
//             {errors.password && (
//               <ErrorMessage>{errors.password.message}</ErrorMessage>
//             )}
//           </div>

//           <div className="flex flex-col gap-5">
//             <label className="font-normal text-2xl">Repetir Password</label>

//             <input
//               id="password_confirmation"
//               type="password"
//               placeholder="Repite Password de Registro"
//               className="w-full p-3  border-gray-300 border"
//               {...register("password_confirmation", {
//                 required: "Repetir Password es obligatorio",
//                 validate: (value) =>
//                   value === password || "Los Passwords no son iguales",
//               })}
//             />

//             {errors.password_confirmation && (
//               <ErrorMessage>
//                 {errors.password_confirmation.message}
//               </ErrorMessage>
//             )}
//           </div>

//           <input
//             type="submit"
//             value="Registrarme"
//             className="bg-sky-600 hover:bg-sky-700 w-full p-3  text-white font-black  text-xl cursor-pointer"
//           />
//         </form>
//         <div className="flex flex-col gap-5 justify-center items-center mb-10">
//           <p>
//             Ready have an account?{" "}
//             <span className="text-sky-600 font-bold">Login</span>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }
