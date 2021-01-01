import { useQuery, gql } from '@apollo/client';
import moment from 'moment';
const getData = gql`
  query allData{
    allData{
      time
      temperature
      humidity
      heatIndex
      dewPoint
      absoluteHumidity
    }
  }
`;


function DataTableRow() {
const { loading, error, data } = useQuery(getData);

  if (loading) return <tr><td>Loading...</td></tr>;
  if (error) return <tr><td>Error :(</td></tr>;
    return data.allData.map(({ time, temperature, humidity, heatIndex, dewPoint, absoluteHumidity}) => (
        <tr key={time}>
          <td>{moment.unix(time).utc().format("MM/DD/YYYY HH:mm:ss")}</td>
          <td>{temperature}</td>
          <td>{humidity}</td>
          <td>{heatIndex}</td>
          <td>{dewPoint}</td>
          <td>{absoluteHumidity}</td>
        </tr>
    ));
}
export default DataTableRow;
