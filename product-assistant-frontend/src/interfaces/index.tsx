import React from "react"

export interface ConversationFormPillsProps {
  onClick: (label: string) => void;
}

export interface ConversationFormPillProps {
  label: string;
  onClick: (label: string) => void;
}

export interface ConversationFormProps {
  onSubmit: (params: ConversationFormParamsProps) => void;
}

export interface ConversationFormParamsProps {
  message: string;
}

export interface PageContainerProps {
  children: React.ReactNode;
}
