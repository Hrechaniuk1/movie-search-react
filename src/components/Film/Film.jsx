import css from './Film.module.css'

export default function Film({ data }) {
    
    const imgPath = data?.backdrop_path
  
    const imgUrl = `https://image.tmdb.org/t/p/w300${imgPath}`
    return (
        <div>
            <h2 className={css.filmTitle}>{data.title}</h2>
            {imgPath ? <img src={imgUrl} alt={data.title} /> : <p className={css.noImg}> Sadly - no image</p>}
        </div>
    )
}
