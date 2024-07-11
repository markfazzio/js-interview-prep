import {
  CodeBlock,
  SectionContainer,
  SectionDescription,
  SectionMain,
  SectionMainTitle,
  SectionSubTitle,
} from "@markfazzio/docs-ui-components";

export const ValuesSection = () => (
  <SectionMain id="values">
    <SectionContainer>
      <SectionMainTitle label="Values & Variables" />
      <SectionSubTitle label="==/===" />
      <SectionDescription>
        Understanding value equality with and without coercion.
      </SectionDescription>
      <CodeBlock>
        {`
  0 == false; // true
  0 === false; // false
  1 == '1'; // true
  1 === '1'; // false
  null == undefined; // true
  null === undefined; // false
  '0' == false; // true
  '0' === false; // false
  NaN == NaN || NaN === NaN; // false, NaN is not equal to anything, even itself
  [] == [] || [] === []; // false, different object in memory, same as object
  `}
      </CodeBlock>
      <SectionSubTitle label="let/var/const" />
      <SectionDescription>
        <code>var</code> is hoisted and initialized, whereas <code>let</code> is
        hoisted but not initialized.
      </SectionDescription>
      <CodeBlock>
        {`
  let counter = 30;
  if (counter === 30) {
    let counter = 31;
    console.log(counter); // 31
  }
  console.log(counter); // 30 
        `}
      </CodeBlock>
      <SectionSubTitle label="enum" />
      <CodeBlock>
        {`
  enum Color {
    RED, GREEN, BLUE
  }
        `}
      </CodeBlock>
    </SectionContainer>
  </SectionMain>
);
