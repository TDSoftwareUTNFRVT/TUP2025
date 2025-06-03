 class AppElement extends HTMLElement {
    constructor() {
        super();
        `
        <style>
         p{
            color: green;
            font-size: 40px;
            font-weight: bold;
            }
        </style>
        `
        this.attachShadow({ mode: 'open' });
        this.render();

    }

    render() {
        const paragraph = document.createElement('p');
        paragraph.textContent = 'Soy el Profe!!';
        this.shadowRoot.appendChild(paragraph);
    }

            
   }

customElements.define('app-element', AppElement);
