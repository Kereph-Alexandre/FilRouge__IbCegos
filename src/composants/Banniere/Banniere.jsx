import React from "react";
import "./Banniere.css";
import image from "../../assets/illustrationBanniere.jpg";

const Banner = () => {
  return (
    <div className="conteneurBanniere">
      <p className="descriptionBanniere">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        sed justo sit amet tortor venenatis lacinia et sed nulla. Mauris
        molestie sagittis pulvinar. Mauris dignissim purus quis orci iaculis
        varius. Aliquam eu massa in enim viverra cursus ut id leo. Duis sem
        lacus, scelerisque at turpis et, laoreet vulputate elit. Morbi bibendum
        arcu id malesuada interdum. Morbi mattis convallis lectus, in auctor
        nibh feugiat vitae. Fusce sollicitudin leo in nibh luctus fringilla. In
        erat libero, pharetra ut urna non, suscipit congue velit. Maecenas
        vestibulum lacus nec tellus volutpat elementum. Cras in est diam.
        Suspendisse malesuada faucibus risus, sit amet lacinia justo scelerisque
        et. Nulla facilisi. Donec varius est ut iaculis tincidunt.
      </p>
      <img className="imageBanniere" src={image} alt="illustration" />
    </div>
  );
};

export default Banner;
