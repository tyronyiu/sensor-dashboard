import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import DataTableRow from './DataTableRow';

function DataTable(){

    return(
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Time</th>
          <th>Temperature</th>
          <th>Humidity</th>
          <th>HeatIndex</th>
          <th>DewPoint</th>
          <th>AbsoluteHumidity</th>
        </tr>
      </thead>
      <tbody>
        <DataTableRow/>
      </tbody>
    </Table>
    )

}

export default DataTable;
