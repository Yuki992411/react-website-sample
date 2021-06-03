import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap';
import BuildEnvCard from './BuildEnvCard';
import ScrollTop from './ScrollTop';

function BuildEnv({
  _title,
  _bgcolor,
  _sections
}) {
  const section_map = (array) => {
    const mapped_array = array.map((output, index) => {
      output._index = index;
      return <BuildEnvCard key={index.toString()} {...output}/>;
    });
    return mapped_array
  }

  useEffect(() => {
    window.scrollTo(
    {
      top: 0,
      left: 0,
      behavior: "instant"
    }
    );
  }, [])

  return (
    <div style={{backgroundColor: _bgcolor}}>
      <h1 className={'text-center'}>{_title}</h1>
      <Container>
        <div className={'text-end mb-sm-4'}>
          <Link to='/'>
            <Button variant="outline-dark">
              Home
            </Button>
          </Link>
        </div>
        {section_map(_sections)}
        <ScrollTop />
      </Container>
    </div>
  )
}

export default BuildEnv
