import { useState, useEffect, useRef } from "react";
import {
  Search,
  Edit2,
  Heart,
  Bell,
  Paperclip,
  Camera,
  Smile,
  Mic,
  ArrowLeft,
} from "lucide-react";
import jason from "../../assets/jason.png";
import amy from "../../assets/amy.png";
import lisa from "../../assets/lisa.png";
import ana from "../../assets/ana.png";
import david from "../../assets/david.png";
import paul from "../../assets/paul.png";
import taylor from "../../assets/taylor.png";
import lisa_roy from "../../assets/lisadp.png";
import { MessageWrapper } from "./MessageWrapper";
import enter from "../../assets/enter.png";
const STORAGE_KEY = "chat_messages";

const CHAT_THREADS = [
  {
    id: 1,
    name: "Lisa Roy",
    msg: "Hi, are you Available Tomorrow?",
    time: "10:35 AM",
    imageUrl: lisa,
  },
  {
    id: 2,
    name: "Jamie Taylor",
    msg: "Nice One. Will Do it tommorow",
    time: "10:35 AM",
    unread: 3,
    imageUrl: taylor,
  },
  {
    id: 3,
    name: "Jason Roy",
    msg: "That's Great. I am Looking forward...",
    time: "10:35 AM",
    imageUrl: jason,
  },
  {
    id: 4,
    name: "Amy Frost",
    msg: "Hi, will you start working on the...",
    time: "10:35 AM",
    imageUrl: amy,
  },
  {
    id: 5,
    name: "Paul Wilson",
    msg: "See you tommorow champ",
    time: "10:35 AM",
    imageUrl: paul,
  },
  {
    id: 6,
    name: "Ana Williams",
    msg: "??",
    time: "10:35 AM",
    unread: 1,
    imageUrl: ana,
  },
];

const SEED_MESSAGES = [
  {
    id: 1,
    text: "Hi David, have you got the project report pdf?",
    isSender: false,
    avatar: lisa_roy,
  },
  { id: 2, text: "NO. I did not get it", isSender: true, avatar: david },
  { id: 3, divider: "Yesterday" },
  {
    id: 4,
    text: "Ok, I will just sent it here. Plz be sure to fill the details by today end of the day.",
    isSender: false,
    avatar: lisa_roy,
  },
  {
    id: 5,
    isFile: true,
    fileName: "project_report.pdf",
    isSender: false,
    avatar: lisa_roy,
  },
  {
    id: 6,
    text: "Ok. Should I send it over email as well after filling the details.",
    isSender: true,
    avatar: david,
    highlighted: true,
  },
  {
    id: 7,
    text: "Ya. I'll be adding more team members to it.",
    isSender: false,
    avatar: lisa_roy,
  },
  { id: 8, text: "OK", isSender: true, avatar: david },
];

const loadMessages = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : SEED_MESSAGES;
  } catch {
    return SEED_MESSAGES;
  }
};

const saveMessages = (msgs) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(msgs));
};

export const ChatPage = () => {
  const [activeThread, setActiveThread] = useState(1);
  const [messages, setMessages] = useState(loadMessages);
  const [input, setInput] = useState("");
  const [mobileView, setMobileView] = useState(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const newMsg = {
      id: Date.now(),
      text: trimmed,
      isSender: true,
      avatar: david,
    };

    const updated = [...messages, newMsg];
    setMessages(updated);
    saveMessages(updated);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleThreadClick = (id) => {
    setActiveThread(id);
    setMobileView(id);
  };

  const activeContact = CHAT_THREADS.find((t) => t.id === activeThread);

  return (
    <main className="flex gap-4 p-6 lg:gap-6 h-screen bg-white overflow-hidden select-none font-sans rounded-2xl ">
      <section
        className={`
          ${mobileView ? "hidden" : "flex"} lg:flex
          w-full lg:w-80 lg:max-w-80 shrink-0
          h-full bg-[#FAFAFA] border border-gray-100 rounded-2xl flex-col overflow-hidden
        `}
      >
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 shrink-0">
              <img
                src={david}
                alt="david"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#FF8600] leading-none">
                David Peters
              </h3>
              <p className="text-[9px] text-gray-500 font-medium mt-0.5">
                Senior Developer
              </p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600 p-1.5 transition-colors">
            <Edit2 className="w-4 h-4" />
          </button>
        </div>

        <div className="px-4 pb-4">
          <div className="relative flex items-center bg-white rounded-2xl py-2 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
            <Search className="w-4 h-4 absolute left-3 text-gray-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search Here..."
              className="w-full pl-9 pr-4 py-1 text-xs placeholder-gray-400 text-gray-700 bg-transparent outline-none"
            />
          </div>
          <div className="mt-4 border border-gray-200/60" />
        </div>

        <div className="flex-1 overflow-y-auto px-4 space-y-1">
          {CHAT_THREADS.map((thread) => (
            <button
              key={thread.id}
              onClick={() => handleThreadClick(thread.id)}
              className={`w-full flex items-center justify-between py-3 px-4 rounded-2xl transition-all text-left ${
                thread.id === activeThread
                  ? "bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100"
                  : "hover:bg-gray-100/50 border border-transparent"
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="relative shrink-0">
                  <div className="w-11 h-11 rounded-full overflow-hidden bg-gray-200">
                    <img
                      src={thread.imageUrl}
                      alt={thread.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {thread.id === 2 && (
                    <span className="absolute bottom-0.5 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                  )}
                </div>
                <div className="flex flex-col min-w-0">
                  <h4 className="text-sm font-bold truncate text-[#FF8600]">
                    {thread.name}
                  </h4>
                  <p className="text-[9px] text-gray-400 truncate mt-0.5">
                    {thread.msg}
                  </p>
                </div>
              </div>

              <div
                className={`flex flex-col items-end shrink-0 ml-3 self-stretch py-0.5 ${thread.unread ? "justify-start" : "justify-center"}`}
              >
                <span className="text-[9px] text-gray-400 font-medium">
                  {thread.time}
                </span>
                {thread.unread && (
                  <span className="mt-auto min-w-4 h-4 px-1 rounded-full bg-[#FF8600] text-white font-bold text-[8px] flex items-center justify-center">
                    {thread.unread}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      </section>

      <section
        className={`
          ${mobileView ? "flex" : "hidden"} lg:flex
          flex-1 h-full bg-[#FAFAFA] border border-gray-100 rounded-3xl flex-col overflow-hidden shadow-sm
        `}
      >
        <article className="px-4 lg:px-6 py-5 flex items-center justify-between mx-1.5 border-b border-[#D9D9D9] shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileView(null)}
              className="lg:hidden text-gray-400 hover:text-gray-600 mr-1"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            <div className="relative w-10 h-10 rounded-full  z-40">
              <img
                src={activeContact?.imageUrl ?? lisa_roy}
                alt="contact"
                className="w-full h-full object-center"
              />
              <span className="absolute -bottom-1 -left-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full z-50" />
            </div>
            <h3 className="text-[15px] font-bold text-gray-900">
              {activeContact?.name ?? "Lisa Roy"}
            </h3>
          </div>

          <div className="flex items-center gap-3 lg:gap-4 text-gray-400">
            <button className="hover:text-gray-600 transition-all">
              <Search className="w-5 h-5" />
            </button>
            <button className="hover:text-gray-600 transition-all">
              <Heart className="w-5 h-5" />
            </button>
            <button className="hover:text-gray-600 transition-all">
              <Bell className="w-5 h-5" />
            </button>
          </div>
        </article>

        <div className="flex-1 overflow-y-auto px-4 lg:px-8 py-6 space-y-6">
          {messages.map((msg) =>
            msg.divider ? (
              <div
                key={msg.id}
                className="relative flex items-center justify-center my-2"
              >
                <div className="w-full border-t border-[#D9D9D9]" />
                <span className="relative px-4 text-xs font-medium text-[#D9D9D9] bg-[#FAFAFA]">
                  {msg.divider}
                </span>
                <div className="w-full border-t border-[#D9D9D9]" />
              </div>
            ) : (
              <MessageWrapper
                key={msg.id}
                text={msg.text}
                isSender={msg.isSender}
                avatar={msg.avatar}
                isFile={msg.isFile}
                fileName={msg.fileName}
                highlighted={msg.highlighted}
              />
            ),
          )}
          <div ref={bottomRef} />
        </div>

        <div className="px-2 lg:px-8 pb-4 lg:pb-8 pt-2 shrink-0">
          <div className="bg-[#D9D9D9] p-3 lg:p-4 rounded-2xl flex items-center gap-2 lg:gap-3">
            <div className="flex-1 bg-white rounded-full px-4 lg:px-5 py-2 flex items-center gap-3 shadow-sm overflow-hidden">
              <button className="text-gray-400 hover:text-gray-600 transition-colors shrink-0">
                <Mic className="w-5 h-5" />
              </button>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Write Something..."
                className="flex-1 bg-transparent text-sm outline-none text-gray-700 placeholder-gray-300 min-w-0"
              />
              <div className="flex items-center gap-2 lg:gap-3 text-gray-400 shrink-0">
                <button className="hover:text-gray-600 transition-colors">
                  <Paperclip className="w-4 h-4 lg:w-5 lg:h-5" />
                </button>
                <button className="hover:text-gray-600 transition-colors">
                  <Camera className="w-4 h-4 lg:w-5 lg:h-5" />
                </button>
                <button className="hover:text-gray-600 transition-colors">
                  <Smile className="w-4 h-4 lg:w-5 lg:h-5" />
                </button>
              </div>
            </div>
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="w-8 h-8 rounded-full bg-[#FF8600] text-white flex items-center justify-center shadow-md hover:bg-orange-600 transition-all shrink-0 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <img src={enter} alt="enter" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ChatPage;
