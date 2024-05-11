

export default function Film ({data})  {
  

    return (
        <div>
            <h2>{data.title}</h2>
            <img src={data.backdrop_path} alt={data.title} />
        </div>
    )
}
