import { CodeBlock } from "@/components/CodeBlock";
import { SectionContainer } from "@/components/SectionContainer";
import { SectionDescription } from "@/components/SectionDescription";
import { SectionMainTitle } from "@/components/SectionMainTitle";
import { SectionSubTitle } from "@/components/SectionSubTitle";

export const ArraysSection = () => (
  <section className="bg-gray-900 p-5 mb-3" id="arrays">
    <SectionContainer>
      <SectionMainTitle label="Arrays" />
      <SectionSubTitle label="Common Methods" />
      <CodeBlock>
        {`
  const brandsArray = ['Honda', 'Acura', 'BMW', 'Porsche'];
  const numbersArray = [1, 2, 5, 3, 4];

  brandsArray.filter((brand) => brand === 'BMW'); // 'BMW'
  brandsArray.join(', '); // 'Honda, Acura, BMW, Porsche'
  numbersArray.findIndex((element) => element > 3); // 2, returns first index matching condition
  numbersArray.find((element) => element > 3); // 5, returns first value matching condition
  numbersArray.every((element) => element < 6); // true, every element is less than 6
  numbersArray.map((element) => element * 10); // [10, 20, 50, 30, 40]
  numbersArray.some((element) => element % 2 !== 0); // true (at least 1 odd element exists)
        `}
      </CodeBlock>
      <SectionSubTitle label="Checking" />
      <CodeBlock>
        {`
  numbersArray.includes(3); // true
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
  brandsArray.sort(); // ['Acura', 'BMW', 'Honda', 'Porsche'];
  numbersArray.sort((a, b) => a - b); // [1,2,3,4,5]
  numbersArray.sort((a, b) => b - a); // [5,4,3,2,1]
  numbersArray.reverse(); // back to [1,2,3,4,5]
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
