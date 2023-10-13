async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json()
  return data.data
}

async function UsersPage({ params }) {
  const user = await getUser(params.id);
  

  return (
    <div>
      <h2>{user.first_name}</h2>
    </div>
  )
}

export default UsersPage;
