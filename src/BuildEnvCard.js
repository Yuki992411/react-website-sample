import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import BadgeLink from './BadgeLink';
import './BuildEnvCard.css';

function BuildEnvCard({
  _index,
  _title,
  _account,
  _text,
  _console_title = '',
  _console = null
}) {
  const account_map = (array) => {
    const mapped_array = array.map((output) => {
      return <BadgeLink key={output._badge_link_name.toString()} {...output}/>;
    });
    return mapped_array
  }

  const console_map = (array) => {
    const mapped_array = array.map((output, index) =>
    <div key={index.toString()} className='console-text'>
      {''} {output}<br/>
    </div>
    );
    return mapped_array
  }

  const text_map = (array) => {
    const mapped_array = array.map((output, index) => {
      return(
      <div key={index.toString()}>
        {output}
      </div>
      )
    });
    return mapped_array
  }

  return (
    <div className='build-env-card'>
      <Card className={'shadow-lg border-success mb-3'}>
        <Card.Header>
          <Row>
            <Col sm={7}>
              <h4 className={'time-font'}>{`${_index + 1}. ${_title}`}</h4>
            </Col>
            <Col sm={5}>
              <h6>
                Author: {account_map(_account)}
              </h6>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body className={'text-dark ms-sm-2 me-sm-2'}>
          <Row>
            <Col sm={6}>
              {text_map(_text)}
            </Col>
            <Col sm={6}>
              {_console == null ?
                <></>
                :
                <>
                  <pre className="bg-dark text-white">
                    <code>
  <h6 className={'mt-0 ms-1'}><span className={'bg-secondary text-light'}>{_console_title}</span></h6>
  {console_map(_console)}
                    </code>
                  </pre>
                </>
              }
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  )
}

export default BuildEnvCard
