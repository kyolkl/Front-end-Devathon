type Props = {
  isGenerate: boolean;
};

function GenerateUser({ isGenerate, register }: Props) {
  return (
    <div className={`mt-10 ${isGenerate ? "block" : "hidden"}`}>
      <p className="mb-2">Opciones</p>
      <div>
        <input type="checkbox" id="capitalizar" {...register("capitalizar")} />
        <label htmlFor="lowercase" className="ml-2">
          Capitalizar
        </label>
      </div>
      <div>
        <input
          type="checkbox"
          id="incluirnumero"
          {...register("incluirnumero")}
        />
        <label htmlFor="incluirnumero" className="ml-2">
          Incluir número
        </label>
      </div>
    </div>
  );
}

export default GenerateUser;
