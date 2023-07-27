import { Grid } from "@mui/material";

export default function FifthSection() {
  const objects = [
    {
      title: "Backup/Restore",
      textList: [
        "provides a convenient interface for backup & restore",
        "provides backup & restore features for DB and table objects",
      ],
    },
    {
      title: "DB Monitoring Dashboard",
      textList: [
        "monitors real-time session & transaction lock",
        "provides status for server CPU & memory",
      ],
    },
    {
      title: "Schedule Management",
      textList: [
        "provides module for script, SQL job, and scheduling management",
        "provides UX dedicated to scheduling",
      ],
    },
    {
      title: "Database Audit",
      textList: [
        "enables auditing via user interface",
        "view audit results via user interface",
      ],
    },
    {
      title: "SQL Monitoring",
      textList: [
        "collects query statistics required for performance analysis",
        "extracts monitoring results in query",
      ],
    },
    {
      title: "Performance Management",
      textList: [
        "monitors and collects operation status & statistical data",
        "provides status reports required for improving performance",
      ],
    },
  ];
  return (
    <div
      style={{
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
        <h2 style={{ fontWeight: "bold" }}>Agens Enterprise Package</h2>

        <p>
          Agens Enterprise Package comes with a high availability management
          server that supports backup and data monitoring dashboard that helps
          enterprise customers manage their data efficiently.
        </p>
        <Grid container spacing={2} sx={{ width: "100%" }}>
          <Grid item sm={12} md={6} padding={0}>
            <h3
              style={{
                color: "#444444",
                margin: 0,
                textDecoration: "underline",
              }}
            >
              Agens HA Manager
            </h3>
            <img
              src="https://bitnine.net/wp-content/uploads/2022/04/img_AHM_eng-1024x922.png"
              alt="AHM"
              style={{
                width: "100%",
              }}
            />
          </Grid>
          <Grid item container direction="column" sm={12} md={6} padding={0}>
            <h3
              style={{
                color: "#444444",
                margin: 0,
                textDecoration: "underline",
              }}
            >
              Agens Enterprise Manager
            </h3>
            <Grid
              container
              direction="column"
              alignItems="center"
              spacing={2}
              sx={{ width: "100%" , marginTop: "50px"}}
            >
              {objects.map((object) => (
                <div className="flip-card">
                  <div
                    className="flip-card-inner"
                    key={object.title}
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #007bff",
                      borderRadius: "5px",
                      height: "100%",
                      padding: 0,
                    }}
                  >
                    <div
                      className="flip-card-front"
                      style={{
                        alignItems: "center",
                        display: "flex",
                        borderRadius: "5px",
                        justifyContent: "center",
                      }}
                    >
                      {object.title}
                    </div>
                    <div
                      className="flip-card-back"
                      style={{
                        borderRadius: "5px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        paddingInline: "20px",
                        margin: "auto",
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
                  </div>
                </div>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
