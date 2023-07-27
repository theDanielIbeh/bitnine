export default function ThirdSection() {
  return (
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
      <h2 style={{ fontWeight: "bold" }}>Key features</h2>
      <p>
        <span style={{ display: "block" }}>
          Manage your data with Agens Enterprise Package
        </span>
        <span style={{ display: "block" }}>
          Essential enterprise features such as high availability and sharding
          are provided
        </span>
      </p>
      <img
        src="https://bitnine.net/wp-content/uploads/2022/04/img_key-features_eng.png"
        alt="AgenSQL-Logo"
        width="100%"
      />
    </div>
  );
}
