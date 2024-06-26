type Props = {
  isGenerate: boolean;
};

function GeneratePassword({ isGenerate }: Props) {
  return (
    <article className={`mt-10 ${!isGenerate ? "block" : "hidden"}`}>
      <p>Password type</p>
      {/*seleccionar password number o phrase */}
      <section className="flex gap-5 mt-2">
        <div>
          <input
            type="radio"
            name="passwordOption"
            id="password"
            value="password"
            checked
          />
          <label htmlFor="password" className="ml-2">
            Password
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="passwordOption"
            id="phrase"
            value="phrase"
          />
          <label htmlFor="phrase" className="ml-2">
            Phrase
          </label>
        </div>
      </section>
      {/*Length */}
      <section className="mt-5">
        <p className="mb-5">Options</p>
        {/*(A-Z)*/}
        <div>
          <input
            type="checkbox"
            name="upercase"
            id="upercase"
            aria-label="Mayuscula (A-Z)"
            value="upercase"
          />
          <label htmlFor="upercase" className="ml-2">
            (A-Z)
          </label>
        </div>
        {/*az*/}
        <div>
          <input
            type="checkbox"
            name="lowercase"
            id="lowercase"
            aria-label="Minúsculas (a-z)"
            value="lowercase"
            checked
          />
          <label htmlFor="lowercase" className="ml-2">
            (a-z)
          </label>
        </div>
        <div>
          <input type="checkbox" name="number" id="number" value="number" />
          <label htmlFor="number" className="ml-2">
            (0-9)
          </label>
        </div>
      </section>
    </article>
  );
}

export default GeneratePassword;
