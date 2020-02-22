import React from "react";
import { Link } from "react-router-dom";
import Img from 'react-image'
import WOW from 'wowjs';

import SearchButton from "../buttons/SearchButton/SearchButton";
import "./AdCard.scss";
import Loading from "../Loading/Loading";
import handleCard from '../CarAds/Ads';

function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const AdCard = (props: any) => {
  return (
    <div className="ad wow jackInTheBox"
    data-wow-delay={`0.5s`}>
      
    {/* <Img src={props.img} unloader={ <Loading/> }/> */}
      <img src={props.img} alt=""/>
      <div className="ad__title"> {props.title}</div> 
      <div className="ad__price">{props.price} $</div>
      <div className="ad__usage">{props.usage}</div>
      <div className="ad__description"> {props.description} </div>
      <div className="ad__button">
        <Link to={props.path}><SearchButton className="button__card" content="More info &rsaquo;" /></Link>
      </div>
    </div>
  );
}


export default AdCard;
