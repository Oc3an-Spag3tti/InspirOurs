import { useEffect, useState } from "react";

export default function UserList({ onGoBack }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await fetch("http://localhost:8080/messages");
      const messages = await response.json();
      const uniqueUsers = [...new Set(messages.map((msg) => msg.userName))];
      setUsers(uniqueUsers);
    };
    fetchMessages();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <button
        onClick={onGoBack}
        className="absolute top-4 left-4 bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300 transition"
      >
        Back
      </button>
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <div className="bg-white shadow-lg p-6 rounded-lg w-96 border">
        {users.length > 0 ? (
          <ul className="list-none">
            {users.map((user, index) => (
              <li key={index} className="p-2 border-b last:border-b-0">
                {user}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No users found</p>
        )}
      </div>
    </div>
  );
}
