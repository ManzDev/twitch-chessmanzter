class n extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return'\n    .pawn {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      width: 100px;\n      height: 100px;\n      filter: var(--glow-shape);\n    }\n    :host-context(body.view3d) .pawn {\n      transform: translateZ(30px) rotateX(-65deg);\n    }\n    .pawn .head {\n      width: 25%;\n      height: 25%;\n      border-radius: 50%;\n      background: var(--dark-color);\n      transform: translateY(10%);\n    }\n    .pawn .neck {\n      width: 20%;\n      height: 10px;\n      background: var(--light-color);\n    }\n    .pawn .neck::before, .pawn .neck::after {\n      content: "";\n      display: block;\n      width: 120%;\n      height: 5px;\n      background: var(--dark-color);\n      border-radius: 2px;\n    }\n    .pawn .neck::before {\n      transform: translateX(-10%);\n    }\n    .pawn .neck::after {\n      width: 140%;\n      transform: translateX(-15%);\n      background: var(--light-color);\n    }\n    .pawn .body {\n      width: 40px;\n      height: 20px;\n      background: var(--dark-color);\n      clip-path: polygon(25% 0, 75% 0, 85% 100%, 15% 100%);\n    }\n    .pawn .base {\n      width: 40px;\n      height: 20px;\n      background: var(--light-color);\n      border-radius: 15% 15% 0 0 / 25% 25% 0 0;\n    }\n    .pawn .base::before, .pawn .base::after {\n      content: "";\n      display: block;\n      width: 110%;\n      height: 5px;\n      background: var(--dark-color);\n    }\n    .pawn .base::before {\n      transform: translate(-5%, 125%);\n      border-radius: 2px;\n    }\n    .pawn .base::after {\n      transform: translate(-5%, 200%);\n      border-radius: 2px 2px 0 0;\n    }\n    '}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`\n    <style>${n.styles}</style>\n    <div class="black piece pawn">\n      <div class="head"></div>\n      <div class="neck"></div>\n      <div class="body"></div>\n      <div class="base"></div>\n    </div>`}}customElements.define("chess-pawn",n);class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return'\n    .knight {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      width: 100px;\n      height: 100px;\n      filter: var(--glow-shape);\n    }\n    :host-context(body.view3d) .knight {\n      transform: translateZ(30px) rotateX(-65deg);\n   }\n    .knight .head {\n      width: 50%;\n      height: 50%;\n      background: var(--dark-color);\n      clip-path: polygon(15% 60%, 25% 25%, 60% 0%, 55% 13%, 69% 22%, 75% 35%, 87% 42%, 85% 51%, 80% 51%, 78% 50%, 84% 53%, 78% 60%, 70% 55%, 55% 51%, 78% 100%, 25% 100%, 20% 60%);\n   }\n    .knight .body {\n      width: 40px;\n      height: 12px;\n      background: var(--dark-color);\n      clip-path: polygon(25% 0, 75% 0, 85% 100%, 15% 100%);\n   }\n    .knight .base {\n      width: 40px;\n      height: 20px;\n      background: var(--light-color);\n      border-radius: 15% 15% 0 0 / 25% 25% 0 0;\n   }\n    .knight .base::before, .knight .base::after {\n      content: "";\n      display: block;\n      width: 110%;\n      height: 5px;\n      background: var(--dark-color);\n   }\n    .knight .base::before {\n      transform: translate(-5%, 125%);\n      border-radius: 2px;\n   }\n    .knight .base::after {\n      transform: translate(-5%, 200%);\n      border-radius: 2px 2px 0 0;\n   }\n    '}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`\n    <style>${e.styles}</style>\n      <div class="black piece knight">\n      <div class="head"></div>\n      <div class="body"></div>\n      <div class="base"></div>\n    </div>`}}customElements.define("chess-knight",e);class t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return'\n    .queen {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      width: 100px;\n      height: 100px;\n      filter: var(--glow-shape);\n    }\n    :host-context(body.view3d) .queen {\n      transform: translateZ(30px) rotateX(-65deg);\n    }\n      .queen .head-container {\n        width: 30%;\n        height: 20%;\n        position: relative;\n    }\n      .queen .head-container .head {\n        width: 100%;\n        height: 100%;\n        background: var(--dark-color);\n        clip-path: polygon(25% 100%, 0 15%, 15% 0, 85% 0, 100% 15%, 75% 100%);\n    }\n      .queen .head-container .semi-circle {\n        background: var(--dark-color);\n        border-radius: 50%;\n        width: 45%;\n        height: 65%;\n        position: absolute;\n        z-index: 5;\n        transform: translate(60%, -30%);\n    }\n      .queen .head-container .little-ball {\n        background: var(--dark-color);\n        border-radius: 50%;\n        width: 15%;\n        height: 20%;\n        position: absolute;\n        transform: translate(285%, -180%);\n    }\n      .queen .neck {\n        width: 20%;\n        height: 10px;\n        background: var(--light-color);\n    }\n      .queen .neck::before, .queen .neck::after {\n        content: "";\n        display: block;\n        width: 120%;\n        height: 5px;\n        background: var(--dark-color);\n        border-radius: 2px;\n    }\n      .queen .neck::before {\n        transform: translateX(-10%);\n    }\n      .queen .neck::after {\n        width: 140%;\n        transform: translateX(-15%);\n        background: var(--light-color);\n    }\n      .queen .body {\n        width: 40px;\n        height: 38px;\n        background: var(--dark-color);\n        clip-path: polygon(30% 0, 70% 0, 85% 100%, 15% 100%);\n    }\n      .queen .base {\n        width: 40px;\n        height: 20px;\n        background: var(--light-color);\n        border-radius: 15% 15% 0 0 / 25% 25% 0 0;\n    }\n      .queen .base::before, .queen .base::after {\n        content: "";\n        display: block;\n        width: 110%;\n        height: 5px;\n        background: var(--dark-color);\n    }\n      .queen .base::before {\n        transform: translate(-5%, 125%);\n        border-radius: 2px;\n    }\n      .queen .base::after {\n        transform: translate(-5%, 200%);\n        border-radius: 2px 2px 0 0;\n    }\n\n    '}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`\n    <style>${t.styles}</style>\n    <div class="piece queen">\n      <div class="head-container">\n        <div class="little-ball"></div>\n        <div class="semi-circle"></div>\n        <div class="head"></div>\n      </div>\n      <div class="neck"></div>\n      <div class="body"></div>\n      <div class="base"></div>\n    </div>`}}customElements.define("chess-queen",t);class r extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return'\n    .bishop {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      width: 100px;\n      height: 100px;\n      filter: var(--glow-shape);\n    }\n    :host-context(body.view3d) .bishop {\n      transform: translateZ(30px) rotateX(-65deg);\n    }\n      .bishop .head {\n        width: 25%;\n        height: 25%;\n        border-radius: 50%;\n        background: var(--dark-color);\n        transform: translateY(10%);\n        display: flex;\n        justify-content: center;\n    }\n      .bishop .head .gap {\n        background: var(--light-color);\n        width: 50%;\n        height: 3px;\n        border-radius: 0 2px 2px 0;\n        position: absolute;\n        transform: translate(-4px, 6px) rotate(50deg);\n    }\n      .bishop .head::before {\n        content: "";\n        display: block;\n        background: var(--dark-color);\n        width: 50%;\n        height: 50%;\n        clip-path: polygon(50% 0, -4% 50%, 0 100%, 100% 100%, 104% 50%);\n        transform: translateY(-4px);\n    }\n      .bishop .head::after {\n        content: "";\n        display: block;\n        background: var(--dark-color);\n        width: 25%;\n        height: 25%;\n        border-radius: 50%;\n        position: absolute;\n        transform: translateY(-8px);\n        z-index: 5;\n    }\n      .bishop .neck {\n        width: 20%;\n        height: 10px;\n        background: var(--light-color);\n    }\n      .bishop .neck::before, .bishop .neck::after {\n        content: "";\n        display: block;\n        width: 120%;\n        height: 5px;\n        background: var(--dark-color);\n        border-radius: 2px;\n    }\n      .bishop .neck::before {\n        transform: translateX(-10%);\n    }\n      .bishop .neck::after {\n        width: 140%;\n        transform: translateX(-15%);\n        background: var(--light-color);\n    }\n      .bishop .body {\n        width: 40px;\n        height: 28px;\n        background: var(--dark-color);\n        clip-path: polygon(25% 0, 75% 0, 85% 100%, 15% 100%);\n    }\n      .bishop .base {\n        width: 40px;\n        height: 20px;\n        background: var(--light-color);\n        border-radius: 15% 15% 0 0 / 25% 25% 0 0;\n    }\n      .bishop .base::before, .bishop .base::after {\n        content: "";\n        display: block;\n        width: 110%;\n        height: 5px;\n        background: var(--dark-color);\n    }\n      .bishop .base::before {\n        transform: translate(-5%, 125%);\n        border-radius: 2px;\n    }\n      .bishop .base::after {\n        transform: translate(-5%, 200%);\n        border-radius: 2px 2px 0 0;\n    }\n\n    '}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`\n    <style>${r.styles}</style>\n    <div class="piece bishop">\n      <div class="head">\n        <div class="gap"></div>\n      </div>\n      <div class="neck"></div>\n      <div class="body"></div>\n      <div class="base"></div>\n    </div>`}}customElements.define("chess-bishop",r);class a extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return'\n      .rook {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        width: 100px;\n        height: 100px;\n        filter: var(--glow-shape);\n      }\n      :host-context(body.view3d) .rook {\n        transform: translateZ(30px) rotateX(-65deg);\n      }\n      .rook .head {\n        display: flex;\n        justify-content: space-between;\n        width: 28%;\n        height: 10%;\n        background: linear-gradient(to bottom, transparent 65%, var(--light-color) 65%);\n    }\n      .rook .head .left {\n        width: 20%;\n        height: 100%;\n        background: var(--light-color);\n        border-radius: 2px 0 0 0;\n    }\n      .rook .head .right {\n        width: 70%;\n        height: 100%;\n        background: var(--light-color);\n        border-radius: 0 2px 0 0;\n    }\n      .rook .neck {\n        width: 20%;\n        height: 10px;\n        background: var(--light-color);\n    }\n      .rook .neck::before, .rook .neck::after {\n        content: "";\n        display: block;\n        width: 130%;\n        height: 5px;\n        background: var(--dark-color);\n        border-radius: 2px;\n    }\n      .rook .neck::before {\n        width: 160%;\n        transform: translateX(-20%);\n    }\n      .rook .neck::after {\n        transform: translateX(-12%);\n        background: var(--light-color);\n        border-radius: 0 0 2px 2px;\n    }\n      .rook .body {\n        width: 40px;\n        height: 35px;\n        background: var(--dark-color);\n        clip-path: polygon(23% 0, 77% 0, 80% 100%, 20% 100%);\n    }\n      .rook .base {\n        width: 40px;\n        height: 20px;\n        background: var(--light-color);\n        border-radius: 15% 15% 0 0 / 25% 25% 0 0;\n    }\n      .rook .base::before, .rook .base::after {\n        content: "";\n        display: block;\n        width: 110%;\n        height: 5px;\n        background: var(--dark-color);\n    }\n      .rook .base::before {\n        transform: translate(-5%, 125%);\n        border-radius: 2px;\n    }\n      .rook .base::after {\n        transform: translate(-5%, 200%);\n        border-radius: 2px 2px 0 0;\n    }\n\n    '}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`\n    <style>${a.styles}</style>\n    <div class="piece rook">\n      <div class="head">\n        <div class="left"></div>\n        <div class="right"></div>\n      </div>\n      <div class="neck"></div>\n      <div class="body"></div>\n      <div class="base"></div>\n    </div>`}}customElements.define("chess-rook",a);class o extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return'\n    .king {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      width: 100px;\n      height: 100px;\n      filter: var(--glow-shape);\n    }\n    :host-context(body.view3d) .king {\n      transform: translateZ(30px) rotateX(-65deg);\n   }\n    .king .head-container {\n      width: 25%;\n      height: 22%;\n      position: relative;\n   }\n    .king .head-container .head {\n      width: 100%;\n      height: 100%;\n      background: var(--dark-color);\n      clip-path: polygon(20% 100%, 0 10%, 50% 0, 100% 10%, 80% 100%);\n   }\n    .king .head-container .ball {\n      width: 20%;\n      height: 22%;\n      background: var(--dark-color);\n      border-radius: 50%;\n      position: absolute;\n      transform: translate(200%, -50%);\n   }\n    .king .head-container .cross {\n      width: 35%;\n      height: 50%;\n      position: absolute;\n      transform: translate(92%, -120%);\n      display: flex;\n      justify-content: center;\n      align-items: center;\n   }\n    .king .head-container .cross::before, .king .head-container .cross::after {\n      content: "";\n      display: block;\n      background: var(--dark-color);\n      position: absolute;\n   }\n    .king .head-container .cross::before {\n      width: 2px;\n      height: 100%;\n   }\n    .king .head-container .cross::after {\n      width: 100%;\n      height: 2px;\n   }\n    .king .neck {\n      width: 20%;\n      height: 10px;\n      background: var(--light-color);\n   }\n    .king .neck::before, .king .neck::after {\n      content: "";\n      display: block;\n      width: 120%;\n      height: 5px;\n      background: var(--dark-color);\n      border-radius: 2px;\n   }\n    .king .neck::before {\n      transform: translateX(-10%);\n   }\n    .king .neck::after {\n      width: 140%;\n      transform: translateX(-15%);\n      background: var(--light-color);\n   }\n    .king .body {\n      width: 40px;\n      height: 38px;\n      background: var(--dark-color);\n      clip-path: polygon(25% 0, 75% 0, 85% 100%, 15% 100%);\n   }\n    .king .base {\n      width: 40px;\n      height: 20px;\n      background: var(--light-color);\n      border-radius: 15% 15% 0 0 / 25% 25% 0 0;\n   }\n    .king .base::before, .king .base::after {\n      content: "";\n      display: block;\n      width: 110%;\n      height: 5px;\n      background: var(--dark-color);\n   }\n    .king .base::before {\n      transform: translate(-5%, 125%);\n      border-radius: 2px;\n   }\n    .king .base::after {\n      transform: translate(-5%, 200%);\n      border-radius: 2px 2px 0 0;\n   }\n    '}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`\n    <style>${o.styles}</style>\n    <div class="piece king">\n      <div class="head-container">\n        <div class="cross"></div>\n        <div class="ball"></div>\n        <div class="head"></div>\n      </div>\n      <div class="neck"></div>\n      <div class="body"></div>\n      <div class="base"></div>\n    </div>`}}customElements.define("chess-king",o);const s=["chess-rook","chess-knight","chess-bishop","chess-queen","chess-king","chess-bishop","chess-knight","chess-rook"],i=(n,e="black",t)=>{const r=document.querySelector(".chessboard"),a=document.createElement(n);a.classList.add(e);r.querySelectorAll(".cell")[t].appendChild(a)};(()=>{const n=document.querySelector(".chessboard");let e=!0;for(let t=0;t<64;t++){const r=document.createElement("div");r.classList.add("cell"),t%8==0&&(e=!e),e&&r.classList.add("invert"),n.appendChild(r)}s.forEach(((n,e)=>i(n,"black",e)));for(let t=0;t<8;t++)i("chess-pawn","black",8+t);s.forEach(((n,e)=>i(n,"white",56+e)));for(let t=0;t<8;t++)i("chess-pawn","white",48+t)})(),document.querySelector("button").addEventListener("click",(()=>document.body.classList.toggle("view3d")));