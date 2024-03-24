import React from "react";
import HeroNav from "../component/HeroNav/HeroNav";
import FeatureProduct from "../component/FeatureProduct/FeatureProduct";
import OurTopic from "../component/OurTopic/OurTropic";
import OurProduct from "../component/OurProduct/OurProduct";
import FeatureTech from "../component/FeatureTech/FeatureTech";
import BottomExperience from "../component/BottomExperience/BottomExperience";
import Layout from "../Layout/Layout";
import Animate from "../component/Animate/Animate";

export default function Home() {
  return (
    <div>
      <Layout>
        <HeroNav />
        <FeatureProduct />
        <OurTopic />
        <OurProduct />
        <FeatureTech />
        <BottomExperience />
      </Layout>
    </div>
  );
}
