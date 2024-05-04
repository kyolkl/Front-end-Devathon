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
          id="incluirnúmero"
          {...register("incluirnúmero")}
        />
        <label htmlFor="incluirnúmero" className="ml-2">
          Incluir número
        </label>
      </div>
    </div>
  );
}

export default GenerateUser;
