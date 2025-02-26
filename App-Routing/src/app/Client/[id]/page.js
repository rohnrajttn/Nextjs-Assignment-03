export async function generateStaticParams() {
    const Users = await (await fetch(`https://api.github.com/users`)).json()
    console.log(Users)

    return Users.map((user) => ({
      params:{id: user.id,}
    }))
}

export default async function Page({ params }) {
    const {id}=await params;
    return(
        <div>
            Hi from {id} page
        </div>
    )
  }