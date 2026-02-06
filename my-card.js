import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "College of IST";
    this.img = "https://ist.psu.edu/assets/uploads/hero-images/westgate.jpg";
    this.backgroundColor = "#27C5F5";
    this.textColor = "#000000";
    this.buttonColor = "#ABA9A9";
    this.list = "Majors Offered:";
  }

  static get styles() {
    return css`
      :host { 
        display: block;
      }
        .card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 10px;
  width: 400px; height:635px;
  background-color: #27C5F5;
  padding: 8px;
  margin: 8px;
}

img {
  border-radius: 10px;
  height: 250px;
}

.header {
  padding: 2px 16px;
  text-align: center;
}

.body {
  text-align: left;
}

.button {
  display: inline-block;
  margin-bottom: 20px;
  padding: 10px 18px;
  background-color: #ABA9A9;
  color: #000000;
  border-radius: 12px;
  font-weight: bold;
  text-align: center;
}
    `;
  }

  render() {
    return html`<div class="card">

    <img src = "${this.img}" alt= "IST">

  <div class="header">
    <h1><b>${this.title}</b></h1>
  </div>

  <div class="body">
    <p><b>Majors Offered:</b></p>
      <ul>
        <li>Artificial Intelligence Methods and Applications</li>
        <li>Cybersecuirty Analytics and Operations</li>
        <li>Data Sciences</li>
        <li>Enterprise Technology Integration</li>
        <li>Human-Centered Design and Development</li>
        <li>Information Sciences and Technology</li>
        <li>Information Technology Ethics and Compliance</li>
        <li>Secuirty Risk Analysis</li>
    </ul>
    
    <a 
    href="https://hax.psu.edu/" 
    target="_blank" 
    class="button"
    >
      Details
    </a>
  </div>
  </div>`;
  }

  static get properties() {
    return {
      title: { type: String },
      img: { type: String },
      backgroundColor: { type: String },
      textColor: { type: String },
      buttonColor: { type: String },
      list: { type: String },
    };
  }
}

customElements.define(MyCard.tag, MyCard);