class WcProductOne extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <div class="product1">
            <img src="/imgs/product-img-1.png" alt="produto Faux Suede Mini Skirt">
            <div class="product-content">
                <ul class="colors1">
                    <li class="option1">
                        <a href="#">
                        </a>
                    </li>
                    <li class="option2">
                        <a href="#">
                        </a>
                    </li>
                    <li class="option3">
                        <a href="#">
                        </a>
                    </li>
                    <li class="option4">
                        <a href="#">
                        </a>
                    </li>
                </ul>
                <p class="price">
                    R$ 500,00
                </p>
                <p class="product-name">
                    Faux Suede Mini Skirt
                </p>
                <p class="product-description">
                    A faux suede mini skirt featuring exposed button-front closures and panel seam construction.
                </p>
                <button class="add-to-cart">
                    Adicionar
                </button>
            </div>
        </div>

        `
    }
}
customElements.define('wc-produto-1', WcProductOne)


class WcProductTwo extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <div class="product2">
            <img src="/imgs/product-img-2.png" alt="produto Ruched Rose Print Mini Skirt">
            <div class="product-content">
                <ul class="colors2">
                    <li class="option1">
                        <a href="#">
                        </a>
                    </li>
                    <li class="option2">
                        <a href="#">
                        </a>
                    </li>
                    <li class="option3">
                        <a href="#">
                        </a>
                    </li>
                    <li class="option4">
                        <a href="#">
                        </a>
                    </li>
                </ul>
                <p class="price">
                    R$ 320,00
                </p>
                <p class="product-name">
                    Ruched Rose Print Mini Skirt
                </p>
                <p class="product-description">
                    A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.
                </p>
                <button class="add-to-cart">
                    Adicionar
                </button>
            </div>
        </div>

        `
    }
}
customElements.define('wc-produto-2', WcProductTwo)