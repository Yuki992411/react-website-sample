import React, { useState } from 'react'
import { Container, Table, Form } from 'react-bootstrap';
import './Page.css';

function Content2() {
  const [select, setSelect] = useState(null);

  const handleSelect = (prop_group, is_bold = false) => {
    const basic_style = 'bg-danger text-white content-transition';

    return `${select === prop_group ? basic_style : null}
            ${ is_bold ? 'font-weight-bold' : null}`;
  };

  return (
    <>
      <h2 className="font-weight-bold underline">Content 2 </h2>
      <Container fluid="md">
        {/* Schedule */}
        <div className={"p-2 mb-3 text-center"}>
          <h4>
            Schedule
          </h4>
        </div>

        <div className={"p-2 mb-3"}>
          <div className={"text-end"}>
            <Form inline>
              <Form.Control
                as="select"
                className="my-1 mr-sm-2"
                size="sm"
                custom = {true}
                onChange={(e) => setSelect(e.target.value)}
              >
                <option value={null}>Choose...</option>
                <option value='A'>Group A</option>
                <option value='B'>Group B</option>
                <option value='C'>Group C</option>
                <option value='D'>Group D</option>
              </Form.Control>
            </Form>
          </div>
          <Table bordered size="sm" responsive="sm" className={'text-center'}>
            <thead className={'table-dark'}>
              <tr>
                <th>Month</th>
                <th>Day</th>
                <th>Sections</th>
                <th>Groups</th>
              </tr>
            </thead>
            {/* May */}
            <tbody className={"bg-light"}>
              <tr>
                <td rowSpan="6" className={"align-middle"}>5</td>
                <td rowSpan="2" className={"align-middle"}>17</td>
                <td className={handleSelect('A')}>2-1</td>
                <td className={handleSelect('A')}>A</td>
              </tr>
              <tr>
                <td className={handleSelect('B')}>2-2</td>
                <td className={handleSelect('B')}>B</td>
              </tr>
              <tr>
                <td rowSpan="2" className={"align-middle"}>24</td>
                <td className={handleSelect('C')}>2-3</td>
                <td className={handleSelect('C')}>C</td>
              </tr>
              <tr>
                <td className={handleSelect('D')}>2-4</td>
                <td className={handleSelect('D')}>D</td>
              </tr>
              <tr>
                <td rowSpan="2" className={"align-middle"}>31</td>
                <td className={handleSelect('A', true)}>2-5 ~ 2-6</td>
                <td className={handleSelect('A', true)}>A</td>
              </tr>
              <tr>
                <td className={handleSelect('B')}>2-7</td>
                <td className={handleSelect('B')}>B</td>
              </tr>
            </tbody>
            {/* June */}
            <tbody className={"table-secondary"}>
              <tr>
                <td rowSpan="8" className={"align-middle"}>6</td>
                <td rowSpan="2" className={"align-middle"}>7</td>
                <td className={handleSelect('C')}>3-1</td>
                <td className={handleSelect('C')}>C</td>
              </tr>
              <tr>
                <td className={handleSelect('D')}>3-2</td>
                <td className={handleSelect('D')}>D</td>
              </tr>
              <tr>
                <td rowSpan="2" className={"align-middle"}>14</td>
                <td className={handleSelect('B')}>3-3</td>
                <td className={handleSelect('B')}>B</td>
              </tr>
              <tr>
                <td className={handleSelect('A')}>4-1</td>
                <td className={handleSelect('A')}>A</td>
              </tr>
              <tr>
                <td rowSpan="2" className={"align-middle"}>21</td>
                <td className={handleSelect('C')}>4-2</td>
                <td className={handleSelect('C')}>C</td>
              </tr>
              <tr>
                <td className={handleSelect('D')}>4-3</td>
                <td className={handleSelect('D')}>D</td>
              </tr>
              <tr>
                <td rowSpan="2" className={"align-middle"}>28</td>
                <td className={handleSelect('B', true)}>4-4 ~ 4-5</td>
                <td className={handleSelect('B', true)}>B</td>
              </tr>
              <tr>
                <td className={handleSelect('C')}>4-6</td>
                <td className={handleSelect('C')}>C</td>
              </tr>
            </tbody>
            {/* July */}
            <tbody className={"bg-light"}>
              <tr>
                <td rowSpan="8" className={"align-middle"}>7</td>
                <td rowSpan="2" className={"align-middle"}>5</td>
                <td className={handleSelect('D')}>5-1</td>
                <td className={handleSelect('D')}>D</td>
              </tr>
              <tr>
                <td className={handleSelect('A')}>5-2</td>
                <td className={handleSelect('A')}>A</td>
              </tr>
              <tr>
                <td rowSpan="2" className={"align-middle"}>12</td>
                <td className={handleSelect('B')}>5-3</td>
                <td className={handleSelect('B')}>B</td>
              </tr>
              <tr>
                <td className={handleSelect('C')}>5-4</td>
                <td className={handleSelect('C')}>C</td>
              </tr>
              <tr>
                <td rowSpan="2" className={"align-middle"}>19</td>
                <td className={handleSelect('D')}>6-1</td>
                <td className={handleSelect('D')}>D</td>
              </tr>
              <tr>
                <td className={handleSelect('A')}>6-2</td>
                <td className={handleSelect('A')}>A</td>
              </tr>
              <tr>
                <td rowSpan="2" className={"align-middle"}>26</td>
                <td className={handleSelect('C', true)}>6-3 ~ 6-4</td>
                <td className={handleSelect('C', true)}>C</td>
              </tr>
              <tr>
                <td className={handleSelect('D', true)}>6-5 ~ 6-6</td>
                <td className={handleSelect('D', true)}>D</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </>
  )
}

export default Content2
