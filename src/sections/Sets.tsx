import { CodeBlock } from "@/components/CodeBlock";
import { SectionContainer } from "@/components/SectionContainer";
import { SectionDescription } from "@/components/SectionDescription";
import { SectionMainTitle } from "@/components/SectionMainTitle";
import { SectionSubTitle } from "@/components/SectionSubTitle";

export const SetsSection = () => (
  <section className="px-5 py-10 mb-3" id="sets">
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
