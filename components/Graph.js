import { useQuery, gql } from '@apollo/client';
import {Line} from 'react-chartjs-2';
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

function Graph(){
    var graphData = []
    const { loading, error, data } = useQuery(getData);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    if (data){
        console.log(data.allData)
        for (var i = 0; i < data.allData.length; i++){
            graphData.push({
            time: data.allData[i].time,
            temperature: data.allData[i].temperature,
            humidity: data.allData[i].humidity
            })
        }
    }
       const state = {
  labels: graphData.map(datapoint =>(datapoint.time)),
  datasets: [
    {
      label: 'Temperature',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: graphData.map(datapoint =>(datapoint.temperature))
    }
  ]
}

       const humidity = {
  labels: graphData.map(datapoint =>(datapoint.time)),
  datasets: [
    {
      label: 'Humidity',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: graphData.map(datapoint =>(datapoint.humidity))
    }
  ]
}

        return(
            <>
          <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Temperature over time',
              fontSize:20
            },
            legend:{
              display:true,
              position:'bottom'
            }
          }}
        />

          <Line
          data={humidity}
          options={{
            title:{
              display:true,
              text:'Humidity over time',
              fontSize:20
            },
            legend:{
              display:true,
              position:'bottom'
            }
          }}
        />
            </>
        )

}
export default Graph;
