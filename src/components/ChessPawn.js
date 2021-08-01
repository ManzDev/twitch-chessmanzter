class ChessPawn extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return `
    .pawn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 100px;
      filter: var(--glow-shape);
    }
    :host-context(body.view3d) .pawn {
      transform: translateZ(30px) rotateX(-65deg);
    }
    .pawn .head {
      width: 25%;
      height: 25%;
      border-radius: 50%;
      background: var(--dark-color);
      transform: translateY(10%);
    }
    .pawn .neck {
      width: 20%;
      height: 10px;
      background: var(--light-color);
    }
    .pawn .neck::before, .pawn .neck::after {
      content: "";
      display: block;
      width: 120%;
      height: 5px;
      background: var(--dark-color);
      border-radius: 2px;
    }
    .pawn .neck::before {
      transform: translateX(-10%);
    }
    .pawn .neck::after {
      width: 140%;
      transform: translateX(-15%);
      background: var(--light-color);
    }
    .pawn .body {
      width: 40px;
      height: 20px;
      background: var(--dark-color);
      clip-path: polygon(25% 0, 75% 0, 85% 100%, 15% 100%);
    }
    .pawn .base {
      width: 40px;
      height: 20px;
      background: var(--light-color);
      border-radius: 15% 15% 0 0 / 25% 25% 0 0;
    }
    .pawn .base::before, .pawn .base::after {
      content: "";
      display: block;
      width: 110%;
      height: 5px;
      background: var(--dark-color);
    }
    .pawn .base::before {
      transform: translate(-5%, 125%);
      border-radius: 2px;
    }
    .pawn .base::after {
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
    <style>${ChessPawn.styles}</style>
    <div class="black piece pawn">
      <div class="head"></div>
      <div class="neck"></div>
      <div class="body"></div>
      <div class="base"></div>
    </div>`;
  }
}

customElements.define("chess-pawn", ChessPawn);
