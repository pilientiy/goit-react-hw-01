import css from "./Profile.module.css"
export default function Profile({ username, tag, location, avatar, stats: {
    followers, views, likes
  }, }) {
    return (
        <div className={css.container}>
            <div className={css.box}>
    <img className={css.img}
      src={avatar}
      alt="User avatar"
    />
    <p className={css.title}>{username}</p>
    <p className={css.text}>@{tag}</p>
    <p className={css.text}>{location}</p>
  </div>

  <ul className={css.list}>
    <li className={css.item}>
      <p>Followers</p>
      <p>{followers}</p>
    </li>
    <li className={css.item}>
      <p>Views</p>
      <p>{views}</p>
    </li>
    <li className={css.item}>
      <p>Likes</p>
      <p>{likes}</p>
    </li>
  </ul>
</div>
    )
}