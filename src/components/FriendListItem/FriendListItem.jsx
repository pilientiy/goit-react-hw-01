import css from "./FrendListItem.module.css";

export default function FriendListItem({friends: {avatar, name, isOnline}}) {
    return (
        <div className={css.container}>
  <img src={avatar} alt="Avatar" width="48" />
  <p className={css.name}>{name}</p>
  <p className={isOnline ? css.online : css.offline}>{isOnline === true ? "Online" : "Offline"}</p>
</div>
    )
}