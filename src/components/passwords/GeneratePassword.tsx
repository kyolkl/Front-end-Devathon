type Props = {
  isGenerate: boolean;
};

function GeneratePassword({ isGenerate, register }: Props) {
  return (
    <article className={`mt-10 ${!isGenerate ? "block" : "hidden"}`}>
      <p>Password type</p>
      {/*seleccionar password number o phrase */}
      <section className="flex gap-5 mt-2">
        <div>
          <input
            type="radio"
            id="password"
            name="passwordO"
            value="password"
            defaultChecked
          />
          <label className="ml-2">Password</label>
        </div>
        <div>
          <input type="radio" name="passwordO" id="phrase" value="phrase" />
          <label htmlFor="phrase" className="ml-2">
            Phrase
          </label>
        </div>
      </section>
      {/*Length */}
      <section className="mt-5">
        <p className="mb-5">Options</p>
        <div>
          <input
            type="number"
            id="length"
            min="7"
            max="20"
            className="border border-gray-300 rounded-md p-2 w-[50%]"
            {...register("length")}
          />
        </div>
        {/*(A-Z)*/}
        <div>
          <input type="checkbox" id="upercase" {...register("upercase")} />
          <label htmlFor="upercase" className="ml-2">
            (A-Z)
          </label>
        </div>
        {/*az*/}
        <div>
          <input type="checkbox" id="symbol" {...register("symbol")} />
          <label htmlFor="symbol" className="ml-2">
            (!@#$%^&*)
          </label>
        </div>
        <div>
          <input type="checkbox" id="number" {...register("number")} />
          <label htmlFor="number" className="ml-2">
            (0-9)
          </label>
        </div>
      </section>
    </article>
  );
}

export default GeneratePassword;
