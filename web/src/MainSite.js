import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function MainSite() {
  return (
    <div style={styles.app}>
      <Header />
      <div style={styles.container}>
        <div style={styles.animationContainer}>
          <DotLottieReact
            src="https://lottie.host/4db68bbd-31f6-4cd8-84eb-189de081159a/IGmMCqhzpt.lottie"
            loop
            autoplay
            style={styles.lottieAnimation}
          />
        </div>
        <div style={styles.contentContainer}>
          <MainContent />
        </div>
      </div>
      <Footer />
      
    </div>
  );
}

function Header() {
  return (
    <header style={styles.header}>
      <h1>Welcome to Echomateriya</h1>
      <nav>
        <a href="#home" style={styles.navLink}>Home</a>
        <a href="https://www.behance.net/echomaterib02e/" style={styles.navLink}>Behance</a>
        <a href="https://echomateriya.tumblr.com/" style={styles.navLink}>Tumblr</a>
        <a href="https://pin.it/598KK2j" style={styles.navLink}>Pinterest</a>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <main style={styles.main}>
        <h2>About Me</h2>
        <p>Hey, I’m Arthur Bon A.K.A. ECHOMATERIYA. Collected here all links to my profiles.</p>
      
      <h2>Links to Social Media and Stores</h2>

      {/* Group 1 */}
      <div style={styles.buttonGroup}>
        <a href="https://instagram.com/echomateriya?utm_medium=copy_link" style={styles.button} target="_blank" rel="noopener noreferrer">
          INSTAGRAM ECHOMATERIYA
        </a>
        <a href="https://instagram.com/echomateriya.store?igshid=Y2IzZGU1MTFhOQ==" style={styles.button} target="_blank" rel="noopener noreferrer">
          INSTAGRAM ECHOMATERIYA.STORE
        </a>
        <a href="https://www.tiktok.com/@echomateriya" style={styles.button} target="_blank" rel="noopener noreferrer">
          ECHOMATERIYA TIKTOK
        </a>
        <a href="https://www.redbubble.com/people/Ehomateriya/shop?asc=u" style={styles.button} target="_blank" rel="noopener noreferrer">
          REDBUBBLE
        </a>
      </div>

      <h2>19.91</h2>
      <div style={styles.buttonGroup}>
        <a href="https://instagram.com/19.91place?igshid=Y2IzZGU1MTFhOQ==" style={styles.button} target="_blank" rel="noopener noreferrer">
          19.91 INSTAGRAM
        </a>
        <a href="https://www.tiktok.com/@19.91.place" style={styles.button} target="_blank" rel="noopener noreferrer">
          19.91 TIKTOK
        </a>
      </div>

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

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  header: {
    backgroundColor: '#282c34',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 3,
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    margin: '0 10px',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '80px', // Offset by header height
    position: 'relative',
    minHeight: 'calc(100vh - 80px)', // Adjust for header height
  },
  animationContainer: {
    position: 'absolute',
    zIndex: 1,
    opacity: 0.5,
    width: '800px', // Fixed size for animation
    height: '800px', // Fixed size for animation
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  contentContainer: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
  },
  mainContent: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    borderRadius: '10px',
    width: '80%', // Adjust width as needed
    maxWidth: '600px', // Optional: restrict maximum width
    margin: '0 auto',
  },
  footer: {
    backgroundColor: '#282c34',
    padding: '10px',
    color: 'white',
    textAlign: 'center',
    position: 'fixed',
    width: '100%',
    bottom: '0'
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column', // Align buttons vertically
    alignItems: 'center', // Center-align buttons horizontally
    marginBottom: '20px',
  },
  button: {
    display: 'block',
    margin: '10px 0',
    padding: '10px 20px',
    backgroundColor: '#282c34',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    textAlign: 'center',
    fontSize: '16px',
    width: '250px',
  },
  
};