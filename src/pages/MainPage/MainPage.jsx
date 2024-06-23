import { Container } from "@mui/material";
import React, { useState } from "react";
import TabsComponent from "../../components/Tabs/Tabs";
import Souz from "../../components/Souz/Souz";
import History from "../../components/History/History";
import { SwiperComponent } from "../../Swiper/Swiper";

const VALUES = {
  souz: "souz",
  project: "project",
  history: "history",
  global: "global",
  ourTeam: "our team",
};

const GetCategories = ({ tab }) => {
  switch (tab) {
    case VALUES.souz:
      return <Souz />;
    case VALUES.project:
      return <div>project</div>;
    case VALUES.history:
      return <History />;
    case VALUES.global:
      return <div>global</div>;
    case VALUES.ourTeam:
      return <div>our team</div>;
    default:
      return <div>souz</div>;
  }
};

const MainPage = () => {
  const categoriesSelect = [
    { value: VALUES.souz, label: "souz" },
    { value: VALUES.project, label: "project" },
    { value: VALUES.history, label: "history" },
    { value: VALUES.global, label: "global" },
    { value: VALUES.ourTeam, label: "our team" },
  ];
  const [value, setValue] = useState(categoriesSelect?.[0].value);

  // const swiperUrl = [
  //   { url: "https://picsum.photos/id/1015/1000/600" },
  //   { url: "https://s00.yaplakal.com/pics/pics_original/5/0/6/17827605.jpg" },
  //   { url: "https://s00.yaplakal.com/pics/pics_original/5/0/6/17827605.jpg" },
  // ];

  return (
    <Container>
      <TabsComponent
        value={value}
        setValue={setValue}
        categoriesSelect={categoriesSelect}
      />
      <GetCategories tab={value} />
      {/* <SwiperComponent swiperImage={swiperUrl} /> */}
    </Container>
  );
};

export default MainPage;
