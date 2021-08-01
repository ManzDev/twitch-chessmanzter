class ChessKing extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return `
    .king {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 100px;
      filter: var(--glow-shape);
      transition: transform 1s;
      will-change: transform;
    }
    :host-context(body.view3d) .king {
      transform: translateZ(41px) rotateX(-65deg);
   }
    .king .head-container {
      width: 25%;
      height: 22%;
      position: relative;
   }
    .king .head-container .head {
      width: 100%;
      height: 100%;
      background: var(--dark-color);
      clip-path: polygon(20% 100%, 0 10%, 50% 0, 100% 10%, 80% 100%);
   }
    .king .head-container .ball {
      width: 20%;
      height: 22%;
      background: var(--dark-color);
      border-radius: 50%;
      position: absolute;
      transform: translate(200%, -50%);
   }
    .king .head-container .cross {
      width: 35%;
      height: 50%;
      position: absolute;
      transform: translate(92%, -120%);
      display: flex;
      justify-content: center;
      align-items: center;
   }
    .king .head-container .cross::before, .king .head-container .cross::after {
      content: "";
      display: block;
      background: var(--dark-color);
      position: absolute;
   }
    .king .head-container .cross::before {
      width: 2px;
      height: 100%;
   }
    .king .head-container .cross::after {
      width: 100%;
      height: 2px;
   }
    .king .neck {
      width: 20%;
      height: 10px;
      background: var(--light-color);
   }
    .king .neck::before, .king .neck::after {
      content: "";
      display: block;
      width: 120%;
      height: 5px;
      background: var(--dark-color);
      border-radius: 2px;
   }
    .king .neck::before {
      transform: translateX(-10%);
   }
    .king .neck::after {
      width: 140%;
      transform: translateX(-15%);
      background: var(--light-color);
   }
    .king .body {
      width: 40px;
      height: 38px;
      background: var(--dark-color);
      clip-path: polygon(25% 0, 75% 0, 85% 100%, 15% 100%);
   }
    .king .base {
      width: 40px;
      height: 20px;
      background: var(--light-color);
      border-radius: 15% 15% 0 0 / 25% 25% 0 0;
   }
    .king .base::before, .king .base::after {
      content: "";
      display: block;
      width: 110%;
      height: 5px;
      background: var(--dark-color);
   }
    .king .base::before {
      transform: translate(-5%, 125%);
      border-radius: 2px;
   }
    .king .base::after {
      transform: translate(-5%, 200%);
      border-radius: 2px 2px 0 0;
   }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <style>${ChessKing.styles}</style>
    <div class="piece king">
      <div class="head-container">
        <div class="cross"></div>
        <div class="ball"></div>
        <div class="head"></div>
      </div>
      <div class="neck"></div>
      <div class="body"></div>
      <div class="base"></div>
    </div>`;
  }
}

customElements.define("chess-king", ChessKing);
