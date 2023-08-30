import { Bar,Doughnut } from "react-chartjs-2"
import {  ArcElement} from 'chart.js';
import '../styles/ChartContainer.css'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  //import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);
const data_effectif={
    legend:"Répartition",
        labels:[2016,2017,2018,2020,2021,2022,2023],
        datasets:[
            {
                label:"Effectif Digital School",
                data:[5, 18, 23, 20, 29, 31, 27],
                backgroundColor:["#c9d1ff","#c9d1ff","#c9d1ff","#c9d1ff","#c9d1ff","#c9d1ff","blue"],
                borderRadius:"5px",
            }
        ]
    }
const data_formation={
    labels:["Développement web","Design graphique","Marketing digital","Bureautique","Développement mobile"],
        datasets:[
            {
                label:"Effectif Digital School",
                data:[25, 18, 15, 10,1],
                backgroundColor:["blue","yellow","orange","purple","green"]
            }
        ]
}

const options={
    type: "radialGauge",
   maintainAspectRatio:false,
   responsive:true,
}
function ChartContainer(){

    
    return(
        <div className="container">
            <div className="bar-graph">
                <Bar data={data_effectif} options={options} />
                
            </div>
            <div className="doughtnut-graph">
                <Doughnut data={data_formation} options={options}/></div>
            
        </div>
    )
}
export default ChartContainer