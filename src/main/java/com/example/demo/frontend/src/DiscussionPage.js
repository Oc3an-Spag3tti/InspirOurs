import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function DiscussionPage({ onBack }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch("http://localhost:8080/messages");
        if (!response.ok) {
          throw new Error("Failed to fetch messages");
        }
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    fetchMessages();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("us-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl border border-gray-300">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold text-gray-800 text-center">Discussion</h1>
          <button
            onClick={onBack}
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
          >
            Back
          </button>
        </div>
        <div className="h-96 overflow-y-auto p-4 border border-gray-200 rounded-lg bg-white">
          {Array.isArray(messages) && messages.length > 0 ? (
            messages.map((msg, index) => (
              <motion.div
                key={index}
                className="p-3 my-2 rounded-lg shadow-sm border border-gray-300 bg-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-xs text-gray-500 mb-1">{formatDate(msg.datePosted)}</p>
                <strong className="text-gray-900">{msg.userName}:</strong> <span className="text-gray-700">{msg.messageText}</span>
                {msg.quote && <p className="text-sm text-gray-500 italic mt-1">"{msg.quote}"</p>}
              </motion.div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No messages yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
