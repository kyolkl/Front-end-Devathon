import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import PasswordForm from "./PasswordForm";
import { PasswordFormData } from "../../types";

export default function AddPasswordModal() {
  //obteniendo si el modal esite
  const navitage = useNavigate();
  const location = useLocation();
  const queyParam = new URLSearchParams(location.search);
  const query = queyParam.get("newPassword");
  console.log(query);
  const show = query ? true : false;

  //obteniendo id de los proyectos
  const params = useParams();
  const projectId = params.projectId!;

  const initialValue: PasswordFormData = {
    category: "",
    name: "",
    user: "",
    url: "",
    password: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initialValue });

  const handleFom = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <>
      <Transition appear show={show} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => navitage(location.pathname)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/60" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all p-16">
                  <Dialog.Title as="h3" className="font-black text-4xl  my-5">
                    Nueva Password
                  </Dialog.Title>

                  <p className="text-xl font-bold">
                    Llena el formulario y crea {""}
                    <span className="text-sky-600">una Password</span>
                  </p>
                  <form
                    className=" mt-10 bg-white shadow-lg p-10 round-lg "
                    onSubmit={handleFom}
                    noValidate
                  >
                    <PasswordForm errors={errors} register={register} />
                    <div className="grid grid-cols-2 gap-5">
                      <input
                        type="submit"
                        value="Save"
                        className=" bg-cyan-500 shadow-slate-300 hover:bg-cyan-600 rounded-sm text-white font-semibold text-xl uppercase cursor-pointer transition-colors mt-2"
                      />
                      <button
                        onClick={() => {
                          navitage(location.pathname);
                          reset();
                        }}
                        className=" bg-cyan-500 shadow-slate-300 hover:bg-cyan-600 rounded-sm px-3 py-2 text-white font-semibold text-xl uppercase cursor-pointer transition-colors mt-2"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
