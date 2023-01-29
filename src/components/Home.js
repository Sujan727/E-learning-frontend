import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section class="home" id="home">
      <h1>education from home</h1>
      <p>
        The key to success is to appreciate how people learn, understand the <br/>
        thought process that goes into instructional design, what works well, <br/>
        and a range of different ways of achieving goals. 
      </p>
      <a href="/Avatar">
        <button class="btn2">Get Started</button>
      </a>

      <div class="shape"></div>
    </section>
  );
};

export default Home;
