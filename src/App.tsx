import AboutMe from "./components/about-me/AboutMe";
import MyApproach from "./components/my-approach/MyApproach";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="App">
      <AboutMe
        title="Webdev"
        subtitle="With an abundant tech stack experience"
        description="Hi, my name is Peter. I'm currently studying IT in Wrocław. Since high school I've been passionate about web development. I enjoy learning new techniques and acquiring programming skills. I also put big effort on self-improvement. Constructive criticism is important for me, because I can learn a lot from my mistakes.
        I'm quite social person despite being programmer. Spending time with different people and speaking to them is crucial part of my life. I'm interested in football, basketball and esports. Aditionally I love reading books no matter what type they are.
        Hi, my name is Peter. I'm currently studying IT in Wrocław. Since high school I've been passionate about web development. I enjoy learning new techniques and acquiring programming skills. I also put big effort on self-improvement. Constructive criticism is important for me, because I can learn a lot from my mistakes.
        I'm quite social person despite being programmer. Spending time with different people and speaking to them is crucial part of my life. I'm interested in football, basketball and esports. Aditionally I love reading books no matter what type they are."
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
