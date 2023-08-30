 import { useState } from "react"
 import calendar from '../assets/calendar.png'
 import profile from '../assets/profile.png'
 import'../styles/UpperBar.css'
 function UpperBar({title}){

    const [month,setMonth]=useState(new Date().getMonth())
    const [weekDay, setWeekDay]=useState(new Date().getDay())
    const [day, setDay]=useState(new Date().getDate())
    const [hour, setHour]=useState(new Date().getHours())
    const [min, setMin]=useState(new Date().getMinutes())
    const [sec,setSec]=useState(new Date().getSeconds())

    const weekdays=["Lun","Mar","Mer","Jeu","Ven","Sam","Dim"]
    const months=["jan","fev","mars","avril","mai","juin","juillet","août","sept","oct","nov","dec"]
    
    const refresh=()=>{setInterval(()=>{
       let  d = new Date()
        setMonth((d.getMonth())+1)
        setDay(d.getDate())
        setWeekDay(d.getDay())
        setHour(d.getHours())
        setMin(d.getMinutes())
        setSec(d.getSeconds())
    },1000)}

    refresh()

    return(
        <div className="upper-bar">
            <div className="active-page">{title}</div>
            <div className="resarch-btn">
                <input type="search"  placeholder='Chercher un élève...'/>
                <span className="material-icons">search</span>
            </div>
            <div className="date"> 
            <div><img src={calendar} alt="" className='calendar-icon' /> </div> 
            {`${weekdays[weekDay-1]},${day} ${months[month-1]}`} {`${hour}:${min}:${sec}`}
            </div>
            <div className="profile">
                <div className="profile-picture"><img src={profile} alt="" /></div>
                <span>John Doe</span>
            </div>
        </div>
    )
 }
 
 
 export default UpperBar