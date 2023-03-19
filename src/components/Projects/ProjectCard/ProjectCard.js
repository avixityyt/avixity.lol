import React from "react";
import { ProjectList } from "../../../data/ProjectData";
import {
  Card,
  CardLeft,
  CardRight,
  Stack,
  BtnGroup,
} from "./ProjectCardElements";
function ProjectCard() {
  return ( 
    <>
      {ProjectList.map((list, index) => (
        <Card key={index}>
          <CardLeft>
            <img  src={list.img} alt={list.name} />
          </CardLeft>
          <CardRight>
            <h4  style={{ color: 'white' , fontWeight: 700 , textTransform: 'uppercase'}}>{list.title}</h4>
            <p>{list.description}</p>
            <Stack>
              {/* <span className="stackTitle">Stuff Used:</span> */}
              <code><span className="tags" style={{ color: 'white' , textTransform: 'uppercase'}}>{list.tech_stack}</span></code>
            </Stack>
            <BtnGroup>
              <a style={{ color: 'white' , textTransform: 'uppercase'}}
                className="btn btn2 "
                href={list.github_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                className="btn PrimaryBtn"
                href={list.demo_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            </BtnGroup>
          </CardRight>
        </Card>
      ))}
    </>
  );
}

export default ProjectCard;
