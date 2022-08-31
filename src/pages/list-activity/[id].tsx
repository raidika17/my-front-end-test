import axios from "axios";
import { useEffect, useState } from "react";
import DashboardStyle from "../../modules/app/dashboard/styles/dashboard.styles";
import Layouts from "../../modules/app/layouts/components/layouts.component";
import Image from "next/image";
import back from "../../public/assets/icons/todo-back-button.png";
import { useRouter } from "next/router";
import trash from "../../public/assets/icons/tabler_trash.png";
import todoEmptyState from "../../public/assets/images/todo-empty-state.png";

export async function getServerSideProps({ params }) {
  const data = {
    id: params.id,
  };

  return {
    props: {
      data,
    },
  };
}

export default function ActivityDetail({ data }) {
  const [title, setTitle] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://floating-mountain-35184.herokuapp.com/activity-groups/${data.id}`
      )
      .then((item) => {
        setTitle(item.data.data.title);
        console.log(item.data.data);
      });
  }, [data.id]);

  const route = useRouter();

  return (
    <Layouts>
      <div className={DashboardStyle.HEAD_CONTAINER}>
        <div
          onClick={() => {
            route.push("/");
          }}
          className={DashboardStyle.BACK_BUTTON}
        >
          <Image src={back} alt="back" width={32} height={32} />
        </div>
        <div className={DashboardStyle.TITLE}>{title}</div>
        <button className={DashboardStyle.ADD_BUTTON}>+ Tambah</button>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className={DashboardStyle.TODO_EMPTY}>
              {/* {data.length == 0 ? ( */}
              <Image
                src={todoEmptyState}
                alt="activity-empty-state"
                width={541}
                height={413}
              />
              {/* ) : ( */}
              <div className="row justify-content-center">
                {/* {data.map((item, index) => (
                      <div
                        onClick={() => route.push(`/list-activity/${item.id}`)}
                        key={index}
                        className={`col-sm-6 col-lg-3 ${DashboardStyle.CARD}`}
                      >
                        <div className={DashboardStyle.TITLE_ITEM}>
                          {item.title}
                        </div>
                        <div className={DashboardStyle.TRASH}>
                          <Image
                            src={trash}
                            alt="trash"
                            width={24}
                            height={24}
                          />
                        </div>
                      </div>
                    ))} */}
              </div>
              {/* )} */}
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
}
