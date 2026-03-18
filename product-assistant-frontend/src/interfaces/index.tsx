import React from "react"

export interface DocumentsFormProps {
  pdf: File | undefined,
}

export interface ConversationFormProps {
  message: string,
}

export interface PageContainerProps {
  children: React.ReactNode;
}
