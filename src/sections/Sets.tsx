import { CodeBlock } from "@/components/CodeBlock";
import { SectionContainer } from "@/components/SectionContainer";
import { SectionDescription } from "@/components/SectionDescription";
import { SectionMainTitle } from "@/components/SectionMainTitle";
import { SectionSubTitle } from "@/components/SectionSubTitle";

export const SetsSection = () => (
  <section className="bg-gray-900 p-5 mb-3" id="sets">
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
  </section>
);
