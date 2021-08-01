class ChessRook extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return `
      .rook {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100px;
        filter: var(--glow-shape);
      }
      :host-context(body.view3d) .rook {
        transform: translateZ(30px) rotateX(-65deg);
      }
      .rook .head {
        display: flex;
        justify-content: space-between;
        width: 28%;
        height: 10%;
        background: linear-gradient(to bottom, transparent 65%, var(--light-color) 65%);
    }
      .rook .head .left {
        width: 20%;
        height: 100%;
        background: var(--light-color);
        border-radius: 2px 0 0 0;
    }
      .rook .head .right {
        width: 70%;
        height: 100%;
        background: var(--light-color);
        border-radius: 0 2px 0 0;
    }
      .rook .neck {
        width: 20%;
        height: 10px;
        background: var(--light-color);
    }
      .rook .neck::before, .rook .neck::after {
        content: "";
        display: block;
        width: 130%;
        height: 5px;
        background: var(--dark-color);
        border-radius: 2px;
    }
      .rook .neck::before {
        width: 160%;
        transform: translateX(-20%);
    }
      .rook .neck::after {
        transform: translateX(-12%);
        background: var(--light-color);
        border-radius: 0 0 2px 2px;
    }
      .rook .body {
        width: 40px;
        height: 35px;
        background: var(--dark-color);
        clip-path: polygon(23% 0, 77% 0, 80% 100%, 20% 100%);
    }
      .rook .base {
        width: 40px;
        height: 20px;
        background: var(--light-color);
        border-radius: 15% 15% 0 0 / 25% 25% 0 0;
    }
      .rook .base::before, .rook .base::after {
        content: "";
        display: block;
        width: 110%;
        height: 5px;
        background: var(--dark-color);
    }
      .rook .base::before {
        transform: translate(-5%, 125%);
        border-radius: 2px;
    }
      .rook .base::after {
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
    <style>${ChessRook.styles}</style>
    <div class="piece rook">
      <div class="head">
        <div class="left"></div>
        <div class="right"></div>
      </div>
      <div class="neck"></div>
      <div class="body"></div>
      <div class="base"></div>
    </div>`;
  }
}

customElements.define("chess-rook", ChessRook);
