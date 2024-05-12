import { Link, useLocation } from "react-router-dom";

import Film from "../Film/Film";

export default function MovieList ({data}) {
  
    const location = useLocation()

    return (
        <ul>
            {data.map(item => (<li key={item.id}><Link to={`/movies/${item.id}`} state={location}><Film data={item}></Film></Link></li>))}
    </ul>
        
    )
}
