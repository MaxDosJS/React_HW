import Button from "../../component/Button/button";
import ImageComponent from "../../component/Star/star";
import StarIconComponentComponent from "../../component/Star/staricons";
import Input from "../../component/Input/input";
import "../Homepage/Homepage.css";

export default function HomePage() {
  const handleClick = () => {
    alert("Кнопка была нажата!");
  };
  return (
    <div className="homepage">
      <div className="homepage-div-one">
        <div className="homepage-text-div">
          <p className="text-p-one">
            Proven strategies backed by sciense for success.
          </p>
          <h1 className="text-h1">Live life at the full potential</h1>
          <p className="text-p-two">
            I help people to discover their true potential and live a fulfilling
            life... Discover the simple 3 steps that I discovered to hack
            productivity. It just works and it is begin using backed by science.
            Wanna transform your life?
          </p>
          <Button
            position="relative"
            bottom="80px"
            border="none"
            onClick={handleClick}
            label="Get your free guide now"
          />
        </div>
        <div className="img-container-div">
          <img
            className="img-container"
            src="./img/protection-target.jpg"
          ></img>
          <h1 className="img-h1-one">100%</h1>
          <p className="img-p-one">Success rate this year</p>
        </div>
        <img className="img-homepage" src="./img/pexels-andrea.jpg"></img>
      </div>
      <div className="homepage-introduction">
        <div className="introduction-text">
          <h1 className="intoduction-h1">
            I can help you in these particular areas.
          </h1>
          <p className="intoduction-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam. <br></br>
            <br></br>Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo.
          </p>
        </div>
        <div className="introduction-blocks">
          <div className="introduction-block">
            <img
              className="introduction-img-one"
              src="./img/browser-img-1.jpg"
            ></img>
            <h1 className="introduction-h1">1:1 Coaching</h1>
            <p className="introduction-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam.
            </p>
          </div>
          <div className="introduction-block">
            <img
              className="introduction-img-one"
              src="./img/browser-img-2.jpg"
            ></img>
            <h1 className="introduction-h1">1:1 Coaching</h1>
            <p className="introduction-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam.
            </p>
          </div>
          <div className="introduction-block">
            <img
              className="introduction-img-one"
              src="./img/browser-img-3.jpg"
            ></img>
            <h1 className="introduction-h1">1:1 Coaching</h1>
            <p className="introduction-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam.
            </p>
          </div>
        </div>
      </div>
      <div className="homepage-reviews">
        <h1 className="reviews-h1">Hear out what my clients say about me.</h1>

        <div className="homepage-reviews-blocks">
          <div className="reviews-block">
            <p className="reviews-p">
              "I gained so much confidence in my ability to connect and deepen
              my relationships with people. "
            </p>
            <h1 className="reviews-h1-block">Jane</h1>
            <img className="img-reviews" src="./img/jane-0.jpg"></img>
            <div className="star-div">
              <ImageComponent src={"./img/Star.jpg"}></ImageComponent>
              <ImageComponent src={"./img/Star.jpg"}></ImageComponent>
              <ImageComponent src={"./img/Star.jpg"}></ImageComponent>
              <ImageComponent src={"./img/Star.jpg"}></ImageComponent>
              <ImageComponent src={"./img/Star.jpg"}></ImageComponent>
            </div>
          </div>
          <div className="reviews-block">
            <p className="reviews-p">
              "I gained so much confidence in my ability to connect and deepen
              my relationships with people. "
            </p>
            <h1 className="reviews-h1-block">Catherine</h1>
            <img className="img-reviews" src="./img/catherine.jpg"></img>
            <div className="star-div">
              <StarIconComponentComponent
                src={"./img/Staricon.jpg"}
              ></StarIconComponentComponent>
              <StarIconComponentComponent
                src={"./img/Staricon.jpg"}
              ></StarIconComponentComponent>
              <StarIconComponentComponent
                src={"./img/Staricon.jpg"}
              ></StarIconComponentComponent>
              <StarIconComponentComponent
                src={"./img/Staricon.jpg"}
              ></StarIconComponentComponent>
              <StarIconComponentComponent
                src={"./img/Staricon.jpg"}
              ></StarIconComponentComponent>
            </div>
          </div>
          <div className="reviews-block">
            <p className="reviews-p">
              "I gained so much confidence in my ability to connect and deepen
              my relationships with people. "
            </p>
            <h1 className="reviews-h1-block">Jane</h1>
            <img className="img-reviews" src="./img/jane-1.jpg"></img>
            <div className="star-div">
              <StarIconComponentComponent
                src={"./img/Staricon.jpg"}
              ></StarIconComponentComponent>
              <StarIconComponentComponent
                src={"./img/Staricon.jpg"}
              ></StarIconComponentComponent>
              <StarIconComponentComponent
                src={"./img/Staricon.jpg"}
              ></StarIconComponentComponent>
              <StarIconComponentComponent
                src={"./img/Staricon.jpg"}
              ></StarIconComponentComponent>
              <StarIconComponentComponent
                src={"./img/Staricon.jpg"}
              ></StarIconComponentComponent>
            </div>
          </div>
        </div>
        <img className="point" src="./img/point.jpg"></img>
      </div>
      <div className="homepage-blogs">
        <h1 className="blogs-h1">
          Stay Motivated, read the weekly blog articles.
        </h1>
        <div className="blogs-blocks">
          <div className="blogs-block">
            <img className="blocks-img" src="./img/blogs-img1.jpg"></img>
            <h2 className="blogs-h2">Balancing your love and work life.</h2>
            <p className="blogs-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam.
            </p>
          </div>
          <div className="blogs-block">
            <img className="blocks-img" src="./img/blogs-img2.jpg"></img>
            <h2 className="blogs-h2">
              A short break from Social Media is important.
            </h2>
            <p className="blogs-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam.
            </p>
          </div>
          <div className="blogs-block">
            <img className="blocks-img" src="./img/blogs-img3.jpg"></img>
            <h2 className="blogs-h2">How to be 1% Better Every Day</h2>
            <p className="blogs-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam.
            </p>
          </div>
        </div>
        <Button
          border="none"
          label="Read more blogs"
          position="relative"
          left="595px"
        />
      </div>
      <div className="homepage-free-guide">
        <h1 className="free-guide-h1">
          Don’t miss out on my ‘Live life at the full potential’ free guide
        </h1>
        <p className="free-guide-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua minim
          veniam.
          <br /> <br /> Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
          ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo.
        </p>
        <Button
          border="none"
          label="Read more blogs"
          position="relative"
          left="152px"
          bottom="280px"
          width="250px"
        />
        <img
          className="free-guide-img-one"
          src="./img/free-guide-one.jpg"
        ></img>
        <Button
          border="none"
          label="Free guide!"
          position="relative"
          left="532px"
          bottom="810px"
          width="96px"
          height="96px"
          borderRadius="100px"
        />
      </div>
      <div className="cta-section">
        <div className="cta-div">
          <h1 className="cta-h1">
            Get 15-Minutes Complimentary online session.
          </h1>
          <p className="cta-p">Limited Period Offer. Claim Now.</p>
          <Button
            border="none"
            label="Book now"
            position="relative"
            left="64px"
            bottom="270px"
            width="250px"
          />
          <img className="cta-img-one" src="./img/cta-one.jpg"></img>
        </div>
      </div>
      <div className="footer-section">
        <div className="footer-section-one">
          <div className="footer-text">
            <h1 className="h1-footer">
              Get notified when I publish new articles
            </h1>
            <p className="p-footer">
              Stay up to date with the latest news, announcements, and articles.
            </p>
            <Input
              width="280px"
              height="30px"
              position="relative"
              left="720px"
              bottom="80px"
              fontSize="18px"
              borderRadius="10px"
              border="1px solid #4A556C"
              placeholder="Enter your email"
              color="#4A556C"
            />
            <Button
              border="none"
              label="Subscribe"
              position="relative"
              left="732px"
              bottom="82px"
              width="150px"
              height="33px"
            />
          </div>
          <div className="footer-section-two">
            <div className="footer-div-one">
              <img className="footer-logo" src="./img/Logo.png"></img>
              <p className="footer-p">
                Design amazing digital experiences that create more happy in the
                world.
              </p>
            </div>
            <div className="footer-div-two">
              <h1 className="footer-div-h1"> Pages</h1>
              <p className="footer-div-p">Home</p>
              <p className="footer-div-p">Services</p>
              <p className="footer-div-p">About us</p>
              <p className="footer-div-p">Extra Sales/Landing page</p>
              <p className="footer-div-p">Free guide</p>
            </div>
            <div className="footer-div-two">
              <h1 className="footer-div-h1"> Contact</h1>
              <p className="footer-div-p">+123 456 789</p>
              <p className="footer-div-p">hello@happydigital.nl</p>
              <p className="footer-div-p">Instagram</p>
              <p className="footer-div-p">Linkedin</p>
              
            </div>
           
          </div> 
          <div className="footer-line"></div>
          <div className="footer-social">
            <img className="social-icon-img" src="./img/social-icon-one.jpg"></img>
            <img className="social-icon-img" src="./img/social-icon-two.jpg"></img>
            <img className="social-icon-img" src="./img/social-icon-three.jpg"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
