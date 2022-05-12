import React from "react";
import Footer from "../Footer/Footer";
import arrow from "../../Images/Arrow_icon.svg.png";
import './Quiz.css';
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif&family=Open+Sans&family=Poppins:wght@300&family=Roboto:wght@300;500&family=Rubik:wght@500&display=swap" rel="stylesheet"></link>

const Quiz = () => {
    return (
      <>
        <div>
            <div className="box">
                <div className="question"><p>1. Who is the father of C language?</p></div>
                <div className="option-box">
                    <div className="option">{"a) Steve Jobs"}</div>
                    <div className="option">{"b) James Gosling"}</div>
                    <div className="option">{"c) Dennis Ritchie"}</div>
                    <div className="option">{"d) Rasmus Lerdorf"}</div>
                </div>
            </div>

            <div className="box">
                <div className="question"><p>2. Which of the following is not a valid?</p></div>
                <div className="option-box">
                    <div className="option">{"a) int number;"}</div>
                    <div className="option">{"b) float rate;"}</div>
                    <div className="option">{"c) int variable_count;"}</div>
                    <div className="option">{"d) int $main;"}</div>
                </div>
            </div>

            <div className="box">
                <div className="question"><p>3. All keywords in C are in ____________</p></div>
                <div className="option-box">
                    <div className="option">{"a) LowerCase letters"}</div>
                    <div className="option">{"b) UpperCase letters"}</div>
                    <div className="option">{"c) CamelCase letters"}</div>
                    <div className="option">{"d) None of the mentioned"}</div>
                </div>
            </div>

            <div className="box">
                <div className="question"><p>4. Which of the following cannot be a variable name in C?</p></div>
                <div className="option-box">
                    <div className="option">{"a) volatile"}</div>
                    <div className="option">{"b) true"}</div>
                    <div className="option">{"c) friend"}</div>
                    <div className="option">{"d) export"}</div>
                </div>
            </div>

            <div className="box">
                <div className="question"><p>5. Where in C the order of precedence of operators do not exist?</p></div>
                <div className="option-box">
                    <div className="option">{"a) Within conditional statements, if, else"}</div>
                    <div className="option">{"b) Within while, do-while"}</div>
                    <div className="option">{"c) Within a macro definition"}</div>
                    <div className="option">{"d) None of the mentioned"}</div>
                </div>
            </div>

        </div>

        <div onClick={click1}>
            <img src={arrow} alt="" />
        </div>

        <div onClick={click0}>
            <img src={arrow} alt="" />
        </div>

        <Footer />
    </>
    )
}

export default Quiz