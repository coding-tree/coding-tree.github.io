import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import folderStructure from "../data/folderStructure.json";
import DayNight from "./DayNight";
import { lightTheme } from "./themes";
import Footer from "./Footer";
import Box from "./Box/Box";
import BoxImage from "./Box/BoxImage";
import BoxWrapper from "./Box/BoxWrapper";
import BoxPath from "./Box/BoxPath";
import MotiveSlider from "./MotiveSlider";
import BoxContent from "./Box/BoxContent";
import BoxFolders from "./Box/BoxFolders";
import Folders from "./Folders";
import BoxInfo from "./Box/BoxInfo";
import BoxInfoStartup from "./Box/BoxInfoStartup";
import ProfileDetail from "./Profile/ProfileDetail";
import FolderDetail from "./FolderDetail";
import Avatar from "./Avatar";
import Profile from "./Profile/Profile";
import { updateFolderStructure } from "./updateFolderStructure";

const AboutUs = () => {
  const [selectedElement, setSelectedElement] = useState(null);
  const [motive, toggleMotive] = useState(lightTheme);
  const [dateTime, setDateTime] = useState("day");
  const [folders, updateFolders] = useState(null);

  useEffect(() => {
    updateFolders(updateFolderStructure(folderStructure));
  }, []);

  return (
    <section id="about-us">
      <Navigation></Navigation>
      <DayNight dateTime={dateTime} setDateTime={setDateTime}></DayNight>

      <Box motive={motive} setSelectedElement={setSelectedElement}>
        <BoxImage
          motive={motive}
          light="box.svg"
          dark="box_dark.svg"
        ></BoxImage>
        <BoxWrapper>
          <BoxPath
            title="Lokalizacja"
            folders={folders}
            selectedElement={selectedElement}
          >
            <MotiveSlider
              title="Przełącz motyw"
              dateTime={dateTime}
              setDateTime={setDateTime}
              motive={motive}
              toggleMotive={toggleMotive}
            ></MotiveSlider>
          </BoxPath>
          <BoxContent>
            <BoxFolders folders={folders}>
              <Folders
                folderStructure={folders}
                selectedElement={selectedElement}
                setSelectedElement={setSelectedElement}
              ></Folders>
            </BoxFolders>
            <BoxInfo selectedElement={selectedElement}>
              {selectedElement ? (
                <>
                  <ProfileDetail selectedElement={selectedElement}>
                    <Avatar profile={selectedElement}></Avatar>
                    <Profile
                      emptyDescription="Brak opisu profilu"
                      profile={selectedElement}
                    ></Profile>
                  </ProfileDetail>
                  <FolderDetail
                    selectedElement={selectedElement}
                  ></FolderDetail>
                </>
              ) : (
                <BoxInfoStartup title="Witamy w widoku folderów">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Perferendis officiis vitae praesentium ducimus iste incidunt
                  voluptates cum autem quis, totam beatae. Animi fuga expedita
                  atque labore reiciendis magni harum obcaecati.
                </BoxInfoStartup>
              )}
            </BoxInfo>
          </BoxContent>
        </BoxWrapper>
      </Box>

      <Footer></Footer>
    </section>
  );
};

export default AboutUs;
