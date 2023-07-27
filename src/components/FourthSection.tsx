import {  Grid } from "@mui/material";

export default function FourthSection() {
  const objects = [
    {
      imgUrl:
        "https://bitnine.net/wp-content/uploads/2022/04/Password-Profile.png",
      imgAlt: "Password Profile",
      textList: [
        "user password policy reinforces login security",
        "excessive failed login attempts lock an account",
        "define rules for password complexity",
      ],
    },
    {
      imgUrl:
        "https://bitnine.net/wp-content/uploads/2022/04/Data-Redaction.png",
      imgAlt: "Data Redaction",
      textList: [
        "enhanced data security of user personal information",
        "resolve privacy issues in preparation for security audits",
        "encryption or masking with unidentifiable special characters",
      ],
    },
    {
      imgUrl: "https://bitnine.net/wp-content/uploads/2022/04/Auditing.png",
      imgAlt: "Auditing",
      textList: [
        "monitors database activities and collects data",
        "traces object accessed or DDL & DML statements executed by a user",
        "records all actions in logs",
      ],
    },
  ];
  return (
    <div
      style={{
        backgroundColor: "rgb(243, 246, 251)",
        width: "100%",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingInline: 0,
          margin: "auto",
        }}
      >
        <h2 style={{ fontWeight: "bold" }}>AgensSQL DB Engine</h2>
        <h3
          style={{ color: "#444444", margin: 0, textDecoration: "underline" }}
        >
          Enhanced Data Security
        </h3>
        <p>
          AgensSQL is a PostgreSQL-based DBMS that guarantees optimal security
          and stability.
        </p>
        <Grid container spacing={2} sx={{ width: "100%" }}>
          {objects.map((object) => (
            <Grid
              className="hidden-text-container"
              key={object.imgAlt}
              item
              xs={12}
              sm={4}
              padding={0}
              sx={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #007bff",
                borderRadius: "20px",
                height: "200px",
                marginTop: "50px",
                padding: 0,
                position: "relative",
              }}
            >
              <img
                src={object.imgUrl}
                alt="AgenSQL-Logo"
                style={{
                  left: "50%",
                  transform: "translate(-50%, 0)",
                  margin: "auto",
                  padding: 0,
                  position: "absolute",
                  zIndex: 1,
                  width: "70%",
                }}
              />
              <div
                className="hidden-text"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  left: "50%",
                  top: 0,
                  bottom: 0,
                  transform: "translate(-50%, 0)",
                  paddingInline: "20px",
                  margin: "auto",
                  position: "absolute",
                  width: "90%",
                  zIndex: 2,
                }}
              >
                <ul>
                  {object.textList.map((text) => (
                    <li style={{ fontSize: "14px", textAlign: "left" }}>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
