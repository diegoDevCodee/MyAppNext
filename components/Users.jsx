// Esto es para hacer que mi component no solo sea visual o muestre sino que tambien tenga interactividad, como un onClick
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

function Users({ users }) {
  const router = useRouter();

  return (
    <ul className="flex flex-wrap justify-center items-center gap-4 p-8">
      {users.map((user) => (
        <li
          className=" w-52 h-60 flex flex-col justify-between items-center bg-color3/10 p-6 text-center text-colorText rounded-xl shadow-xl "
          key={user.id}
        >
          <div className="w-28 h-auto">

          <Image
            className="rounded-full cursor-pointer hover:scale-105 transition-all object-cover"
            onClick={() => {
              router.push(`/users/${user.id}`);
            }}
            src={user.avatar}
            alt={user.email}
            width={100}
            height={100}
            quality={100}
            priority={true}
          />
            </div>

          <div className="flex flex-col gap-6 text-sm">
            <h2>
              {user.first_name} {user.last_name}
            </h2>
            <h3>{user.email}</h3>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Users;
