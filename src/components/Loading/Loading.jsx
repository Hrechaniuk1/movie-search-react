import css from './Loading.module.css'

export default function Loading() {
    return (
          <div className={css.wrapper}>
        <div className={css.circle}></div>
        <div className={css.circle}></div>
        <div className={css.circle}></div>
        <div className={css.shadow}></div>
        <div className={css.shadow}></div>
        <div className={css.shadow}></div>
        <span>Loading</span>
    </div>
    )
}