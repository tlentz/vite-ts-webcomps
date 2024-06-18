import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import indexCss from './index.css?inline'; // import inlined css

class Webcomp2 extends HTMLElement {
  private root: ReturnType<typeof createRoot>;
  private _template: HTMLTemplateElement;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._template = document.createElement('template');
    this._template.innerHTML = `
      <style>${indexCss}</style>
      <div id="app"></div>
    `;
    this.shadowRoot!.appendChild(this._template.content.cloneNode(true));
    this.root = createRoot(this.shadowRoot!.getElementById('app')!);
  }

  connectedCallback() {
    let initialString = this.getAttribute('initialString') || '';
    this.root.render(<App initialString={initialString} />);
  }

  disconnectedCallback() {
    this.root.unmount();
  }

  // pass an initial count prop to the component
  static get observedAttributes() {
    return ['initialString'];
  }
}

customElements.define('webcomp-2', Webcomp2);
