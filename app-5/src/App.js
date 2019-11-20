import React, { Component } from "react";
import "./App.css";
import Image from './Image';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image source="https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/15284140_10210025394824914_1352424081570769764_n.jpg?_nc_cat=102&_nc_ohc=SjuUm764pSoAQmdGLFBt8VxTqskFS2xV7shzJmKLvLaTPWyEybCj_r1SQ&_nc_ht=scontent.fphx1-2.fna&oh=d9ef49f027ee2fe436cf1c28a434ec17&oe=5E48DD8D" />
      </div>
    );
  }
}

export default App;
