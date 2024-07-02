import { CodeBlock } from "@/components/CodeBlock";
import { SectionContainer } from "@/components/SectionContainer";
import { SectionMainTitle } from "@/components/SectionMainTitle";
import { SectionSubTitle } from "@/components/SectionSubTitle";

export const StringsSection = () => (
  <section className="bg-gray-900 p-5 mb-3" id="strings">
    <SectionContainer>
      <SectionMainTitle label="Strings" />
      <SectionSubTitle label="Basic Usage" />
      <CodeBlock>
        {`
  const myString = 'You never had me. You never had your car!';
  const myStringWithSpaces = 'The buster brought ME back!   ';
  
  myString.includes('car'); // true
  myString.includes('Car'); // false, case-sensitive
  myString.charAt(0); // 'Y'
  myString.toUpperCase(); // 'YOU NEVER HAD ME. YOU NEVER HAD YOUR CAR!'
  myString.startsWith('You'); // true
  myString.startsWith('you'); // false, case-sensitive
  myStringWithSpaces.trim(); // 'The buster brought ME back!'
  myString.replace('car', 'goat'); // 'You never had me. You never had your goat!';

`}
      </CodeBlock>
    </SectionContainer>
  </section>
);
