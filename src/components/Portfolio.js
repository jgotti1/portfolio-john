import React from "react";
import "./Portfolio.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import monkey from "../images/MonkeyGame.png";
import dice from "../images/dice.png";
import poppy from "../images/poppy.png";
import number from "../images/number.png";
import ravm from "../images/RAVM.png";
import selfie from "../images/selfie.png";

function Portfolio() {
  return (
    <section>
      <h5 className="offer">Take a Look</h5>
      <h2 className="portfolio_title">Some of my Work</h2>
      <h5 className="call">Call or contact me for help with your next project</h5>
      <div className="container portfolio_container ">
        {/* card section */}
        <article className="card">
          <div className="card_photo">
            <a href="https://monkeygame.margottiworld.com/" target="_blank" rel="noreferrer">
              <img src={monkey} alt="Monkey Game" />
            </a>

            <h2>Crazy Monkey</h2>
            <p className="try">Click on the game image above to try it out.</p>
            <div className="code_link">
              <a className="code_link_icon" target="_blank" rel="noreferrer" href="https://github.com/jgotti1/CatchTheMonkey">
                <AiFillGithub />
              </a>
              <p className="code_click">Click Icon to left for code link </p>
            </div>
          </div>
          <ul className="details_list">
            <li>
              <p>
                <p>
                  <BsFillArrowRightCircleFill className="portfolio_list-icon" />
                </p>
              </p>
              <p>
                Mobile Device Friendly: <strong>NO</strong>
              </p>
            </li>
            <li>
              <p>
                <p>
                  <BsFillArrowRightCircleFill className="portfolio_list-icon" />
                </p>
              </p>
              <p>Language: JavaScript, HTML, CSS</p>
            </li>

            <li>
              <p>
                <p>
                  <BsFillArrowRightCircleFill className="portfolio_list-icon" />
                </p>
              </p>
              <p>Project Type: JavaScript Game</p>
            </li>
            <li>
              <p>
                <p>
                  <BsFillArrowRightCircleFill className="portfolio_list-icon" />
                </p>
              </p>
              <p>My first milestone project at NJIT. Challenging but fun to create. </p>
            </li>
            <li>
              <p>
                <p>
                  <BsFillArrowRightCircleFill className="portfolio_list-icon" />
                </p>
              </p>
              <p>Feed the crazy monkey as many banannas as you can before time expires. NOT Mobile Device friendly. Try it out.</p>
            </li>
          </ul>
        </article>
        {/* End of card */}
        {/* card section 2*/}
        <article className="card">
          <div className="card_photo">
            <a href="https://dicegame.margottiworld.com/" target="_blank" rel="noreferrer">
              <img src={dice} alt="Dice Game" />
            </a>

            <h2>Dice Mania</h2>
            <p className="try">Click on the game image above to try it out.</p>
            <div className="code_link">
              <a className="code_link_icon" target="_blank" rel="noreferrer" href="https://github.com/jgotti1/DiceRoll100.git">
                <AiFillGithub />
              </a>
              <p className="code_click">Click Icon to left for code link </p>
            </div>
          </div>
          <ul className="details_list">
            <li>
              <p>
                <p>
                  <BsFillArrowRightCircleFill className="portfolio_list-icon" />
                </p>
              </p>
              <p>
                Mobile Device Friendly: <strong>NO</strong>
              </p>
            </li>
            <li>
              <p>
                <p>
                  <BsFillArrowRightCircleFill className="portfolio_list-icon" />
                </p>
              </p>
              <p>Language: JavaScript, HTML, CSS</p>
            </li>

            <li>
              <p>
                <p>
                  <BsFillArrowRightCircleFill className="portfolio_list-icon" />
                </p>
              </p>
              <p>Project Type: JavaScript Game</p>
            </li>
            <li>
              <p>
                <p>
                  <BsFillArrowRightCircleFill className="portfolio_list-icon" />
                </p>
              </p>
              <p>A project I did to practice my Javascript skills. </p>
            </li>
            <li>
              <p>
                <p>
                  <BsFillArrowRightCircleFill className="portfolio_list-icon" />
                </p>
              </p>
              <p>A two player game. Roll the dice, the first player to reach 100 before rolling a 1 wins. NOT Mobile Device friendly. Try it out.</p>
            </li>
          </ul>
        </article>
        {/* End of card 2 */}
        {/* card section 3  */}
        <article className="card">
          <div className="card_photo">
            <a href="https://poppymatch.margottiworld.com/" target="_blank" rel="noreferrer">
              <img src={poppy} alt="Monkey Game" />
            </a>

            <h2>Poppy Playtime Match</h2>
            <p className="try">Click on the game image above to try it out.</p>
            <div className="code_link">
              <a className="code_link_icon" target="_blank" rel="noreferrer" href="https://github.com/jgotti1/React-Memory-Game.git">
                <AiFillGithub />
              </a>
              <p className="code_click">Click Icon to left for code link </p>
            </div>
          </div>
          <ul className="details_list">
            <li>
              <p>
                <p>
                  <BsFillArrowRightCircleFill className="portfolio_list-icon" />
                </p>
              </p>
              <p>
                Mobile Device Friendly: <strong>YES</strong>
              </p>
            </li>
            <li>
              <p>
                <p>
                  <BsFillArrowRightCircleFill className="portfolio_list-icon" />
                </p>
              </p>
              <p>Language: React, JavaScript, CSS</p>
            </li>

            <li>
              <p>
                <p>
                  <BsFillArrowRightCircleFill className="portfolio_list-icon" />
                </p>
              </p>
              <p>Project Type: React JavaScript Game</p>
            </li>
            <li>
              <p>
                <p>
                  <BsFillArrowRightCircleFill className="portfolio_list-icon" />
                </p>
              </p>
              <p>"A React JS project I did for my grandson. </p>
            </li>
            <li>
              <p>
                <p>
                  <BsFillArrowRightCircleFill className="portfolio_list-icon" />
                </p>
              </p>
              <p>Did this match game project for my grandson when "Poppy Playtime" was popular. Try it out, enjoy!.</p>
            </li>
          </ul>
        </article>
        {/* End of card 3 */}
        {/* card section 4  */}
        <article className="card">
          <div className="card_photo">
            <a href="https://pickanumber.margottiworld.com/" target="_blank" rel="noreferrer">
              <img src={number} alt="Monkey Game" />
            </a>

            <h2>Guess my Number</h2>
            <p className="try">Click on the game image above to try it out.</p>
            <div className="code_link">
              <a className="code_link_icon" target="_blank" rel="noreferrer" href="https://github.com/jgotti1/PickANumber.git">
                <AiFillGithub />
              </a>
              <p className="code_click">Click Icon to left for code link </p>
            </div>
          </div>
          <ul className="details_list">
            <li>
              <p>
                <p>
                  <BsFillArrowRightCircleFill className="portfolio_list-icon" />
                </p>
              </p>
              <p>
                Mobile Device Friendly: <strong>NO</strong>
              </p>
            </li>
            <li>
              <p>
                <p>
                  <BsFillArrowRightCircleFill className="portfolio_list-icon" />
                </p>
              </p>
              <p>Language: JavaScript, CSS, HTML</p>
            </li>

            <li>
              <p>
                <p>
                  <BsFillArrowRightCircleFill className="portfolio_list-icon" />
                </p>
              </p>
              <p>Project Type: JavaScript Game</p>
            </li>
            <li>
              <p>
                <p>
                  <BsFillArrowRightCircleFill className="portfolio_list-icon" />
                </p>
              </p>
              <p>A basic Javascript game I put together to practice my JS skills. </p>
            </li>
            <li>
              <p>
                <p>
                  <BsFillArrowRightCircleFill className="portfolio_list-icon" />
                </p>
              </p>
              <p>Guess the number between 1-20 you have 20 guesses so god luck ! Try it out.</p>
            </li>
          </ul>
        </article>
        {/* End of card 4*/}

        {/* card section 5  */}
        <article className="card">
          <div className="card_photo">
            <a href="https://ravmdesign.com/" target="_blank" rel="noreferrer">
              <img src={ravm} alt="" />
            </a>
            <h2>RAVM Construction</h2>
            <p className="try">Click on the image above to see this site.</p>
            <div className="code_link">
              <a className="code_link_icon" target="_blank" rel="noreferrer" href="https://github.com/jgotti1/ravm_comstruction.git">
                <AiFillGithub />
              </a>
              <p className="code_click">Click Icon to left for code link </p>
            </div>
          </div>
          <ul className="details_list">
            <li>
              <p>
                <p>
                  <BsFillArrowRightCircleFill className="portfolio_list-icon" />
                </p>
              </p>
              <p>
                Mobile Device Friendly: <strong>YES</strong>
              </p>
            </li>
            <li>
              <p>
                <p>
                  <BsFillArrowRightCircleFill className="portfolio_list-icon" />
                </p>
              </p>
              <p>Language: React, Javascript, CSS</p>
            </li>

            <li>
              <p>
                <p>
                  <BsFillArrowRightCircleFill className="portfolio_list-icon" />
                </p>
              </p>
              <p>Project Type: Contractor company web site</p>
            </li>
            <li>
              <p>
                <p>
                  <BsFillArrowRightCircleFill className="portfolio_list-icon" />
                </p>
              </p>
              <p>A multi-page web site I put together and hosted for a local contractor . </p>
            </li>
            <li>
              <p>
                <p>
                  <BsFillArrowRightCircleFill className="portfolio_list-icon" />
                </p>
              </p>
              <p>Local contractor that does awesome work needed a web site so here it is. Check it out.</p>
            </li>
          </ul>
        </article>
        {/* End of card 5*/}
        {/* card section 6  */}
        <article className="card">
          <div className="card_photo">
            <a href="https://noahryleigh.margottiworld.com/" target="_blank" rel="noreferrer">
              <img src={selfie} alt="selfie page" />
            </a>
            <h2>Selfies with Noah and Ryleigh</h2>
            <p className="try">Click on the image above to see this site.</p>
            <div className="code_link">
              <a className="code_link_icon" target="_blank" rel="noreferrer" href="https://github.com/jgotti1/Noah-Ryleigh-Selfie.git">
                <AiFillGithub />
              </a>
              <p className="code_click">Click Icon to left for code link </p>
            </div>
          </div>
          <ul className="details_list">
            <li>
              <p>
                <p>
                  <BsFillArrowRightCircleFill className="portfolio_list-icon" />
                </p>
              </p>
              <p>
                Mobile Device Friendly: <strong>YES</strong>
              </p>
            </li>
            <li>
              <p>
                <p>
                  <BsFillArrowRightCircleFill className="portfolio_list-icon" />
                </p>
              </p>
              <p>Language: React, Javascript, CSS</p>
            </li>

            <li>
              <p>
                <p>
                  <BsFillArrowRightCircleFill className="portfolio_list-icon" />
                </p>
              </p>
              <p>Project Type: Personal photo site</p>
            </li>
            <li>
              <p>
                <p>
                  <BsFillArrowRightCircleFill className="portfolio_list-icon" />
                </p>
              </p>
              <p>A multi-page web site I put together to display selfies with my two grandchildren. </p>
            </li>
            <li>
              <p>
                <p>
                  <BsFillArrowRightCircleFill className="portfolio_list-icon" />
                </p>
              </p>
              <p>I had a phone full of selfies with the grand kids so why not build a web site to put them on display. Check it out !</p>
            </li>
          </ul>
        </article>
        {/* End of card 5*/}

        {/* LAST card section */}
        <article className="last_card card">
          <div className="card_photo">
            <a href="https://monkeygame.margottiworld.com/">
              <img src={monkey} alt="Monkey Game" />
            </a>

            <h2>Crazy Monkey</h2>
            <p className="try">Click on the game image above to try it out.</p>
            <div className="code_link">
              <a className="code_link_icon" target="_blank" rel="noreferrer" href="https://github.com/jgotti1/CatchTheMonkey">
                <AiFillGithub />
              </a>
              <p className="code_click">Click Icon to left for code link </p>
            </div>
          </div>
          <ul className="details_list">
            <li>
              <p>
                <p>
                  <BsFillArrowRightCircleFill className="portfolio_list-icon" />
                </p>
              </p>
              <p>Language: JavaScript, HTML, CSS</p>
            </li>

            <li>
              <p>
                <p>
                  <BsFillArrowRightCircleFill className="portfolio_list-icon" />
                </p>
              </p>
              <p>Project Type: JavaScript Game</p>
            </li>
            <li>
              <p>
                <p>
                  <BsFillArrowRightCircleFill className="portfolio_list-icon" />
                </p>
              </p>
              <p>My first milestone project at NJIT. Challenging but fun to create. </p>
            </li>
            <li>
              <p>
                <p>
                  <BsFillArrowRightCircleFill className="portfolio_list-icon" />
                </p>
              </p>
              <p>Feed the crazy monkey as many banannas as you can before time expires. Try it out, enjoy!.</p>
            </li>
          </ul>
        </article>
        {/* End of LAST card */}
      </div>
    </section>
  );
}

export default Portfolio;
