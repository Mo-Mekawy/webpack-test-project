export default function createPopup(imgUrl) {
  const popUp = document.createElement("div");
  popUp.classList.add("pop-up");

  const img = document.createElement("img");
  img.src = imgUrl;

  popUp.append(img);

  document.body.append(popUp);
  document.body.classList.add("blur");
}
