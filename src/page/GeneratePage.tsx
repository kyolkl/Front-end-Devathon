import { useState } from "react";
import GenerateUser from "../components/generate/GenerateUser";
import GeneratePassword from "../components/generate/GeneratePassword";

function Generate() {
  const [isGenerate, setIsGenerate] = useState<boolean>(false);

  return (
    <section className="w-[90%] p-10">
      <div className="w-full h-full flex flex-col justify-center items-center gap-10">
        <h1 className="text-3xl text-gray-600">Generate</h1>
        <p className="text-gray-400 border p-5 w-[80%] text-center">
          Generate a new password
        </p>
      </div>
      {/*radio */}

      <div className="mt-10 text-xl">
        <p>What do you want to generate?</p>
        <div className="flex mt-2 gap-5 border-b-2 border-gray-300">
          <div>
            <input
              type="radio"
              name="password"
              id="password"
              onClick={() => setIsGenerate(false)}
              checked
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
        <GenerateUser isGenerate={isGenerate} />
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
    </section>
  );
}

export default Generate;
