import { CodeBlock } from "@/components/CodeBlock";
import { SectionContainer } from "@/components/SectionContainer";
import { SectionDescription } from "@/components/SectionDescription";
import { SectionMainTitle } from "@/components/SectionMainTitle";
import { SectionSubTitle } from "@/components/SectionSubTitle";

export const ArraysSection = () => (
  <section className="px-5 py-10 mb-3" id="arrays">
    <SectionContainer>
      <SectionMainTitle label="Arrays" />
      <SectionSubTitle label="Common Methods" />
      <CodeBlock>
        {`
  const brandsArray = ['Mercedes', 'Audi', 'BMW', 'Porsche'];
  const numbersArray = [1, 2, 3, 4, 5];
  const objectsArray = [
    {exterior: 'Nardo Gray', interior: 'Oyster' },
    {exterior: 'Nogaro Blue', interior: 'Black/Blue'},
    {exterior: 'Meteor Gray', interior: 'Stone Gray'}
  ];

  numbersArray.at(2); // 3, gets item at index 2
  brandsArray.concat('Toyota'); // ['Mercedes', 'Audi', 'BMW', 'Porsche', 'Toyota']
  numbersArray.every((element) => element < 6); // true, every element is less than 6
  brandsArray.filter((brand) => brand === 'BMW'); // 'BMW'
  numbersArray.findIndex((element) => element > 3); // 3, returns first index matching condition
  numbersArray.find((element) => element > 3); // 4, returns first value matching condition
  numbersArray.includes(3); // true
  brandsArray.join(', '); // 'Mercedes, Audi, BMW, Porsche'
  numbersArray.map((element) => element * 10); // [10, 20, 30, 40, 50]
  numbersArray.pop(); // 5, returns removed element, modifying original array to [1,2,3,4]
  numbersArray.push(6); // 6, returns the element added, modifying the original array
  numbersArray.some((element) => element % 2 !== 0); // true (at least 1 odd element exists)
  numbersArray.toString(); // '1,2,3,4,5'
        `}
      </CodeBlock>
      <SectionSubTitle label="Instance Methods" />
      <CodeBlock>
        {`
  Array.from('Porsche'); // ['P', 'o', 'r', 's', 'c', 'h', 'e']
  Array.isArray(numbersArray); // true
        `}
      </CodeBlock>
      <SectionSubTitle label="Sorting" />
      <SectionDescription>
        Note: <code>sort()</code> and <code>reverse()</code> mutate the original
        array. Best practice is using spread (<code>[...myArr]</code>) to make a
        copy first.
      </SectionDescription>
      <CodeBlock>
        {`
  const unsortedNumbersArray = [1,3,5,2,4];

  brandsArray.sort(); // ['Audi', 'BMW', 'Mercedes', 'Porsche'], strings default sort is ABC order
  unsortedNumbersArray.sort((a, b) => a - b); // [1,2,3,4,5]
  unsortedNumbersArray.sort((a, b) => b - a); // [5,4,3,2,1]
  unsortedNumbersArray.reverse(); // back to [1,2,3,4,5]
        `}
      </CodeBlock>
      <SectionSubTitle label="Slice/Splice" />
      <SectionDescription>
        Slice returns selected elements in an array as a new array. Selects
        using start and optional end argument (without including last element).
        Negative index counts back from end of array. Avoid using{" "}
        <code>array.splice()</code> as it mutates the original array.
      </SectionDescription>
      <CodeBlock>
        {`
  const numbersArray = [1, 2, 3, 4, 5];

  const arr1 = numbersArray.slice(0,2); // returns [1,2]
  const arr2 = numbersArray.slice(2,3); // returns [3]
  const arr3 = numbersArray.slice(4); // returns [5]
  const arr4 = numbersArray.slice(-3, -1); // returns [3,4]

`}
      </CodeBlock>
      <SectionSubTitle label="Loops" />
      <CodeBlock>
        {`
  for (let value of numbersArray) {
    value++;
    console.log(value); // 2, 3, 4, 5, 6
  }

  for (let key in numbersArray) {
    console.log(key); // 0, 1, 2, 3, 4
  }

  numbersArray.forEach((item) => {
    console.log(item); // 1, 2, 5, 3, 4
  })
        `}
      </CodeBlock>
    </SectionContainer>
  </section>
);
