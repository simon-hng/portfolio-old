import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

const Chat = () => {
  return (
    <section>
      <h2 className="mb-8 text-3xl font-bold text-text">Chat</h2>
      <div className="flex h-12 gap-2">
        <input
          type="text"
          className="w-full rounded-xl border-2 border-text bg-base px-5 py-2 text-text"
        />
        <button className="h-full rounded-xl border-2 border-text px-4">
          <PaperAirplaneIcon className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default Chat;
