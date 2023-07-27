import CopyrightIcon from "@mui/icons-material/Copyright";
export default function Footer() {
  return (
    <div
      className="container"
      style={{
        color: "#ababab",
        display: "flex",
        alignItems: "left",
        paddingInline: 0,
        margin: "auto",
        padding: "20px",
      }}
    >
      <CopyrightIcon />
      <small
        style={{
          display: "flex",
        }}
      >
        2023 by Bitnine Global Inc. All Rights Reserved.
      </small>
    </div>
  );
}
