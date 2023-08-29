export function TwitterFollowCard({ formatUserName, name, userName, avatar, isFollowing }) {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`${avatar}`}
          alt={`${userName} icon`}
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">{formatUserName(userName)}</span>
        </div>
      </header>

      <aside>
        <button className="tw-followCard-button">フォロー</button>
      </aside>
    </article>
  );
}
