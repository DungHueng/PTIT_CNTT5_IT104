import {useMemo} from 'react'

type User = {
  id: number,
  name: string,
  age: number
}

export default function UserList() {
  const users: User[] = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
    { id: 3, name: 'Alice Johnson', age: 28 }
  ]
  const userList = useMemo(() => {
    return users.filter((user) => user.age > 18)
  }, [users])

  return (
    <div>
     <h2>Người trên 18 tuổi</h2>
     {userList.map((item,index)=>(<li key={index}>Id: {item.id}, Tên: {item.name}, Tuổi: {item.age}</li>))}
    </div>
  )
}