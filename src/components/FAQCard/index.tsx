import { useState } from 'react';
import './index.css';

export interface FAQCardType {
  question: string;
  answer: string;
}

function FAQCard({ question, answer }: FAQCardType) {
  const [isActive, setIsActive] = useState(false);

  const onClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="faq-card">
      <div className="title">
        <div>{question}</div>
        <div
          className={`faq-collapse-icon ${isActive ? 'active' : ''}`}
          onClick={onClick}
        >
          <div className="line"></div>
        </div>
      </div>
      {isActive && (
        <div className="content">
          <p>{`${answer}`}</p>
        </div>
      )}
    </div>
  );
}

export default FAQCard;
