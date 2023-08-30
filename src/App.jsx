import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  return (
    <section className="App">
      <TwitterFollowCard avatar="https://i.pinimg.com/236x/6b/d6/1e/6bd61ef06ee922373c80121dfcb021d1.jpg">
        早瀬長瀞
      </TwitterFollowCard>
      
      <TwitterFollowCard userName="itsuki" avatar="https://i.pinimg.com/236x/c3/da/37/c3da37e7c38fb3d988607fbae3899eaa.jpg">
        中野五月
      </TwitterFollowCard>
    </section>
  );
}
