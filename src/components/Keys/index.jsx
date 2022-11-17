import React from "react";
import "./keys.css";
const Keys = () => {
  return (
    <section className="container keys-wrap">
      <h1 className="dm-sans-font key-title">Keys</h1>
      <div className="keys items-flex">
        <div className="keys-section">
          <div className="actual-keys">
            <div className="key1 ">
              <div className="key-items-wrap items-flex">
                <div className="key-items items-flex">
                  <p className="key-content">*********************Kw3UH</p>
                  <div className="key-hide-eye">
                    <img src="imgs/eye.svg" alt="" />
                  </div>
                </div>
                <div className="copy-share-img">
                  <img src="imgs/copy-share.svg" alt="" />
                </div>
              </div>
              <div className="key-buttons items-flex">
                <p className="rev">Revoke</p>
                <div className="key-sts items-flex">
                  <p>Statistics</p>
                  <div className="key-arrow">
                    <img src="imgs/up-vertical-arrow.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="key2">
              <div className="key-items-wrap items-flex">
                <div className="key-items items-flex">
                  <p className="key-content">*********************Kw3UH</p>
                  <div className="key-hide-eye">
                    <img src="imgs/eye.svg" alt="" />
                  </div>
                </div>
                <div className="copy-share-img">
                  <img src="imgs/copy-share.svg" alt="" />
                </div>
              </div>
              <div className="key-buttons items-flex">
                <p className="rev">Revoke</p>
                <div className="key-sts items-flex">
                  <p>Statistics</p>
                  <div className="key-arrow">
                    <img src="imgs/up-vertical-arrow.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="new-key-button"> + New Key</div>
        </div>
        <div className="keys-desc-wrap">
          <div className="keys-desc">
            <h1 className="keys-desc-title">
              Keep keys private Keep keys safe
            </h1>
            <p className="keys-desc-p">
              Follow recommendations to keep keys safe
            </p>
            <p className="keys-desc-p">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Keys;
