class ChessKnight extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return `
    .knight {
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
    :host-context(body.view3d) .knight {
      transform: translateZ(40px) rotateX(-65deg);
   }
    .knight .head {
      width: 50%;
      height: 50%;
      background: var(--dark-color);
      clip-path: polygon(15% 60%, 25% 25%, 60% 0%, 55% 13%, 69% 22%, 75% 35%, 87% 42%, 85% 51%, 80% 51%, 78% 50%, 84% 53%, 78% 60%, 70% 55%, 55% 51%, 78% 100%, 25% 100%, 20% 60%);
   }
    .knight .body {
      width: 40px;
      height: 12px;
      background: var(--dark-color);
      clip-path: polygon(25% 0, 75% 0, 85% 100%, 15% 100%);
   }
    .knight .base {
      width: 40px;
      height: 20px;
      background: var(--light-color);
      border-radius: 15% 15% 0 0 / 25% 25% 0 0;
   }
    .knight .base::before, .knight .base::after {
      content: "";
      display: block;
      width: 110%;
      height: 5px;
      background: var(--dark-color);
   }
    .knight .base::before {
      transform: translate(-5%, 125%);
      border-radius: 2px;
   }
    .knight .base::after {
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
    <style>${ChessKnight.styles}</style>
      <div class="black piece knight">
      <div class="head"></div>
      <div class="body"></div>
      <div class="base"></div>
    </div>`;
  }
}

customElements.define("chess-knight", ChessKnight);
