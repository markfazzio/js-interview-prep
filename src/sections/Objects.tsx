import {
  CodeBlock,
  SectionContainer,
  SectionMain,
  SectionMainTitle,
  SectionSubTitle,
} from "@markfazzio/docs-ui-components";

export const ObjectsSection = () => (
  <SectionMain id="objects">
    <SectionContainer>
      <SectionMainTitle label="Objects" />
      <SectionSubTitle label="Basic Usage" />
      <CodeBlock>
        {`
  const myObject = {
    name: 'Mark',
    favoriteManufacturer: 'Porsche'
  }

  myObject.hasOwnProperty('favoriteManufacturer'); // true
  Object.keys(myObject); // ['name', 'favoriteManufacturer']
  Object.values(myObject); // ['Mark', 'Porsche']
  Object.entries(myObject); // [ ['name', 'Mark'], ['favoriteManufacturer', 'Porsche'] ]
  Object.assign(myObject, { favoriteModel: 'F40' }); // {name: 'Mark', favoriteManufacturer: 'Porsche', favoriteModel: 'F40'}
  Object.freeze(myObject); // top level object properties cannot be changed now
  Object.isFrozen(myObject); // true

`}
      </CodeBlock>
      <SectionSubTitle label="Destructuring" />
      <CodeBlock>
        {`
  const { name, favoriteManufacturer } = myObject;
        `}
      </CodeBlock>
      <SectionSubTitle label="Manipulation" />
      <CodeBlock>
        {`
  delete myObject.age;
  console.log(myObject); // { name: 'Mark' }
        `}
      </CodeBlock>
      <SectionSubTitle label="Merging" />
      <CodeBlock>
        {`
  const objectA = { manufacturer: 'Toyota' };
  const objectB = { model: 'Supra' };
  const finalCar = { ...objectA, ...objectB }; // { manufacturer: 'Toyota', model: 'Supra' }
  const finalCar = Object.assign({}, objectA, objectB); // { manufacturer: 'Toyota', model: 'Supra' }

`}
      </CodeBlock>
    </SectionContainer>
  </SectionMain>
);
