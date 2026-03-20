import { ConversationFormPillProps } from "@/interfaces";

const ConversationFormPill = ({ label, onClick }:ConversationFormPillProps) => {
  return(
    <div
      className="bg-linear-to-r from-cyan-600 to-cyan-950 cursor-pointer rounded-full px-5 py-1.5 text-sm font-light duration-300"
      onClick={() => onClick(label)}
    >
      {label}
    </div>
  )
}

export default ConversationFormPill;
