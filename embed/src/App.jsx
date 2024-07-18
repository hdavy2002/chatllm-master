import useGetScriptAttributes from "@/hooks/useScriptAttributes";
import useSessionId from "@/hooks/useSessionId";
import useOpenChat from "@/hooks/useOpen";
import Head from "@/components/Head";
import OpenButton from "@/components/OpenButton";
import ChatWindow from "./components/ChatWindow";
import { useEffect } from "react";

export default function App({ containerId }) {
  const { isChatOpen, toggleOpenChat } = useOpenChat();
  const embedSettings = useGetScriptAttributes();
  const sessionId = useSessionId();

  useEffect(() => {
    if (embedSettings.openOnLoad === "on") {
      toggleOpenChat(true);
    }
  }, [embedSettings.loaded]);

  if (!embedSettings.loaded) return null;

  const windowWidth = embedSettings.windowWidth ?? "400px";
  const windowHeight = embedSettings.windowHeight ?? "700px";

  return (
    <>
      <Head />
      <div
        id={containerId}
        className={`${isChatOpen ? "allm-block" : "allm-hidden"}`}
        style={{ width: windowWidth, height: windowHeight }}
      >
        {isChatOpen && (
          <ChatWindow
            closeChat={() => toggleOpenChat(false)}
            settings={embedSettings}
            sessionId={sessionId}
          />
        )}
      </div>
      {!isChatOpen && (
        <div
          id="anything-llm-embed-chat-button-container"
          className="allm-fixed allm-bottom-0 allm-right-0 allm-mb-4 allm-z-50"
        >
          <OpenButton
            settings={embedSettings}
            isOpen={isChatOpen}
            toggleOpen={() => toggleOpenChat(true)}
          />
        </div>
      )}
    </>
  );
}
