import {
  CodeBlock,
  SectionContainer,
  SectionDescription,
  SectionMain,
  SectionMainTitle,
  SectionSubTitle,
} from "@markfazzio/docs-ui-components";

export const SetsSection = () => (
  <SectionMain id="sets">
    <SectionContainer>
      <SectionMainTitle label="Sets" />
      <SectionSubTitle label="Common Methods" />
      <SectionDescription>Set values are unique.</SectionDescription>
      <CodeBlock>
        {`
  [...new Set([1, 2, 4, 4, 3])]; // [1, 2, 4, 3]
        `}
      </CodeBlock>
    </SectionContainer>
  </SectionMain>
);
