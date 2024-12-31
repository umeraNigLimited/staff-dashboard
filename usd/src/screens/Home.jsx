import React from "react";
import Greeting from "../components/Greeting";
import Tasks from "../components/Tasks";
import {
  HomeColumnFlex,
  HomeContainer,
  HomeRowFlex,
  HomeSection,
} from "../components/styled/HomeStyle";
import CardContainer1 from "../components/CardContainer1";
import { AttendanceContainer } from "../components/styled/AttendanceBoxStyle";
import AttendanceBox from "../components/AttendanceBox";
import Productivity from "../components/Productivity";
import TopPerformers from "../components/TopPerformers";
import { Span } from "../components/styled/Text";

const dashboardOverview = [
  {
    name: "Task",
    count: 6,
    total: 12,
  },

  {
    name: "Leave",
    count: 0,
    total: 15,
  },

  {
    name: "Query",
    count: 1,
    total: 3,
  },
];

function Home() {
  return (
    <HomeContainer className="homeTablet">
      <HomeColumnFlex $columnNumber="1">
        <HomeRowFlex attendanceAndTasks={true}>
          <AttendanceBox />
          <div style={{ flex: 1 }}>
            <HomeColumnFlex>
              {dashboardOverview.map((item, index) => {
                return (
                  <CardContainer1 key={index}>
                    <Span>
                      <span>{`${item.name}`}</span>
                      <br />
                      <span>
                        <strong>{`${item.count}/${item.total}`}</strong>
                      </span>
                    </Span>
                  </CardContainer1>
                );
              })}
            </HomeColumnFlex>
          </div>
        </HomeRowFlex>

        <HomeRowFlex>
          <Tasks name="My Task" />
        </HomeRowFlex>
      </HomeColumnFlex>

      <HomeColumnFlex $columnNumber="2">
        <CardContainer1 />
        {/* <AttendanceBox /> */}
        <Productivity />
        <TopPerformers />
      </HomeColumnFlex>
    </HomeContainer>
  );
}

export default Home;
