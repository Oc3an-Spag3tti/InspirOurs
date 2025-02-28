import { useState } from "react";
import MessageApp from "./MessageApp";
import DiscussionPage from "./DiscussionPage";

export default function App() {
  const [discussionData, setDiscussionData] = useState(null);

  return discussionData ? (
    <DiscussionPage {...discussionData} onBack={() => setDiscussionData(null)} />
  ) : (
    <MessageApp onGoToDiscussion={(user, message, quote) =>
      setDiscussionData({ userName: user, userMessage: message, quote })
    } onGoToUsers={() => setDiscussionData(null)} />
  );
}

