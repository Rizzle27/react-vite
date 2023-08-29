import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  const formatUserName = (userName) => `@${userName}`;

  return (
    <section className="App">
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing={true}
        userName="hayacchi"
        name="早瀬長瀞"
        avatar="https://i.pinimg.com/236x/6b/d6/1e/6bd61ef06ee922373c80121dfcb021d1.jpg"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing={false}
        userName="itsuki"
        name="中野五月"
        avatar="https://i.pinimg.com/236x/c3/da/37/c3da37e7c38fb3d988607fbae3899eaa.jpg"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing={true}
        userName="rukasarashina"
        name="更科瑠夏"
        avatar="https://i.pinimg.com/236x/ef/8b/71/ef8b71787b567b9dfb88c2185b2458e8.jpg"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing={true}
        userName="kaguyasama"
        name="四宮かぐや"
        avatar="https://i.pinimg.com/236x/15/04/4f/15044f22b63778e8fab765f3f334e7af.jpg"
      />
    </section>
  );
}
