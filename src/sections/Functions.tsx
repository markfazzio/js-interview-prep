import { CodeBlock } from "@/components/CodeBlock";
import { SectionContainer } from "@/components/SectionContainer";
import { SectionDescription } from "@/components/SectionDescription";
import { SectionMainTitle } from "@/components/SectionMainTitle";
import { SectionSubTitle } from "@/components/SectionSubTitle";

export const FunctionsSection = () => (
  <section className="bg-gray-900 p-5 mb-3" id="functions">
    <SectionContainer>
      <SectionMainTitle label="Functions" />
      <SectionSubTitle label="Arrow Functions" />
      <SectionDescription>
        Note: cannot be used as constructors
      </SectionDescription>
      <CodeBlock>
        {`
  const myFunction1 = (a, b) => a + b;
  const myFunction2 = a => a * 10; // parens not needed when 1 param
  const myFunction3 = () => {}; // no params
        `}
      </CodeBlock>
      <SectionSubTitle label="Promises" />
      <CodeBlock>
        {`
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
  });
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
  });

  // run 1
  promise1.then((value) => console.log(value)); // 'one'

  // run all
  Promise.all([promise1, promise2]).then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log('Error', error);
  });

  // race (return firstly resolved or rejected)
  Promise.race([promise1, promise2]).then((value) => {
    console.log(value); // 'two' will resolve faster since it is only 100 vs 500
  });
        `}
      </CodeBlock>
      <SectionSubTitle label="Call/Apply/Bind (Call=Comma, Apply=Array)" />
      <SectionDescription>
        Call invokes function with a given value and arguments comma separated.
      </SectionDescription>
      <CodeBlock>
        {`
  const person1 = { firstName: 'Dom' };
  const person2 = { firstName: 'Brian' };

  function invite(greeting) {
    const greetingText = greeting + ", " + this.firstName + " " + this.lastName;
    console.log(greetingText)
  }

  invite.call(person1, 'Dude I almost had you'); // Dude I almost had you, Dom
  invite.call(person2, 'You owe me a 10 second car'); // You owe me a 10 second car, Brian

`}
      </CodeBlock>
      <SectionDescription>
        Apply invokes with value and allows arguments via array.
      </SectionDescription>
      <CodeBlock>
        {`
  const person1 = { firstName: 'Dom' };
  const person2 = { firstName: 'Brian' };

  function invite(greeting) {
    const greetingText = greeting + ", " + this.firstName + " " + this.lastName;
    console.log(greetingText)
  }

  invite.apply(person1, ['Dude I almost had you']); // Dude I almost had you, Dom
  invite.apply(person2, ['You owe me a 10 second car']); // You owe me a 10 second car, Brian

`}
      </CodeBlock>
      <SectionDescription>
        Bind returns new function allowing arguments to be passed through that
      </SectionDescription>
      <CodeBlock>
        {`
  const person1 = { firstName: 'Dom' };
  const person2 = { firstName: 'Brian' };

  function invite(greeting) {
    const greetingText = greeting + ", " + this.firstName + " " + this.lastName;
    console.log(greetingText)
  }

  const talkToDom = invite.bind(person1);
  const talkToBrian = invite.bind(person2);
  talkToDom('Dude I almost had you'); // Dude I almost had you, Dom
  talkToBrian('You owe me a 10 second car'); // You owe me a 10 second car, Brian

`}
      </CodeBlock>

      <SectionSubTitle label="Callbacks" />
      <CodeBlock>
        {`
  function callbackFn(name) {
    console.log('Hello' + name);
  }

  function outerFn(callback) {
    const name = prompt('Please enter your name.');
  }

  outerFn(callbackFn);
        `}
      </CodeBlock>
    </SectionContainer>
  </section>
);
