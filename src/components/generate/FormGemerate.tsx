import { generatePassword } from "../../libs/generatePassword";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import GenerateUser from "../users/GenerateUser";
import GeneratePassword from "../passwords/PasswordGenerator";

export function FormGemerate({ setValue }) {
  const [isGenerate, setIsGenerate] = useState<boolean>(false);
  useEffect(() => {
    setValue("password");
  }, []);

  let initialValue;
  if (isGenerate) {
    initialValue = {
      capitalizar: false,
      incluirnúmero: false,
    };
  } else {
    initialValue = {
      upercase: false,
      symbol: false,
      number: false,
      length: 10,
    };
  }

  const { register, handleSubmit } = useForm({
    defaultValues: initialValue,
  });
  const onSubmit = handleSubmit((config: any) => {
    if (!isGenerate) {
      setValue("password");
    } else {
      setValue(generatePassword(config));
    }
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div className="mt-10 text-xl">
          <p>What do you want to generate?</p>
          <div className="flex mt-2 gap-5 border-b-2 border-gray-300">
            <div>
              <input
                type="radio"
                id="password"
                name="password"
                defaultChecked
                onClick={() => setIsGenerate(false)}
              />
              <label htmlFor="password" className="ml-2">
                Password
              </label>
            </div>
            <div className="mb-5">
              <input
                type="radio"
                name="password"
                id="user"
                onClick={() => setIsGenerate(true)}
              />
              <label htmlFor="password" className="ml-2">
                User
              </label>
            </div>
          </div>
          {/*check */}
          <GenerateUser isGenerate={isGenerate} register={register} />
          <GeneratePassword isGenerate={isGenerate} />
        </div>
        {/*content checkout radio */}
        <div className="flex gap-5 mt-5">
          <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md">
            regenerate password
          </button>
          <button className="bg-gray-500 hover:bg-gray-600 text-white p-2 rounded-md">
            copy password
          </button>
        </div>
      </form>
    </div>
  );
}
