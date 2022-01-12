import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'; //사용하기 위해 import! //'react-router-dom'에 있는 애들


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
        <li><NavLink exact to="/">Home</NavLink></li>  {/*<a>태그를 NavLink컴포넌트로 교체*/} {/* *페이지가 리로드 되지 않도록*/} {/*NavLink컴포넌트->*링크를 클릭하면, html에서 <a>태그에 class="active"속성이 생긴다*/} {/*exact속성 추가*/}
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>

      <Switch>  
        <Route exact path="/"><Home></Home></Route>  
        <Route path="/topics"><Topics></Topics></Route>
        <Route path="/contact"><Contact></Contact></Route>  
        <Route path="/">Not Found</Route>  
      </Switch>
    </div>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter><App /></BrowserRouter> {/*웹 서버 설정에 따라, BrowserRouter 또는 HashRouter 사용*/}
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

//여기부터
/*
-Link(컴포넌트): *'페이지가 리로드 되지 않도록' 구현, 'to'속성 사용
-NavLink(컴포넌트): Link컴포넌트에 기능 더 부가된 것, *링크를 클릭하면, html에서 <a>태그에 'class="active"속성이 생긴다', exact속성을 추가하면, 클릭된 링크의 <a>태그에'만' class="active"속성이 생긴다, class="active"속성을 이용해, 사용자가 어떤 페이지에 있는지 알 수 있다(index.css 함께 사용)
*/
//Link컴포넌트보다 NavLink컴포넌트를 더 많이 쓴다

//HashRouter: BrowserRouter와 다르게 url에 #이 끼어들어 가고, 웹 서버는 # 뒷부분의 주소를 무시함, 하지만 js로 # 뒷부분의 주소를 알 수 있어서 react-router-dom이 url을 읽어서 해당되는 컴포넌트를 보여줄 수 있다?!
//웹 서버 설정이 사용자가 어떤 path로 들어와도 동일한 웹페이지를 서비스할 수 있다면 BrowserRouter 사용, 그럴 수 없다면 HashRouter 사용

