const cat = {
  talk: "meow meow negga",
  walk() {
    console.log("walking", this.talk);
  },
};

cat.walk();

const dog = { ...cat, talk: "huff huff negga" };

dog.walk();
