import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { useEffect, useState } from "react"

const MenuBar = () => {
    let [time, setTime] = useState('time') 
    const handleClick = () => {
        time = setTime(Date.now)
    }
    return (
        <Breadcrumbs aria-label="breadcrumb">
        <Link color="primary" onClick={handleClick}>Material-UI</Link>
        <Link color="primary" onClick={handleClick}>Core</Link>
        <Typography color="primary">{time}</Typography>
      </Breadcrumbs>
    );
}

export default MenuBar