import { findTimeWindow } from '../utils/findTimeWindow'
import { formatTime } from '../utils/formatTime'

export function indland() {
     // Der skal hentes data ud fra
    // Vis dato og årstal 
    // Vis pris for hver time

    // Lav et JS data objekt 
    const data = new Date()
    const year = date.getFullYear()
    // Træk år ud fra dataobjektet 0-11
    let month = date.getMonth() + 1
    if (month < 10) {
        month = '0' + month
    }
    // 1-31
    // Hvis dag er mindre end to cifre, så plus 0 på day.
    let day = date.getDate()
    if (day < 10) {
        day = '0' + day
    }
    // Vi skal lave en funktion der kan finde et object som ligger
    // indenfor for det tidpunkt vi har lige nu.
    // Eks. så finder den objektet mellem 12-03

   

    console.log(day, month, year);

    return (
        <section>
            <div>
            <h1>Nyheder Indland</h1>
        </div>
        {indland.map((item) => {
            return (
                <div key={item.time_start}>
                <h4>kl.{formatTime(item.time_start)}</h4>
                
                </div>
            )
        }) }


        </section>
    )
    
}