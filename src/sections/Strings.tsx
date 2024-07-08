import { CodeBlock } from "@/components/CodeBlock";
import { SectionContainer } from "@/components/SectionContainer";
import { SectionDescription } from "@/components/SectionDescription";
import { SectionMainTitle } from "@/components/SectionMainTitle";
import { SectionSubTitle } from "@/components/SectionSubTitle";

export const StringsSection = () => (
  <section className="px-5 py-10 mb-3" id="strings">
    <SectionContainer>
      <SectionMainTitle label="Strings" />
      <SectionSubTitle label="Basic Usage" />
      <CodeBlock>
        {`
  const myString = 'You never had me. You never had your car!';
  const myStringWithSpaces = 'The buster brought ME back!   ';
  
  myString.charAt(0); // 'Y'
  myString.concat(' You almost had ME?'); // 'You never had me. You never had your car! You almost had ME?'
  myString.includes('car'); // true
  myString.includes('Car'); // false, case-sensitive
  myString.length; // 41
  myStringWithSpaces.length; // 30, Spaces are counted, trim first
  myString.replace('car', 'goat'); // 'You never had me. You never had your goat!'
  myString.search('car'); // 37, returns the position of the match
  myString.split(' '); // ['You', 'never', 'had', 'me.', 'You', 'never', 'had', 'your', 'car!']
  myString.startsWith('You'); // true
  myString.startsWith('you'); // false, case-sensitive
  myString.substr(0, 9); // 'You never'
  myString.toLowerCase(); // 'you never had me. you never had your car!'
  myString.toUpperCase(); // 'YOU NEVER HAD ME. YOU NEVER HAD YOUR CAR!'
  myStringWithSpaces.trim(); // 'The buster brought ME back!'

`}
      </CodeBlock>
      <SectionSubTitle label="Regex" />
      <SectionDescription>
        The match pattern should be enclosed between slashes <code>/.../</code>.
        Can be used with <code>test()</code>, <code>exec()</code>,{" "}
        <code>match()</code>, <code>matchAll()</code>, <code>search()</code>,{" "}
        <code>replace()</code>, <code>replaceAll()</code>, and{" "}
        <code>split()</code>
      </SectionDescription>
      <CodeBlock>
        {`  
  myString.match(/you/); // ['you', index: 32, input: 'You never had me. You never had your car!', groups: undefined]
  myString.match(/You/g); // ['You', 'You'], 'g' searches globally
  myString.match(/[Yy]ou/g); // ['You', 'You', 'you']
  myString.match(/You|your/g); // ['You', 'You', 'your']
  myString.match(/Yy?our/g); // ['You', 'You', 'your'], cleaner way to do the above line
  myString.replace(/You/g, 'Me'); // 'Me never had me. Me never had your car!'
  myString.search(/you/); // 32, returns position in string
  myString.split(/[aeiou]/).join(''); // 'Y nvr hd m. Y nvr hd yr cr!'
        `}
      </CodeBlock>
    </SectionContainer>
  </section>
);
