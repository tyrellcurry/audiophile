import React, { useState, useEffect } from 'react';

function Home() {
  interface User {
    id: number;
    name: string;
    email: string;
  }

  const [users, setUsers] = useState<User[]>([]);
  
  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
      {users.map(user => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
