import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  console.log(props);
  return (
    <div className={props.class}>
      <h2>{props.name}</h2>
      <img src={props.img} alt={props.imgAlt} />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}
ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      imgAlt="avatar_img"
      tel="+123 456 789"
      email="b@beyonce.com"
      class="style1"
    />
    <Card
      name="Jack Bauer"
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      imgAlt="avatar_img"
      tel="+987 654 321"
      email="b@jack@nowhere.com"
      class="style2"
    />
    <Card
      name="Chuck Norris"
      img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      imgAlt="avatar_img"
      tel="+123 456 789"
      email="gmail@chucknorris.com"
      class="style3"
    />
  </div>,
  document.getElementById("root")
);
