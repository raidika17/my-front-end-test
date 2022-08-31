import Image from "next/image";
import DashboardStyle from "../styles/dashboard.styles";
import activityEmptyState from "../../../../public/assets/images/activity-empty-state.png";
import trash from "../../../../public/assets/icons/tabler_trash.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function DashboardComponent() {
  const [data, setData] = useState([]);

  const route = useRouter();

  useEffect(() => {
    axios
      .get("https://floating-mountain-35184.herokuapp.com/activity-groups")
      .then((item) => {
        setData(item.data.data);
      });
  }, []);

  return (
    <>
      <div className={DashboardStyle.HEAD_CONTAINER}>
        <div className={DashboardStyle.TITLE}>Activity</div>
        <button className={DashboardStyle.ADD_BUTTON}>+ Tambah</button>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className={DashboardStyle.ACTIVITY_EMPTY}>
              {data.length == 0 ? (
                <Image
                  src={activityEmptyState}
                  alt="activity-empty-state"
                  width={767}
                  height={490}
                />
              ) : (
                <div className="row justify-content-center">
                  {data.map((item, index) => (
                    <div
                      onClick={() => route.push(`/list-activity/${item.id}`)}
                      key={index}
                      className={`col-sm-6 col-lg-3 ${DashboardStyle.CARD}`}
                    >
                      <div className={DashboardStyle.TITLE_ITEM}>
                        {item.title}
                      </div>
                      <div className={DashboardStyle.TRASH}>
                        <Image src={trash} alt="trash" width={24} height={24} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
