class ChessQueen extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return `
    .queen {
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
    :host-context(body.view3d) .queen {
      transform: translateZ(40px) rotateX(-65deg);
    }
      .queen .head-container {
        width: 30%;
        height: 20%;
        position: relative;
    }
      .queen .head-container .head {
        width: 100%;
        height: 100%;
        background: var(--dark-color);
        clip-path: polygon(25% 100%, 0 15%, 15% 0, 85% 0, 100% 15%, 75% 100%);
    }
      .queen .head-container .semi-circle {
        background: var(--dark-color);
        border-radius: 50%;
        width: 45%;
        height: 65%;
        position: absolute;
        z-index: 5;
        transform: translate(60%, -30%);
    }
      .queen .head-container .little-ball {
        background: var(--dark-color);
        border-radius: 50%;
        width: 15%;
        height: 20%;
        position: absolute;
        transform: translate(285%, -180%);
    }
      .queen .neck {
        width: 20%;
        height: 10px;
        background: var(--light-color);
    }
      .queen .neck::before, .queen .neck::after {
        content: "";
        display: block;
        width: 120%;
        height: 5px;
        background: var(--dark-color);
        border-radius: 2px;
    }
      .queen .neck::before {
        transform: translateX(-10%);
    }
      .queen .neck::after {
        width: 140%;
        transform: translateX(-15%);
        background: var(--light-color);
    }
      .queen .body {
        width: 40px;
        height: 38px;
        background: var(--dark-color);
        clip-path: polygon(30% 0, 70% 0, 85% 100%, 15% 100%);
    }
      .queen .base {
        width: 40px;
        height: 20px;
        background: var(--light-color);
        border-radius: 15% 15% 0 0 / 25% 25% 0 0;
    }
      .queen .base::before, .queen .base::after {
        content: "";
        display: block;
        width: 110%;
        height: 5px;
        background: var(--dark-color);
    }
      .queen .base::before {
        transform: translate(-5%, 125%);
        border-radius: 2px;
    }
      .queen .base::after {
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
    <style>${ChessQueen.styles}</style>
    <div class="piece queen">
      <div class="head-container">
        <div class="little-ball"></div>
        <div class="semi-circle"></div>
        <div class="head"></div>
      </div>
      <div class="neck"></div>
      <div class="body"></div>
      <div class="base"></div>
    </div>`;
  }
}

customElements.define("chess-queen", ChessQueen);
