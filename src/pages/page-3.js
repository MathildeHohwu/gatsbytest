import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./bulma.css"

function Beregn(){
const km = document.getElementById("km").value; 
const gco2 = km * 500;
if (gco2 > 200) {
  document.getElementById("aftryk").innerHTML = "UPS Dit daglige co2 aftryk er allerede :" + gco2 + " g"
  document.getElementById("info").classList.remove("is-primary")
  document.getElementById("info").classList.add("is-danger")

} else {
  document.getElementById("aftryk").innerHTML = "Dit daglige co2 aftryk er foreløbig kun :" + gco2 + " g"
  document.getElementById("info").classList.add("is-primary")
  document.getElementById("info").classList.remove("is-danger")

}

}
const side3 = () => (
  <Layout>
    <SEO title="Side 3" />
    <h1>Velkommen til Co2 beregner</h1>
    <section id="info" class="hero is-primary">
      <p id="aftryk">  Dit daglige co2 aftryk er indtil videre : 0g </p>
      <br/>
    </section> 
    <input type="text" class="input is-primary" id="km"/>
    <button onClick= {Beregn}>Klik mig</button>
    <Link to="/">Tilbage til start</Link>
  </Layout>
)

export default side3
