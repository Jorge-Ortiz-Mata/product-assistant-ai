import React from "react"

export interface ProductInfoProps {
  product: ProductProps;
}

export interface ConversationProductProps {
  product: undefined | ProductProps;
}

export interface ProductPriceProps {
  amount: string;
  name: string;
}

export interface ProductProps {
  id: string;
  name: string;
  category: string;
  shortSummary: string;
  summary: string;
  prices_list: ProductPriceProps[];
  specifications: string[];
  highlights: string[];
}

export interface ConversationFormPillsProps {
  onClick: (label: string) => void;
}

export interface ConversationFormPillProps {
  label: string;
  onClick: (label: string) => void;
}

export interface ConversationFormProps {
  handleAIResponse: (data: string) => void;
}

export interface ConversationFormParamsProps {
  message: string;
}

export interface PageContainerProps {
  children: React.ReactNode;
}
