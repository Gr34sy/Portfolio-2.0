import Navbar from "./components/navbar/Navbar";
import AboutMe from "./components/about-me/AboutMe";
import MyApproach from "./components/my-approach/MyApproach";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />

      <AboutMe
        title="Webdev"
        subtitle="With an abundant tech stack experience"
        paragraphs={[
          "Hello, my name is Peter. I study IT on Akademia Techniczno Informatyczna w Naukach Stosowanych in Wrocław. I have chosen the programming specialisation, which means that I get to know Frontend and Backend programming languages and techniques. I've been passionated about webdev ever since I've finished technical high school and acquired both EE.08 and EE.09 certificates. I enjoy learning new technologies and good programming practices. You can read more about my approach to programming and work in the next section!",
          "I really appreciate constructive criticism. Self-improvement is my driving force. I think that there always is something what I can do better. This mindset gives me motivation to learn and to keep going further.",
          "I'm quite social person despite being a programmer. I enjoy spending time on conversations with different people. Football, basketball and esports are really close to my heart. I love following news about it or watch the competitions. Additionally I love reading books no matter the genre they are.",
        ]}
        location="Wrocław, Poland"
      />

      <MyApproach />

      <Experience />

      <Projects />

      <Footer />
    </div>
  );
}

export default App;
