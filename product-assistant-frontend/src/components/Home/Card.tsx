import React from "react"

export interface HomeCardProps {
  icon: React.ReactNode;
  label: string;
  style: string;
}

const HomeCard = ({ icon, label, style }:HomeCardProps) => {
  const baseStyle = `flex items-center w-full gap-2 rounded-xl border px-3 py-3 text-sm ${style}`;

  return(
    <div className={baseStyle}>
      <div>{icon}</div>
      <div>{label}</div>
    </div>
  )
}

export default HomeCard;
