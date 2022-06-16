import React from "react";
import {Image} from "react-bootstrap";
import gif from '../../assets/gifs/rick-astley-never-gonna-give-you-up.gif'

const Joke = () => (
  <div className="d-flex justify-content-center pt-5">
    <Image src={gif} />
  </div>
);

export default Joke;
