import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';  //삭제->index.js에 App컴포넌트를 직접 구현할 것이기 때문
import reportWebVitals from './reportWebVitals';


function Home() {  //Home컴포넌트
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}

function Topics() {  //Topics컴포넌트
  return (
    <div>
      <h2>Topics</h2>
      Topics...
    </div>
  );
}

function Contact() {  //Contact컴포넌트
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}


function App() {  //'App컴포넌트' (->index.js에 직접 구현)
  return (
    <div>
      <h1>Hello React Router DOM</h1>
      <Home></Home>  {/*Home,Topics,Contact컴포넌트를 App컴포넌트에 넣기*/}
      <Topics></Topics>
      <Contact></Contact>
    </div>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




//*'react-router-dom'은 '여러 개의 페이지'로 이루어진 애플리케이션을 쉽게 만드는 데 도움을 준다








