import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

      <HorizontalCardProduct category={"topbonsaitree"} heading={"Top's Bonsai Trees"}/>
      <HorizontalCardProduct category={"popularoftheyear"} heading={"Popular's Of The Year"}/>

      <VerticalCardProduct category={"youngplantsseeding"} heading={"Young Plants/ Seedlings"}/>
      <VerticalCardProduct category={"hornbeamandbeech"} heading={"Hornbeam & Beech Bonsai"}/>
      <VerticalCardProduct category={"jupiter"} heading={"Jupiter Bonsai"}/>
      <VerticalCardProduct category={"maple"} heading={"Maple Bonsai"}/>
      <VerticalCardProduct category={"floweringandfruiting"} heading={"Flowering & Fruiting Bonsai"}/>
      <VerticalCardProduct category={"pine"} heading={"Pine Bonsai"}/>
      <VerticalCardProduct category={"satsuki"} heading={"Satsuki Bonsai"}/>
      <VerticalCardProduct category={"specimen"} heading={"Specimen Bonsai"}/>
    </div>
  )
}

export default Home