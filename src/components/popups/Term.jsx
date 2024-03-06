import React from "react";
import Cross from "../../images/cross.png";
const Term = ({ setTerm, termData }) => {
  return (
    <>
      <div className="terms">
        <div className="terms_heading">
          <h6>Terms of Service</h6>
          <div className="term_cross_icon">
            <img
              src={Cross}
              alt=""
              onClick={() => {
                setTerm(false);
                document.body.style.overflow = "visible";
              }}
            />
          </div>
        </div>
        <div className="term_paragraph">
          <p>
            {termData}
            {/* Welcome to Tenner App, your go-to destination for unlocking a world
            of gastronomic delights without breaking the bank! By using our
            platform, you are agreeing to these Terms of Service, which outline
            the guidelines for an exceptional culinary experience. To embark on
            this flavorful journey, ensure you meet the eligibility requirements
            and register an account with accurate information. Our commitment to
            providing the best food deals means that while we strive for
            accuracy in deal information, availability may vary. Rest assured,
            your transactions are securely processed to guarantee a seamless and
            protected payment experience. We encourage users to explore the
            diverse array of food deals available, but also expect responsible
            and lawful conduct. Engaging in any unauthorized or abusive
            activities is strictly prohibited. Your account security is of
            utmost importance, so please promptly report any unauthorized use. */}
          </p>
        </div>
      </div>
    </>
  );
};

export default Term;
