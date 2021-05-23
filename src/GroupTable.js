import React from 'react'
import { Table } from 'react-bootstrap';
import './Page.css';

function GroupTable() {
  return (
    <div className={''}>
      <h3 className="font-weight-bold text-center">Groups </h3>
      <Table striped bordered className={'text-center shadow'}>
        <thead className={'bg-success'}>
          <tr>
            <th className={'table-col-1'}></th>
            <th className={'table-col-2'}>Group A</th>
            <th className={'table-col-2'}>Group B</th>
            <th className={'table-col-2'}>Group C</th>
            <th className={'table-col-2'}>Group D</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>a</th>
            <td>A, B</td>
            <td>C, D</td>
            <td>E, F</td>
            <td>G, H, I</td>
          </tr>
          <tr>
            <th>b</th>
            <td>J, K</td>
            <td>L, M</td>
            <td>N, O</td>
            <td>P, Q</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default GroupTable
