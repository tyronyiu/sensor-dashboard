import { useQuery, gql } from '@apollo/client';
import styles from '../styles/Home.module.css'
const getData = gql`
  query latestDatapoint{
    latestDatapoint{
      time
      temperature
      humidity
      heatIndex
      dewPoint
      absoluteHumidity
    }
  }
`;


function CurrentStats(){
    const { loading, error, data } = useQuery(getData);
    if (loading) return <>Loading...</>;
    if (error) return <>Error :(</>;
    if (data) return(
        <>
        <div className={styles.centeredTitle}>
        <h2>Current Temperature: {' '}
            <code className={styles.code_alt}>
                {data.latestDatapoint.temperature}
            </code>
        </h2>
        </div>
        <div className={styles.centeredTitle}>
        <h2>Current Humidity: {' '}
            <code className={styles.code_alt}>
                {data.latestDatapoint.humidity}
            </code>
        </h2>
        </div>
        </>
    )

}
export default CurrentStats;
