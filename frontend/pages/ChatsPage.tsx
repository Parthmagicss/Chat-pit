import { auth } from "@/firebase";
import { signOut, User } from "firebase/auth";
import { PrettyChatWindow } from "react-chat-engine-pretty";

interface ChatProps {
  user: User;
}

export default function Page(props: ChatProps) {
  return (
    <div style={{ height: "100vh" }}>
      <button
        style={{ position: "absolute", top: "0px", left: "0px" }}
        onClick={() => signOut(auth)}
      >
        Sign Out
      </button>
      <PrettyChatWindow
        projectId="b4eb96a0-2848-4c1c-a12f-498d08d1478f"
        username={props.user.email || ""}
        secret={props.user.uid}
        style={{ height: "100%" }}
      />
    </div>
  );
}