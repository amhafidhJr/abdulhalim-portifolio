import { Box, Typography } from "@mui/material";
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const frontData = [
  { subject: "JavaScript", uv: 80, pv: 70 },
  { subject: "React", uv: 75, pv: 85 },
  { subject: "Html", uv: 65, pv: 90 },
  { subject: "CSS", uv: 70, pv: 60 },
  { subject: "Angular", uv: 60, pv: 75 },
];

const backData = [
  { subject: "Java", uv: 80, pv: 70 },
  { subject: "Spring Boot", uv: 75, pv: 85 },
  { subject: "Laravel", uv: 65, pv: 90 },
  { subject: "Python", uv: 70, pv: 60 },
  { subject: "PHP", uv: 60, pv: 75 },
];

const otherData = [
  { subject: "DevOps", uv: 90, pv: 70 },
  { subject: "Flutter", uv: 80, pv: 75 },
  { subject: "Kotlin", uv: 80, pv: 75 },
  { subject: "WSO2", uv: 70, pv: 60 },
];

export const Skills = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <h4 className="col-12">
            <Typography
              variant="h4"
              component="h4"
              align="left"
              gutterBottom
              sx={{ mb: 2, fontWeight: "bold" }}
            >
              Skills
            </Typography>
          </h4>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <Box
              //   sx={{
              //     border: "1px groove grey",
              //     borderRadius: "1px",
              //     boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              //     margin: "auto",
              //     backgroundColor: "#ffffff",
              //     padding: 2,
              //   }}
              sx={{
                border: "1px solid #776B5D", // Corrected border style
                borderRadius: "10px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#F9F9F9",
                display: "flex",
                flexDirection: "column",
                padding: { xs: 2, sm: 3, md: 4 }, // Responsive padding
                margin: { xs: 1, sm: 2, md: "auto" }, // Responsive margin
              }}
            >
              <h6 className="chart-title text-danger">
                Front Technology Skills
              </h6>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart
                  cx="50%"
                  cy="50%"
                  outerRadius="80%"
                  data={frontData}
                >
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar
                    name="Proficiency"
                    dataKey="uv"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.6}
                  />
                  <Radar
                    name="Interest"
                    dataKey="pv"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                    fillOpacity={0.6}
                  />
                  <Tooltip />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </Box>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <Box
              sx={{
                border: "1px solid #776B5D", // Corrected border style
                borderRadius: "10px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#F9F9F9",
                display: "flex",
                flexDirection: "column",
                padding: { xs: 2, sm: 3, md: 4 }, // Responsive padding
                margin: { xs: 1, sm: 2, md: "auto" }, // Responsive margin
              }}
            >
              <h6 className="chart-title text-danger">
                Backend Technology Skills
              </h6>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={backData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar
                    name="Proficiency"
                    dataKey="uv"
                    stroke="#777777"
                    fill="#777777"
                    fillOpacity={0.6}
                  />
                  <Radar
                    name="Interest"
                    dataKey="pv"
                    stroke="#ffc658"
                    fill="#ffc658"
                    fillOpacity={0.6}
                  />
                  <Tooltip />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </Box>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <Box
              sx={{
                border: "1px solid #776B5D", // Corrected border style
                borderRadius: "10px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#F9F9F9",
                display: "flex",
                flexDirection: "column",
                padding: { xs: 2, sm: 3, md: 4 }, // Responsive padding
                margin: { xs: 1, sm: 2, md: "auto" }, // Responsive margin
              }}
            >
              <h6 className="chart-title text-danger">
                Other Technology Skills
              </h6>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart
                  cx="50%"
                  cy="50%"
                  outerRadius="80%"
                  data={otherData}
                >
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar
                    name="Proficiency"
                    dataKey="uv"
                    stroke="#191717"
                    fill="#191717"
                    fillOpacity={0.6}
                  />
                  <Radar
                    name="Interest"
                    dataKey="pv"
                    stroke="#183D3D"
                    fill="#183D3D"
                    fillOpacity={0.6}
                  />
                  <Tooltip />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};
