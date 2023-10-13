import Users from "@/components/Users";

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users?page=1");
  const data = await res.json();
  return data.data;
}

async function IndexPage() {
  const users = await fetchUsers();

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl text-center p-6 text-colorText">Usuarios</h1>
      <Users users={users} />
    </div>
  );
}

export default IndexPage;
