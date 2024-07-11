import {
  CodeBlock,
  SectionContainer,
  SectionMain,
  SectionMainTitle,
  SectionSubTitle,
} from "@markfazzio/docs-ui-components";

export const NumbersSection = () => (
  <SectionMain id="numbers">
    <SectionContainer>
      <SectionMainTitle label="Numbers" />
      <SectionSubTitle label="Math Operations" />
      <CodeBlock>
        {`
  const myNumber = 1.23;
  const myNumberArray = [1, 3, 2];
  Math.ceil(myNumber); // 2
  Math.floor(myNumber); // 1
  Math.floor(Math.random() * 10) + 1; // returns random integer from 1-10
  Math.max(myNumberArray); // 3
  Math.min(myNumberArray); // 1

`}
      </CodeBlock>
    </SectionContainer>
  </SectionMain>
);
