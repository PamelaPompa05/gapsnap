import React, { useState, useRef, useEffect } from "react";
import "../styles/FAQ.css";

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);
    const [height, setHeight] = useState("0px");

    useEffect(() => {
        if (isOpen) {
            setHeight(`${contentRef.current.scrollHeight}px`);
        } else {
            setHeight("0px");
        }
    }, [isOpen]);

    return (
        <div className={`faq-item ${isOpen ? "active" : ""}`}>
            <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
                {question}
                <span className="arrow">▶</span>
            </button>
            <div
                ref={contentRef}
                className="faq-answer"
                style={{ maxHeight: height }}
            >
                {answer}
            </div>
        </div>
    );
};

const FAQ = () => {
    const faqData = [
        { question: "What is GapSnap's Mission?", answer: "GapSnap aims to uncover misconceptions, cognitive load issues, and language barriers, in order to empower educators to deliver targeted, equitable instruction that accelerates learning for every student." },
    ];

    return (
        <div className="FAQ">
            <hr className="section-divider" />
            <h2 style={{ fontSize: "1.6rem" }}>FAQs</h2>
            {faqData.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
        </div>
    );
};

export default FAQ;