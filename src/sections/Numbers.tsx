import { CodeBlock } from "@/components/CodeBlock";
import { SectionContainer } from "@/components/SectionContainer";
import { SectionMainTitle } from "@/components/SectionMainTitle";
import { SectionSubTitle } from "@/components/SectionSubTitle";

export const NumbersSection = () => (
  <section className="px-5 py-10 mb-3" id="numbers">
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
  </section>
);
