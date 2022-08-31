import type { NextPage } from "next";
import DashboardComponent from "../modules/app/dashboard/components/dashboard.component";
import Layouts from "../modules/app/layouts/components/layouts.component";
const Home: NextPage = () => {
  return (
    <Layouts>
      <DashboardComponent />
    </Layouts>
  );
};

export default Home;
