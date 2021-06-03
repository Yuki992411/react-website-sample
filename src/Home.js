import React from 'react'
import { Container } from 'react-bootstrap';
import GroupTable from './GroupTable';
import Content1 from './Content1';
import Content2 from './Content2';
import './Page.css';
import ScrollTop from './ScrollTop';

function Home() {
  return (
    <>
      {/* Title */}
      <div className={'title-props'}>
        <h1>React<br/>Sample</h1>
      </div>
      {/* Contents */}
      <Container className={'bg-white pt-sm-5'}>
        <div className={'mb-sm-5 mx-sm-5'}><GroupTable /></div>
        <div className={'contents-props'}><Content1 /></div>
        <div className={'contents-props'}><Content2 /></div>
        <ScrollTop />
      </Container>
    </>
  )
}

export default Home
