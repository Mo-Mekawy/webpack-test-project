import "./sass/main.scss";
import createPopup from "./components/popup";
import popupImg from "./images/article-07.jpg";

const cat = {
  talk: "meow meow negga",
  walk() {
    console.log("walking", this.talk);
  },
};

cat.walk();

const dog = { ...cat, talk: "huff huff negga" };

dog.walk();

prompt("show image?") ? createPopup(popupImg) : alert("meow");
