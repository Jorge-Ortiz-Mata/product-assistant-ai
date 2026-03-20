import ConversationFormPill from "./Pill";
import { ConversationFormPillsProps } from "@/interfaces";

const ConversationFormPills = ({ onClick }:ConversationFormPillsProps) => {
  const handleOnClick = (label: string) => onClick(label);
  return(
    <section className="flex items-center gap-5">
      <ConversationFormPill
        onClick={handleOnClick}
        label="Información del nuevo juego de Halo"
      />
      <ConversationFormPill
        onClick={handleOnClick}
        label="Detalles de la consola Juegosfera"
      />
    </section>
  )
}

export default ConversationFormPills;
