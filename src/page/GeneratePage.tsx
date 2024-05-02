import { useState } from "react";
import { FormGemerate } from "../components/generate/FormGemerate";

function Generate() {
  const [value, setValue] = useState<string>("");
  return (
    <section className="w-[90%] p-10">
      <div className="w-full h-full flex flex-col justify-center items-center gap-10">
        <h1 className="text-3xl text-gray-600">Generate</h1>
        <p className="text-gray-400 border p-5 w-[80%] text-center">{value}</p>
      </div>
      {/*radio */}

      <FormGemerate setValue={setValue} />
    </section>
  );
}

export default Generate;
