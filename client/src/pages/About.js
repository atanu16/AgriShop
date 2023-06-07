import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - AgriShop"}>
      <div className="row contactus"  id="style-1">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Our Team - <br></br>
            Rohit Shaw(20BCS2485) <br></br>Deepjoy Roy(20BCS2486) <br></br>
Subhadip Patra(20BCS2543) <br></br>Avinash Jena(20BCS2690)  

          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
