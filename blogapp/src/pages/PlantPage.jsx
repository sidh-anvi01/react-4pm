import React, { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const features = [
    {
      icon: "⚡",
      title: "Fast Performance",
      text: "Build fast and powerful digital experiences for your users.",
    },
    {
      icon: "🔒",
      title: "Secure Platform",
      text: "Your data and applications are protected with modern security.",
    },
    {
      icon: "🚀",
      title: "Easy to Scale",
      text: "Grow your business easily with our flexible technology.",
    },
  ];

  const services = [
    "Web Development",
    "Mobile Applications",
    "UI/UX Design",
    "Cloud Solutions",
  ];

  return (
    <div
      style={{
        margin: 0,
        fontFamily: "Arial, sans-serif",
        color: "#172033",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 8%",
          borderBottom: "1px solid #eee",
          position: "sticky",
          top: 0,
          backgroundColor: "#fff",
          zIndex: 10,
        }}
      >
        <h2 style={{ margin: 0, color: "#2563eb" }}>TechNova</h2>

        <div
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "center",
          }}
        >
          <a href="#home" style={linkStyle}>Home</a>
          <a href="#about" style={linkStyle}>About</a>
          <a href="#services" style={linkStyle}>Services</a>
          <a href="#contact" style={linkStyle}>Contact</a>

          <button style={buttonStyle}>Get Started</button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            border: "none",
            background: "transparent",
            fontSize: "25px",
          }}
        >
          ☰
        </button>
      </nav>

      {/* Hero */}
      <section
        id="home"
        style={{
          minHeight: "80vh",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "60px 8%",
          background: "linear-gradient(135deg, #eff6ff, #ffffff)",
          gap: "50px",
        }}
      >
        <div style={{ flex: 1 }}>
          <p
            style={{
              color: "#2563eb",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            INNOVATE • BUILD • GROW
          </p>

          <h1
            style={{
              fontSize: "56px",
              lineHeight: "1.1",
              margin: "15px 0",
            }}
          >
            Build Your Future With{" "}
            <span style={{ color: "#2563eb" }}>Technology</span>
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.7",
              color: "#64748b",
              maxWidth: "600px",
            }}
          >
            We help businesses transform their ideas into powerful digital
            products that create real impact.
          </p>

          <div style={{ display: "flex", gap: "15px", marginTop: "30px" }}>
            <button style={buttonStyle}>Get Started</button>

            <button
              style={{
                padding: "13px 25px",
                borderRadius: "8px",
                border: "1px solid #2563eb",
                backgroundColor: "white",
                color: "#2563eb",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Learn More
            </button>
          </div>
        </div>

        <div style={{ flex: 1, textAlign: "center" }}>
          <div
            style={{
              width: "350px",
              height: "350px",
              margin: "auto",
              borderRadius: "30px",
              backgroundColor: "#2563eb",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "120px",
              boxShadow: "0 20px 50px rgba(37,99,235,0.25)",
            }}
          >
            💻
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        style={{
          padding: "80px 8%",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "38px", marginBottom: "10px" }}>
          Why Choose Us?
        </h2>

        <p style={{ color: "#64748b" }}>
          Everything you need to build and grow your digital business.
        </p>

        <div
          style={{
            display: "flex",
            gap: "25px",
            marginTop: "45px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                width: "280px",
                padding: "30px",
                borderRadius: "15px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                backgroundColor: "#fff",
              }}
            >
              <div style={{ fontSize: "45px" }}>{feature.icon}</div>

              <h3 style={{ fontSize: "22px" }}>{feature.title}</h3>

              <p style={{ color: "#64748b", lineHeight: "1.6" }}>
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "60px",
          padding: "80px 8%",
          backgroundColor: "#f8fafc",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            flex: 1,
            minWidth: "300px",
            height: "320px",
            borderRadius: "20px",
            backgroundColor: "#dbeafe",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "100px",
          }}
        >
          🚀
        </div>

        <div style={{ flex: 1, minWidth: "300px" }}>
          <p style={{ color: "#2563eb", fontWeight: "bold" }}>
            ABOUT TECHNOVA
          </p>

          <h2 style={{ fontSize: "38px" }}>
            Turning Ideas Into Digital Experiences
          </h2>

          <p
            style={{
              color: "#64748b",
              lineHeight: "1.8",
              fontSize: "17px",
            }}
          >
            Our team works with startups and businesses to create modern,
            scalable and user-friendly digital solutions.
          </p>

          <button style={buttonStyle}>Discover More</button>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        style={{
          padding: "80px 8%",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "38px" }}>Our Services</h2>

        <p style={{ color: "#64748b" }}>
          Professional solutions designed for your business.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "40px",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                width: "220px",
                padding: "25px",
                borderRadius: "12px",
                backgroundColor: "#eff6ff",
                color: "#1e40af",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        style={{
          margin: "30px 8% 80px",
          padding: "70px 30px",
          textAlign: "center",
          borderRadius: "25px",
          backgroundColor: "#2563eb",
          color: "#fff",
        }}
      >
        <h2 style={{ fontSize: "38px", marginBottom: "15px" }}>
          Ready to Start Your Project?
        </h2>

        <p style={{ fontSize: "17px", marginBottom: "30px" }}>
          Let's turn your idea into something amazing.
        </p>

        <button
          style={{
            padding: "14px 30px",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#fff",
            color: "#2563eb",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Contact Us
        </button>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#111827",
          color: "#fff",
          padding: "40px 8%",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div>
          <h2 style={{ color: "#60a5fa" }}>TechNova</h2>
          <p style={{ color: "#9ca3af" }}>
            Building the future with technology.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <p>Home</p>
          <p>About</p>
          <p>Services</p>
        </div>

        <div>
          <h3>Contact</h3>
          <p>info@technova.com</p>
          <p>+91 98765 43210</p>
        </div>
      </footer>
    </div>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "#172033",
  fontSize: "15px",
};

const buttonStyle = {
  padding: "13px 25px",
  border: "none",
  borderRadius: "8px",
  backgroundColor: "#2563eb",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
};

export default App;