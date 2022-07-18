
// HEADER //

class WcHeader extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <header>

            <div class="header-top">
                <p>Acompanhe as melhores promoções disponíveis aqui na Maeztra.</p>
                <p class="yasmin">Desafio realizado por Yasmin Almeida</p>
            </div>

            <div class="main-header">
                <div class="main-header__content max-container">
                    <div class="logo-menu-holder">
                        <div class="toggle mobile-only">
                            <div class="menu-toggler">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.0625 15.0625H4.9375C4.41972 15.0625 4 15.4822 4 16C4 16.5178 4.41972 16.9375 4.9375 16.9375H27.0625C27.5803 16.9375 28 16.5178 28 16C28 15.4822 27.5803 15.0625 27.0625 15.0625Z" fill="black"/>
                                <path d="M27.0625 7.5625H4.9375C4.41972 7.5625 4 7.98222 4 8.5C4 9.01778 4.41972 9.4375 4.9375 9.4375H27.0625C27.5803 9.4375 28 9.01778 28 8.5C28 7.98222 27.5803 7.5625 27.0625 7.5625Z" fill="black"/>
                                <path d="M27.0625 22.5625H4.9375C4.41972 22.5625 4 22.9822 4 23.5C4 24.0178 4.41972 24.4375 4.9375 24.4375H27.0625C27.5803 24.4375 28 24.0178 28 23.5C28 22.9822 27.5803 22.5625 27.0625 22.5625Z" fill="black"/>
                                </svg>
                            </div>
                        </div>                    
                        <a class="home-redirect" href="#">
                            <img src="/imgs/logo-maeztra-novo.png" alt="logo maeztra">
                        </a>
                    </div>

                    <div class="search-container desktop-only">
                        <form action="#">
                            <input type="text" placeholder="O Que Você Busca?" name="search">
                            <button type="submit">Buscar</button>
                        </form>
                    </div>

                    <div class="profile-links desktop-only">
                        <div class="account">
                            <a href="#">
                                <img src="/imgs/user.png" alt="ícone usuário">
                                Minha Conta
                            </a>
                        </div>

                        <div class="wishlist">
                            <a href="#">
                                <img src="/imgs/wishlist.png" alt="ícone lista de desejos">
                                Minha lista
                            </a>
                        </div>

                        <div class="cart">
                            <a href="#">
                                <img src="/imgs/cart.png" alt="ícone carrinho">
                                Meu carrinho
                            </a>
                        </div>
                    </div>

                    
                    <div class="profile-links mobile-only">

                        <div class="toggler-busca">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.8535 22.4395L16.8817 15.4677C18.204 13.8351 19 11.7597 19 9.50004C19 4.26175 14.7383 0 9.49999 0C4.2617 0 0 4.26175 0 9.50004C0 14.7383 4.26175 19.0001 9.50004 19.0001C11.7597 19.0001 13.8351 18.204 15.4677 16.8817L22.4395 23.8536C22.6348 24.0488 22.9513 24.0488 23.1467 23.8536L23.8536 23.1466C24.0488 22.9513 24.0488 22.6347 23.8535 22.4395ZM9.50004 17.0001C5.3643 17.0001 2.00002 13.6358 2.00002 9.50004C2.00002 5.3643 5.3643 2.00002 9.50004 2.00002C13.6358 2.00002 17.0001 5.3643 17.0001 9.50004C17.0001 13.6358 13.6358 17.0001 9.50004 17.0001Z" fill="black"/>
                            </svg>
                        </div>

                        <div class="cart mobile-only">
                                <a href="#">
                                <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.7682 23.2112L18.9441 5.84052C18.9059 5.47687 18.5993 5.20074 18.2337 5.20074H14.8052V4.41907C14.8052 1.98248 12.8227 0 10.3861 0C7.94937 0 5.96689 1.98248 5.96689 4.41907V5.20074H2.53842C2.17276 5.20074 1.86624 5.47687 1.82797 5.84052L0.00387816 23.2112C-0.017179 23.4124 0.0481897 23.6133 0.183505 23.7638C0.319003 23.9141 0.511996 24 0.714327 24H20.0576C20.2601 24 20.4531 23.9141 20.5884 23.7638C20.7241 23.6133 20.7893 23.4124 20.7682 23.2112ZM7.39548 4.41907C7.39548 2.7702 8.73709 1.42859 10.3861 1.42859C12.035 1.42859 13.3766 2.7702 13.3766 4.41907V5.20074H7.39548V4.41907ZM1.50754 22.5714L3.18167 6.62933H5.96689V8.20349C5.96689 8.5979 6.28678 8.91779 6.68119 8.91779C7.07559 8.91779 7.39548 8.5979 7.39548 8.20349V6.62933H13.3766V8.20349C13.3766 8.5979 13.6965 8.91779 14.0909 8.91779C14.4853 8.91779 14.8052 8.5979 14.8052 8.20349V6.62933H17.5904L19.2646 22.5714H1.50754Z" fill="black"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="nav-bar">
                <nav class="nav-bar__content max-container">
                    <ul>
                        <li class="news">
                            <a href="#">
                                <img src="/imgs/news.png" alt="ícone novidades">
                                Novidades
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Vestidos
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Roupas
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Lingerie
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Acessórios
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                OUTLET
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

        </header>

        `
    }
}
customElements.define('wc-header', WcHeader)

// FOOTER //

class WcFooter extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <footer>
            <div class="content max-container">
                <ul class="infos">
                    <h2>Informações</h2>
                    <li>
                        <a href="#">
                            Quem Somos
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Prazo de Envio
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Trocas e Devoluções
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Promoções e Cupons
                        </a>
                    </li>
                </ul>
        
                <ul class="account-footer">
                    <h2>Minha Conta</h2>
                    <li>
                        <a href="#">
                            Minha Conta
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Meus Pedidos
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Cadastre-se
                        </a>
                    </li>
                </ul>
        
                <ul class="find-us">
                    <h2>Onde nos Encontrar</h2>
                    <li>
                        <a href="#">
                            Lojas
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Endereço
                        </a>
                    </li>
                </ul>
            </div>
        
            <div class="footer-maeztra">
                <div class="footer-maeztra__content max-container">
                    <ul class="social">
                        <li>
                            <a href="#" target="_blank">
                                <img src="/imgs/facebook.com.png" alt="logo facebook">
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <img src="/imgs/www.linkedin.com.png" alt="logo linkedin">
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <img src="/imgs/www.instagram.com.png" alt="logo instagram">
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <img src="/imgs/www.youtube.com.png" alt="logo youtube">
                            </a>
                        </li>
                    </ul>
        
                    <ul class="cards">
                        <li>
                            <img src="/imgs/visa.png" alt="visa">
                        </li>
                        <li>
                            <img src="/imgs/icon-pagamento-mastercard.png" alt="mastercard">
                        </li>
                        <li>
                            <img src="/imgs/visa.png" alt="visa">
                        </li>
                        <li>
                            <img src="/imgs/icon-pagamento-mastercard.png" alt="mastercard">
                        </li>
                    </ul>
        
                    <div class="institucional">
                        <div class="vtex">
                            <p>
                                Powered by
                            </p>
                            <img src="/imgs/logo-vtex- footer.png" alt="logo vtex">
                        </div>
                        <div class="maeztra-footer">
                            <p>
                                Developed by
                            </p>
                            <a href="#">
                                <img src="/imgs/maeztra-footer.png" alt="logo maeztra">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        `
    }
}
customElements.define('wc-footer', WcFooter)