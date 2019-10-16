import React from "react";
import placeholderPicture from "../../../static/assets/images/bio/692166.jpg";

const About = () => {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + placeholderPicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      <div className="right-column">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sed blandit libero
        volutpat sed cras ornare arcu. Faucibus vitae aliquet nec ullamcorper
        sit amet risus nullam eget. Sed risus ultricies tristique nulla aliquet.
        Habitant morbi tristique senectus et netus. Proin fermentum leo vel orci
        porta non pulvinar. Mi bibendum neque egestas congue quisque egestas
        diam in arcu. Augue mauris augue neque gravida in fermentum et. Vivamus
        arcu felis bibendum ut tristique et egestas quis ipsum. Dui id ornare
        arcu odio ut sem nulla pharetra. A arcu cursus vitae congue. Sit amet
        facilisis magna etiam tempor. Arcu non sodales neque sodales ut. Ac
        tincidunt vitae semper quis lectus nulla. Lacus vel facilisis volutpat
        est velit egestas dui id ornare. Tristique et egestas quis ipsum
        suspendisse. Porttitor rhoncus dolor purus non enim. Elementum nibh
        tellus molestie nunc. Nisl rhoncus mattis rhoncus urna neque viverra.
        Proin sed libero enim sed faucibus turpis in. Luctus venenatis lectus
        magna fringilla urna porttitor rhoncus. Tempus quam pellentesque nec nam
        aliquam sem et tortor. Tempor id eu nisl nunc mi ipsum. Interdum
        consectetur libero id faucibus nisl tincidunt eget. Mattis rhoncus urna
        neque viverra justo. Vitae tortor condimentum lacinia quis vel eros
        donec. Sed viverra tellus in hac. Ut aliquam purus sit amet. Fermentum
        posuere urna nec tincidunt praesent semper feugiat nibh. A condimentum
        vitae sapien pellentesque habitant morbi tristique.
      </div>
    </div>
  );
};

export default About;
