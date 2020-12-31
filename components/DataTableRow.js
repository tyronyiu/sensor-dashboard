import { useQuery, gql } from '@apollo/client';
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    return data.allData.map(({ time, temperature, humidity, heatIndex, dewPoint, absoluteHumidity}) => (
        <tr key={time}>
          <td>{time}</td>
          <td>{temperature}</td>
          <td>{humidity}</td>
          <td>{heatIndex}</td>
          <td>{dewPoint}</td>
          <td>{absoluteHumidity}</td>
        </tr>
    ));
}
export default DataTableRow;
