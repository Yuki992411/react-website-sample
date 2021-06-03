import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Container, Collapse, Tab, ListGroup, Row, Col, Button } from 'react-bootstrap';
import { IconContext } from 'react-icons/lib';
import { FcHighPriority, FcInfo } from 'react-icons/fc';
import { RiSignalWifi2Fill, RiExternalLinkLine } from 'react-icons/ri';
import { ShutterButton } from './ShutterButton';
import DLfile from './DLfile';
import { license } from './DLfileData';
import './Page.css';

function Content1() {

  const [open_1, setOpen_1] = useState(false);

  return (
    <>
      <h2 className="fw-bolder underline">Content 1 </h2>
      <Container fluid="md">
        <div className={"p-2 mb-3"}>
          <h4>
            <FcHighPriority/>
            Primary
          </h4>
          <Tab.Container defaultActiveKey="##prog_info1">
            <Row>
              <Col sm={3}>
                <ListGroup>
                  <ListGroup.Item variant="success" action href="##prog_info1">
                    1. what is ?
                  </ListGroup.Item>
                  <ListGroup.Item variant="success" action href="##prog_info2">
                    2. how to use
                  </ListGroup.Item>
                  <ListGroup.Item variant="success" action href="##prog_info3">
                    3. other
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col sm={9}>
                {/* 1 */}
                <Tab.Content>
                  <Tab.Pane eventKey="##prog_info1">
                  <p>
                    This is a contents 1.
                  </p>
                  </Tab.Pane>

                  {/* 2 */}
                  <Tab.Pane eventKey="##prog_info2">
                  <p>
                    Just look and clone my Repos
                    <a href="https://github.com/Yuki992411/react-website-sample">
                      <RiExternalLinkLine/>
                    </a>
                    !
                  </p>
                  </Tab.Pane>

                  {/* 3 */}
                  <Tab.Pane eventKey="##prog_info3">
                  <p>
                    Please issue if you notice something.
                  </p>
                  <p>
                    This website is published under MIT License
                    <DLfile {...license}/>.
                  </p>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>

        <div className={"p-2 mb-3"}>
          <h4>
            <IconContext.Provider value={{ color: '#000' }}>
              <RiSignalWifi2Fill/>
            </IconContext.Provider>
            Page link
          </h4>
          <div className="d-flex justify-content-around">
            <div className="p-2">
              <Link to='/how-to-build'>
                <ShutterButton description='No. 1'/>
              </Link>
            </div>
            <div className="p-2">
              <Link to='/how-to-build'>
                <ShutterButton description='No. 2'/>
              </Link>
            </div>
            <div className="p-2">
              <Link to='/how-to-build'>
                <ShutterButton description='No. 3'/>
              </Link>
            </div>
          </div>
        </div>

        <div className={"p-2 mb-3"}>
          <h4>
            <IconContext.Provider value={{ color: '#000' }}>
              <FcInfo/>
            </IconContext.Provider>
            Information
          </h4>
          <Collapse in={open_1}>
            <div id="example-collapse-text">
              <p>・This is a sample.</p>
              <p>・This is a sample.</p>
              <p>・This is a sample.</p>
              <p>・This is a sample.</p>
              <p>・This is a sample.</p>
            </div>
          </Collapse>
          <span onClick={() => setOpen_1(!open_1)}
            aria-controls="example-collapse-text"
            aria-expanded={open_1}
          >
            {open_1 ? <Button variant="info"> close </Button>
              : <Button variant="outline-info"> learn more </Button>}
          </span>
        </div>
      </Container>
    </>
  )
}

export default Content1
