import React from 'react';


const Body = () => {
  return (
    <main className="main">
      <img src="images/img_main_pumpkin.png" alt="pumpkin" className="main-img" />

      <section className="section">
        <div className="vegetables-section">
          <h2>Vegetables</h2>
          <div className="img-vegetable">
            {['carrot', 'corn', 'pepper'].map((veg) => (
              <img key={veg} src={`images/img_vegetables_${veg}.png`} alt={veg} className="vegetables-images" />
            ))}
          </div>
        </div>
        <div className="contact-section">
          <h2>Contact</h2>
          <div className="contact-text">
            <p className="text1">
              For any questions or suggestions about Vegetables, Vegetables Club, or your online order, you can contact Vegetables Customer Service by phone, email, or post, and we’ll be happy to help.
            </p>
            <hr />
            <p className="text2">
              E-mail: Vegetables@aaabbccc.com <br /> PHONE: +886-123-456-789
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Body;
