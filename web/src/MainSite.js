import React from 'react';

export default function MainSite() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header style={styles.header}>
      <h1>Welcome to My Website</h1>
      <nav>
        <a href="#home" style={styles.navLink}>Home</a>
        <a href="#about" style={styles.navLink}>About</a>
        <a href="#contact" style={styles.navLink}>Contact</a>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <main style={styles.main}>
      <section style={styles.textBlock}>
        <h2>About Us</h2>
        <p>This is a simple React website demonstrating the basic structure of a webpage.</p>
      </section>

      <section style={styles.textBlock}>
        <h2>Our Mission</h2>
        <p>To create intuitive and user-friendly web applications using modern technologies.</p>
      </section>

      <section style={styles.textBlock}>
        <h2>Contact</h2>
        <p>Feel free to reach out to us at contact@example.com.</p>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 My Website. All rights reserved.</p>
    </footer>
  );
}

// Simple inline styles
const styles = {
  header: {
    backgroundColor: '#282c34',
    padding: '20px',
    color: 'white',
    textAlign: 'center'
  },
  navLink: {
    margin: '0 10px',
    color: 'white',
    textDecoration: 'none'
  },
  main: {
    padding: '20px'
  },
  textBlock: {
    marginBottom: '20px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px'
  },
  footer: {
    backgroundColor: '#282c34',
    padding: '10px',
    color: 'white',
    textAlign: 'center',
    position: 'fixed',
    width: '100%',
    bottom: '0'
  }
};