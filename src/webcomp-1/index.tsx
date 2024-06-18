import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import indexCss from './index.css?inline'; // import inlined css

class Webcomp1 extends HTMLElement {
  private root: ReturnType<typeof createRoot>;
  private _template: HTMLTemplateElement;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // create a template to inject css so it doesn't leak out of the shadow dom
    // and that everything is encapsulated in the single file
    this._template = document.createElement('template');
    this._template.innerHTML = `
      <style>${indexCss}</style>
      <div id="app"></div>
    `;
    // append the template to the shadow root
    this.shadowRoot!.appendChild(this._template.content.cloneNode(true));
    // create the root in the app div for the react component
    this.root = createRoot(this.shadowRoot!.getElementById('app')!);
  }

  connectedCallback() {
    // set initial count to the number from the initialCount attribute or 0 by default
    let initialCount = parseInt(this.getAttribute('initialCount') || '0') || 0;
    this.root.render(<App initialCount={initialCount} />);
  }

  disconnectedCallback() {
    this.root.unmount();
  }

  // pass an initial count prop to the component
  static get observedAttributes() {
    return ['initialCount'];
  }
}

customElements.define('webcomp-1', Webcomp1);
