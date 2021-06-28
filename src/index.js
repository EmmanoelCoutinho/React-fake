import Header from './components/header.js';
import Footer from './components/footer.js';

//importing Hooks
import useState from './hooks/useState.js';

function Render() {
  let screen = document.getElementById('screen');

  let test = 0;

  let state = useState(0, 10);

  function incrementMoreOne() {
    console.log(test += 1);
  }

  const Test = `
    <div>
      <h1>${state}</h1>
      <button onclick='incrementMoreOne()'>Testando</button>
    </div>
  `;

  screen.innerHTML = [
    Header,
    Test,
    Footer
  ];
}

setInterval(() => {
  Render();
}, 1000)