


export default function Actor({data}) {
    
    return (
        <div>
            <img src={data?.profile?.path} alt={data?.name} />
            <h4>{data.name}</h4>
            <p>as: {data?.character}</p>
        </div>
    )
}