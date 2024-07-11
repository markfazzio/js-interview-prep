import {
  CodeBlock,
  SectionContainer,
  SectionDescription,
  SectionMain,
  SectionMainTitle,
  SectionSubTitle,
} from "@markfazzio/docs-ui-components";

export const UtilitiesSection = () => (
  <SectionMain id="utilities">
    <SectionContainer>
      <SectionMainTitle label="Utilities" />
      <SectionSubTitle label="Spread Operator" />
      <CodeBlock>
        {`
  const myArr = [1, 2, 3];
  const myObj = {name: 'Mark', car: '911 Turbo'};
  const allNumbers = [...myArr, 4, 5]; // [1, 2, 3, 4, 5]
  const myProfile = {...myObj, theme: 'dark'} // {name: 'Mark', car: '911 Turbo', theme: 'dark'}
        `}
      </CodeBlock>
      <SectionSubTitle label="setTimeout" />
      <CodeBlock>
        {`
  const myTimeout = setTimeout(() => {
    console.log('Hi after 2 seconds');
  }, 2000);

  const stopTimeout = () => {
    clearTimeout(myTimeout);
  }
        `}
      </CodeBlock>
      <SectionSubTitle label="setInterval" />
      <CodeBlock>
        {`
  const myInterval = setInterval(() => {
    console.log('Hi every 2 seconds');
  }, 2000);

  const stopInterval = () => {
    clearInterval(myInterval);
  }
        `}
      </CodeBlock>
      <SectionSubTitle label="Cookies/Local Storage/Session Storage" />
      <SectionDescription>
        Cookies are available both server and client-side, whereas local and
        session storage are client-side only.
      </SectionDescription>
      <CodeBlock>
        {`
  document.cookie = 'username=Mark; expires=Mon, 10 Apr 2025 12:00:00 UTC';
  document.cookie = 'username=Mark; path=/cards';
  localStorage.setItem('username', 'Mark');
  localStorage.getItem('username');
  localStorage.removeItem('username');
  sessionStorage.setItem('username', 'Mark');
  sessionStorage.getItem('username');
  sessionStorage.removeItem('username');
        `}
      </CodeBlock>
      <SectionSubTitle label="Eval" />
      <SectionDescription>
        This method is not recommended and likely never used. One use-case would
        be to evaluate functions defined in JSON.
      </SectionDescription>
      <CodeBlock>
        {`
  console.log(eval("1 + 2")); // 3
          `}
      </CodeBlock>
      <SectionSubTitle label="Document" />
      <CodeBlock>
        {`
  document.getElementById('title').style.fontSize = '20px';
  document.getElementById('title').className = 'custom-title';
        `}
      </CodeBlock>
      <SectionSubTitle label="Navigator" />
      <CodeBlock>
        {`
  navigator.language; // 'en-US'
  navigator.userAgent; // 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) ... '
  navigator.userAgent.match(/Android/i); // Android
  navigator.userAgent.match(/webOS/i); // webkit
  navigator.userAgent.match(/iPhone/i); // iPhone
  navigator.userAgent.match(/iPad/i); // iPad
        `}
      </CodeBlock>
      <SectionSubTitle label="Window" />
      <CodeBlock>
        {`
  window.location.href; // returns full URL
  window.history.back(); // browser back button
  window.history.forward(); // browser forward button
  window.history.pushState('page2', 'Title', '/page-2'); // add history entry
  window.print(); // print page
        `}
      </CodeBlock>
      <SectionSubTitle label="URLSearchParams" />
      <CodeBlock>
        {`
  const carSearchParams = "make=Porsche&model=911";
  const urlParams = new URLSearchParams(carSearchParams);

  urlParams.append('color', 'blue'); // "make=Porsche&model=911&color=blue"
  urlParams.delete('make'); // "model=911&color=blue"
  urlParams.delete('make', 'Porsche'); // "model=911&color=blue"
  urlParams.get('make'); // 'Porsche'
  urlParams.has('make'); // true
  urlParams.has('make', 'Audi'); // false
  urlParams.set('color', 'black'); // "make=Porsche&model=911&color=black"
  urlParams.size; // 2
  urlParams.toString(); // 'make=Porsche&model=911'
        `}
      </CodeBlock>
      <SectionSubTitle label="Date" />
      <CodeBlock>
        {`
  const today = new Date(); 
        `}
      </CodeBlock>
      <SectionSubTitle label="try/catch" />
      <CodeBlock>
        {`
  try {
    console.log('try');
  } catch (err) {
    console.log(err.name, err.message);
  }
        `}
      </CodeBlock>
      <SectionSubTitle label="typeof" />
      <CodeBlock>
        {`
  const myValue = 'Hello';
  typeof myValue; // 'string'
  typeof myValue === 'string'; // true
  typeof myValue === 'number'; // false
  typeof myValue === 'boolean'; // false
  typeof myValue === 'function'; // false
        `}
      </CodeBlock>
    </SectionContainer>
  </SectionMain>
);
