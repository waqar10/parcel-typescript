import * as React from 'react';
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Todo from "./components/todos/Todo";



export default () => {
  return (
    <div>
      <Header />
      <Content />
      <Todo />
      <Footer />
    </div>

  );
};
