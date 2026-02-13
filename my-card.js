import { LitElement, html, css } from 'lit';

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Default Title";
    this.img = "https://via.placeholder.com/400x250.png?text=Default+Image";
    this.backgroundColor = "#000000";
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host { 
        display: inline-block;
        }
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 10px;
  width: 400px;
  display: inline-block; 
  text-align: center;
  padding: 8px;
  margin: 8px;
  height: 560px;       
  vertical-align: top;
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
  text-align: center;
  text-family: Times New Roman;
  padding: 2px 16px;
}

.button {
  display: inline-block;
  margin-bottom: 20px;
  padding: 10px 18px;
  background-color: #FFFFFF;
  color: #000000;
  border-radius: 12px;
  font-weight: bold;
  text-align: center;
}
  
details[open] summary {
  font-weight: bold;
}
  details summary {
  text-align: left;
  font-size: 20px;
  padding: 8px 0;
}
  details div {
  border: 2px solid black;
  text-align: left;
  padding: 8px;
  height: 70px;
  overflow: auto;
  text-indent: 20px;
}
  :host([fancy]) .card {
      border: 4px solid black;
      box-shadow: 5px 5px 5px black;
    }
    `;
  }

  openChanged(e) {
  if (e.target.getAttribute('open') !== null) {
    this.fancy = true;
  } else {
    this.fancy = false;
  }
}

  render() {
    return html`
  <div 
    class="card"
    style="background-color: ${this.backgroundColor};"
    >
    <img src = "${this.img}" alt="${this.title}">
      <div class="header">
        <h1><b>${this.title}</b></h1>
  </div>

  <div class="body">
    <details ?open="${this.fancy}" @toggle="${this.openChanged}">
  <summary>Description</summary>
  <div>
    <slot>${this.description}</slot>
  </div>
</details>
    
    <a 
    href="https://hax.psu.edu/" 
    target="_blank" 
    class="button"
    >
        Details
      </a>
    </div>
  </div>
  `;
  }

  static get properties() {
    return {
      title: { type: String },
      img: { type: String },
      backgroundColor: { type: String },
      fancy: { type: Boolean, reflect: true }
    };
  }
}

customElements.define(MyCard.tag, MyCard);