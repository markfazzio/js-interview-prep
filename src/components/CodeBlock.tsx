import { ReactNode } from "react";

interface CodeBlockProps {
  children: ReactNode;
}

export const CodeBlock = (props: CodeBlockProps) => {
  const { children } = props;

  return <pre className="bg-black mb-3">{children}</pre>;
};
