import React from 'react';
import Card from './Card';

const Table = () => {
    return (
        <Card className="container mt-5">
        <table width="100%">
          <thead style={{ padding: "20px" }}>
            <tr>
              <th>#</th>
              <th>ITEM</th>
              <th>DESCRIPTION</th>
              <th>QTY</th>
            </tr>
          </thead>
          <tbody>
            <tr className='tablerow'>
              <td>Emil</td>
              <td>Tobias</td>
              <td>Linus</td>
              <td>Linus</td>
            </tr>
            <tr className='tablerow'>
              <td>16</td>
              <td>14</td>
              <td>10</td>
              <td>10</td>
            </tr>
          </tbody>
        </table>
      </Card>
    );
};

export default Table;