import Film from "../Film/Film";

export default function MovieList ({data}) {
  
    return (
        <ul>
            {data.map(item => (<li key={item.id}><Film data={item}></Film></li>))}
    </ul>
        
    )
}
