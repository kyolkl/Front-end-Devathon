function ProfileUser() {
  return (
    <section className="p-5">
      <h1 className="text-2xl font-semibold ">Profie User</h1>
      <div className="mt-10 flex gap-5 items-center">
        <div>
          <p>name: admi</p>
          <p>password: *********</p>
        </div>
        <div className="p-10 bg-sky-400 rounded-full h-2 w-2">
          <p></p>
        </div>
      </div>
    </section>
  );
}

export default ProfileUser;
