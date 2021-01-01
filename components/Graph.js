import { useQuery, gql } from '@apollo/client';
import {Line} from 'react-chartjs-2';
import moment from 'moment';
import styles from '../styles/Home.module.css'
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
    if (loading) return <>Loading...</>;
    if (error) return <>Error :(</>;
    if (data){
        for (var i = 0; i < data.allData.length; i++){
            graphData.push({
                time: moment.unix(data.allData[i].time).utc().format("MM/DD/YYYY HH:mm:ss"),
            temperature: data.allData[i].temperature,
            humidity: data.allData[i].humidity
            })
        }
        //graphData = graphData.slice(Math.max(graphData.length - 50, 1))
    }
       const state = {
  labels: graphData.map(datapoint =>(datapoint.time)),
  datasets: [
    {
      label: 'Temperature',
      fill: false,
      lineTension: 0.5,
        backgroundColor: 'rgb(54, 162, 235)',
      borderColor: 'rgba(54, 162, 235, 0.2)',
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
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
      data: graphData.map(datapoint =>(datapoint.humidity))
    }
  ]
}

        return(
            <>
          <Line
          data={state}
          options={{
              responsive: true,
		maintainAspectRatio: false,
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
              responsive: true,
		maintainAspectRatio: false,
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
