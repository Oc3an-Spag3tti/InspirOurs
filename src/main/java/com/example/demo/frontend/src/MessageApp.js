import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function MessageApp({ onGoToDiscussion }) {
  const [userName, setUserName] = useState("");
  const [messageText, setMessageText] = useState("");
  const [quote, setQuote] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "40px";
      textareaRef.current.style.height =
        Math.min(textareaRef.current.scrollHeight, 200) + "px";
    }
  }, [messageText]);

  const sendMessage = async () => {
    if (!userName || !messageText) return;

    await fetch("http://localhost:8080/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userName, messageText }),
    });

    const quoteResponse = await fetch("http://localhost:8080/random-quote");
    const quoteText = await quoteResponse.text();
    setQuote(quoteText);
    setSubmitted(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4">
      {submitted ? (
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-xl font-bold italic text-gray-800 p-4"
          >
            {quote}
          </motion.div>
          <motion.button
            onClick={() => onGoToDiscussion(userName, messageText, quote)}
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Go to discussion
          </motion.button>
        </div>
      ) : (
        <div className="flex flex-col items-center w-full max-w-sm">
          <input
            type="text"
            placeholder="Your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full text-center border-b-2 border-gray-400 focus:outline-none focus:border-black p-2 mb-4 text-lg placeholder-gray-500"
          />
          <textarea
            ref={textareaRef}
            placeholder="Your message"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            className="w-full text-center border-b-2 border-gray-400 focus:outline-none focus:border-black p-2 text-lg placeholder-gray-500 resize-none overflow-hidden"
            rows="1"
            style={{ minHeight: "40px", maxHeight: "200px" }}
          />
          <button
            onClick={sendMessage}
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition mt-4"
          >
            Send
          </button>
        </div>
      )}
    </div>
  );
}
