import { Button, Grid } from "@mui/material";

export default function FirstSection() {
  return (
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <img
          src="https://bitnine.net/wp-content/uploads/2022/04/AgenSQL-Logo-300x61.png"
          alt="AgenSQL-Logo"
          width="300px"
        />
        <h3 style={{ fontWeight: "bold" }}>
          An integration of Bitnine's DB technology and PG expertise
        </h3>
        <p>
          AgensSQL is an all-new relational DBMS based on PostgreSQL, with years
          of expertise and knowledge accumulated through database research and
          development.
        </p>
        <p>
          The enterprise package, along with AgensSQL engine, is an all-in-one
          solution that ensures the efficiency and scalability of data
          management.
        </p>
        <p>
          Get AgensSQL now for stable operation and management services at a
          reduced maintenance cost.
        </p>
        <Grid container spacing={2} sx={{ width: "80%" }}>
          <Grid item xs={6} sm={4}>
            <Button
              sx={{
                backgroundColor: "blue",
                color: "#FFF",
                fontFamily: "inherit",
              }}
            >
              CONTACT
            </Button>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Button
              sx={{
                backgroundColor: "blue",
                color: "#FFF",
                fontFamily: "inherit",
              }}
            >
              BROCHURE
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button
              sx={{
                backgroundColor: "blue",
                color: "#FFF",
                fontFamily: "inherit",
              }}
            >
              BLOG
            </Button>
          </Grid>
        </Grid>
      </div>
  );
}
