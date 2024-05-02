type Props = {
  isGenerate: boolean;
};

function GenerateUser({ isGenerate }: Props) {
  const initialValue = {
    capitalizar: false,
    incluirnúmero: false,
    lowercase: false,
  };
  return (
    <div className={`mt-10 ${isGenerate ? "block" : "hidden"}`}>
      <p className="mb-2">Opciones</p>
      <div>
        <input type="checkbox" name="capitalizar" id="capitalizar" />
        <label htmlFor="capitalizar" className="ml-2">
          Capitalizar
        </label>
      </div>
      <div>
        <input type="checkbox" name="capitalizar" id="capitalizar" />
        <label htmlFor="lowercase" className="ml-2">
          Capitalizar
        </label>
      </div>
      <div>
        <input type="checkbox" name="incluirnúmero" id="incluirnúmero" />
        <label htmlFor="incluirnúmero" className="ml-2">
          Incluir número
        </label>
      </div>
    </div>
  );
}

export default GenerateUser;
