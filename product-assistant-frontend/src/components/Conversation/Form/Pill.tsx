import { ConversationFormPillProps } from "@/interfaces";

const ConversationFormPill = ({ label, onClick }:ConversationFormPillProps) => {
  return(
    <div
      className="bg-cyan-800 cursor-pointer rounded-full px-5 py-1.5 text-sm font-light duration-300 hover:bg-cyan-900"
      onClick={() => onClick(label)}
    >
      {label}
    </div>
  )
}

export default ConversationFormPill;
