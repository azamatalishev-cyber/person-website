import { useEffect, useState } from "react"
import MenuBar from './MenuBar.js'

// const Header = () => {
//     const [time, setTime] = useState(Date.now()) 
    
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setTime(Date.now())
//         }, 1000);

//         return () => clearInterval(interval)
//     }, [])

//     return (
//         <h1> {time} </h1>
//     )
// }

const Header = () => {
    return( 
        <div>        
            <h1>Azamat</h1>
            <MenuBar/>
        </div>

    )
}

export default Header