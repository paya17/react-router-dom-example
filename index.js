import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; //사용하기 위해 import! //'react-router-dom'에 있는 애들


function Home() {  
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}

function Topics() {  
  return (
    <div>
      <h2>Topics</h2>
      Topics...
    </div>
  );
}

function Contact() {  
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}


function App() {  //'App컴포넌트'  //Home,Topics,Contact컴포넌트를 App컴포넌트에 넣기
  return (
    <div>
      <h1>Hello React Router DOM</h1>

      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/topics">Topics</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      <Switch>  {/* *Switch컴포넌트로 Route컴포넌트를 감싸면, path와 일치하는 '첫번째 컴포넌트만' 보여준다*/}
        <Route exact path="/"><Home></Home></Route>  {/* *Route컴포넌트로 감싼 후에 path속성을 지정, exact속성 지정*/} {/* *Route컴포넌트로 감싸면, 사용자가 들어온 url에 따라 거기에 해당되는 컴포넌트만 보여줌!*/}
        <Route path="/topics"><Topics></Topics></Route>
        <Route path="/contact"><Contact></Contact></Route>  {/*사용자가 '/contact'라는 url로 들어오면, Contact컴포넌트를 보여준다*/}
        <Route path="/">Not Found</Route>  {/*사용자가 '없는 주소(/abcd)'로 들어오면, Not Found를 보여준다(Switch와 exact 이용?!)*/}
      </Switch>
    </div>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter><App /></BrowserRouter> {/* *BrowserRouter컴포넌트로 최상위 컴포넌트인 App컴포넌트를 감쌌다*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




//*'react-router-dom'은 '여러 개의 페이지'로 이루어진 애플리케이션을 쉽게 만드는 데 도움을 준다

//react-router-dom을 사용하려면, 먼저 설치해야됨
//routing: 사용자가 어떤 주소로 들어왔을 때, 그 주소에 해당되는 페이지를 사용자에게 보여주는 것
/*
-BrowserRouter(컴포넌트): react-router의 도움을 받고 싶은 컴포넌트의 '최상위 컴포넌트'를 감싸는 래퍼 컴포넌트
-Route(컴포넌트): 'path'속성을 지정해, 사용자가 들어온 path(url)에 해당되는 컴포넌트를 사용자에게 보여준다  (*Route컴포넌트로 감싸면, 사용자가 들어온 url에 따라 거기에 해당되는 컴포넌트만 보여줌!)
-Route의 'exact'속성: 정확하게 path가 일치하는 경우에만 해당되는 컴포넌트를 보여준다
-Switch(컴포넌트): Switch컴포넌트로 Route컴포넌트를 감싸면, path와 일치하는 '첫번째 컴포넌트만' 보여준다
*/ 





