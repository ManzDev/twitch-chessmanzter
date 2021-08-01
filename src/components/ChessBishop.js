class ChessBishop extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return `
    .bishop {
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
    :host-context(body.view3d) .bishop {
      transform: translateZ(40px) rotateX(-65deg);
    }
      .bishop .head {
        width: 25%;
        height: 25%;
        border-radius: 50%;
        background: var(--dark-color);
        transform: translateY(10%);
        display: flex;
        justify-content: center;
    }
      .bishop .head .gap {
        background: var(--light-color);
        width: 50%;
        height: 3px;
        border-radius: 0 2px 2px 0;
        position: absolute;
        transform: translate(-4px, 6px) rotate(50deg);
    }
      .bishop .head::before {
        content: "";
        display: block;
        background: var(--dark-color);
        width: 50%;
        height: 50%;
        clip-path: polygon(50% 0, -4% 50%, 0 100%, 100% 100%, 104% 50%);
        transform: translateY(-4px);
    }
      .bishop .head::after {
        content: "";
        display: block;
        background: var(--dark-color);
        width: 25%;
        height: 25%;
        border-radius: 50%;
        position: absolute;
        transform: translateY(-8px);
        z-index: 5;
    }
      .bishop .neck {
        width: 20%;
        height: 10px;
        background: var(--light-color);
    }
      .bishop .neck::before, .bishop .neck::after {
        content: "";
        display: block;
        width: 120%;
        height: 5px;
        background: var(--dark-color);
        border-radius: 2px;
    }
      .bishop .neck::before {
        transform: translateX(-10%);
    }
      .bishop .neck::after {
        width: 140%;
        transform: translateX(-15%);
        background: var(--light-color);
    }
      .bishop .body {
        width: 40px;
        height: 28px;
        background: var(--dark-color);
        clip-path: polygon(25% 0, 75% 0, 85% 100%, 15% 100%);
    }
      .bishop .base {
        width: 40px;
        height: 20px;
        background: var(--light-color);
        border-radius: 15% 15% 0 0 / 25% 25% 0 0;
    }
      .bishop .base::before, .bishop .base::after {
        content: "";
        display: block;
        width: 110%;
        height: 5px;
        background: var(--dark-color);
    }
      .bishop .base::before {
        transform: translate(-5%, 125%);
        border-radius: 2px;
    }
      .bishop .base::after {
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
    <style>${ChessBishop.styles}</style>
    <div class="piece bishop">
      <div class="head">
        <div class="gap"></div>
      </div>
      <div class="neck"></div>
      <div class="body"></div>
      <div class="base"></div>
    </div>`;
  }
}

customElements.define("chess-bishop", ChessBishop);
