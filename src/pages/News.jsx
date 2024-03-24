import React from 'react'
import './../style/News.scss';
import Layout from "../Layout/Layout";
import NewsCard from '../component/NewsCard/NewsCard';
import PageTitle from '../component/PageTitle/PageTitle';


export default function News() {
  return (
    <Layout>
      <PageTitle title={"News"} />
      <div className="news">

        <NewsCard />
        <NewsCard />
      </div>
    </Layout>
  )
}
