import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.linkContainer}>
        <a href="#" style={styles.link}>For Photographers</a>
        <a href="#" style={styles.link}>Hire Talent</a>
        <a href="#" style={styles.link}>Inspiration</a>
        <a href="#" style={styles.link}>About</a>
        <a href="#" style={styles.link}>Privacy Policy</a>
        <a href="#" style={styles.link}>Terms & Conditions</a>
      </div>
      <div style={styles.copyright}>
        &copy; camcrew - 2023
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#d3d3d3", // Light gray background
    padding: "20px 0",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  linkContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "10px",
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "14px",
  },
  copyright: {
    fontSize: "14px",
    color: "black",
  },
};

export default Footer;
