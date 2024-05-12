

export default function Film ({data})  {
  
    const imgUrl = `https://image.tmdb.org/t/p/w300${data.backdrop_path}`
    return (
        <div>
            <h2>{data.title}</h2>
            <img src={imgUrl} alt={data.title} />
        </div>
    )
}
