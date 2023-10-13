import Image from "next/image";

async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}

async function UsersPage({ params }) {
  const user = await getUser(params.id);

  return (
    <>
      <section className="bg-color3/10 min-h-screen flex justify-center items-center">
        <div className="bg-color4/10 w-96 h-96 flex flex-col items-center rounded-lg shadow-xl">
          <h1 className="text-4xl text-colorText py-8">User</h1>
          <div className="my-4 w-40 h-auto">
            <Image
              className=" rounded-lg w-full cursor-pointer hover:scale-105 transition-all object-cover"
              src={user.avatar}
              alt={user.email}
              width={100}
              height={100}
              priority={true}
              quality={100}
            />
          </div>
          <div className="flex flex-col gap-4 text-sm items-center pt-4 text-colorText">
            <h2>
              {user.first_name} {user.last_name}
            </h2>
            <h3>{user.email}</h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default UsersPage;
