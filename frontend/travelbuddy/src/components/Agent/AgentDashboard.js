import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AgentHeroBanner from "./AgentHeroBanner";
import UserHeroBanner from "./UserHeroBanner";
import ExpertSection from "../utils/ExpertSection";
import { useAuth } from "../../commons/auth";

function AgentDashboard() {
  const auth = useAuth();

  return (
    <div className="Agent">
      <Header />

      {auth.user ? (
        <UserHeroBanner />
      ) : (
        <AgentHeroBanner
          header="Welcome, Travel Agent"
          text="Connect travelers with their dream destinations. Join our platform and start assisting travelers with their journey plans today."
          // TODO implement: switch over to Contact Agent whenever page is viewed by public user.
          label="Join as an Agent"
        />
      )}

      <ExpertSection
        header="Meet Our Expert Agents"
        text="Our certified experts are dedicated to assisting travelers with their journey plans."
      />
      <Footer />
    </div>
  );
}

export default AgentDashboard;
