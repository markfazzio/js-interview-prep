import { ThemeContext, ThemeContextType } from "@/context/ThemeContext";
import { ReactNode, useContext } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  a11yLight,
  agate,
} from "react-syntax-highlighter/dist/cjs/styles/hljs";

interface CodeBlockProps {
  children: ReactNode;
}

export const CodeBlock = (props: CodeBlockProps) => {
  const { children } = props;
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  const highlighterTheme = theme === "light" ? a11yLight : agate;

  return (
    <SyntaxHighlighter
      language="javascript"
      className="mb-3"
      style={highlighterTheme}
    >
      {children}
    </SyntaxHighlighter>
  );
};
