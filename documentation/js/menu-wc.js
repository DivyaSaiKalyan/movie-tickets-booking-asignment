'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">movie-tickets documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-cee852a76f71886ad6f1ce0e090f79b97fc92e596506ceb02661d91cd110cb0865e103d6342f5b238ff21b8195b80c2d75734d1188d5dcef826249107cf1b052"' : 'data-target="#xs-controllers-links-module-AppModule-cee852a76f71886ad6f1ce0e090f79b97fc92e596506ceb02661d91cd110cb0865e103d6342f5b238ff21b8195b80c2d75734d1188d5dcef826249107cf1b052"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-cee852a76f71886ad6f1ce0e090f79b97fc92e596506ceb02661d91cd110cb0865e103d6342f5b238ff21b8195b80c2d75734d1188d5dcef826249107cf1b052"' :
                                            'id="xs-controllers-links-module-AppModule-cee852a76f71886ad6f1ce0e090f79b97fc92e596506ceb02661d91cd110cb0865e103d6342f5b238ff21b8195b80c2d75734d1188d5dcef826249107cf1b052"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-cee852a76f71886ad6f1ce0e090f79b97fc92e596506ceb02661d91cd110cb0865e103d6342f5b238ff21b8195b80c2d75734d1188d5dcef826249107cf1b052"' : 'data-target="#xs-injectables-links-module-AppModule-cee852a76f71886ad6f1ce0e090f79b97fc92e596506ceb02661d91cd110cb0865e103d6342f5b238ff21b8195b80c2d75734d1188d5dcef826249107cf1b052"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-cee852a76f71886ad6f1ce0e090f79b97fc92e596506ceb02661d91cd110cb0865e103d6342f5b238ff21b8195b80c2d75734d1188d5dcef826249107cf1b052"' :
                                        'id="xs-injectables-links-module-AppModule-cee852a76f71886ad6f1ce0e090f79b97fc92e596506ceb02661d91cd110cb0865e103d6342f5b238ff21b8195b80c2d75734d1188d5dcef826249107cf1b052"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MovieModule.html" data-type="entity-link" >MovieModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-MovieModule-04e3a344a30236bf6f05da8a5419878edba32de3a72875d7e8ab723db34d4c0c19ad1bd874c4778437761769aab4dfb094436cb30751ccfd7f10eb941fddde42"' : 'data-target="#xs-controllers-links-module-MovieModule-04e3a344a30236bf6f05da8a5419878edba32de3a72875d7e8ab723db34d4c0c19ad1bd874c4778437761769aab4dfb094436cb30751ccfd7f10eb941fddde42"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MovieModule-04e3a344a30236bf6f05da8a5419878edba32de3a72875d7e8ab723db34d4c0c19ad1bd874c4778437761769aab4dfb094436cb30751ccfd7f10eb941fddde42"' :
                                            'id="xs-controllers-links-module-MovieModule-04e3a344a30236bf6f05da8a5419878edba32de3a72875d7e8ab723db34d4c0c19ad1bd874c4778437761769aab4dfb094436cb30751ccfd7f10eb941fddde42"' }>
                                            <li class="link">
                                                <a href="controllers/MovieController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MovieController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MovieModule-04e3a344a30236bf6f05da8a5419878edba32de3a72875d7e8ab723db34d4c0c19ad1bd874c4778437761769aab4dfb094436cb30751ccfd7f10eb941fddde42"' : 'data-target="#xs-injectables-links-module-MovieModule-04e3a344a30236bf6f05da8a5419878edba32de3a72875d7e8ab723db34d4c0c19ad1bd874c4778437761769aab4dfb094436cb30751ccfd7f10eb941fddde42"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MovieModule-04e3a344a30236bf6f05da8a5419878edba32de3a72875d7e8ab723db34d4c0c19ad1bd874c4778437761769aab4dfb094436cb30751ccfd7f10eb941fddde42"' :
                                        'id="xs-injectables-links-module-MovieModule-04e3a344a30236bf6f05da8a5419878edba32de3a72875d7e8ab723db34d4c0c19ad1bd874c4778437761769aab4dfb094436cb30751ccfd7f10eb941fddde42"' }>
                                        <li class="link">
                                            <a href="injectables/MovieService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MovieService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TheatreService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TheatreService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PaymentModule.html" data-type="entity-link" >PaymentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-PaymentModule-de8cec850632e0cba9e050862fd3e61916441b9e30d0030a6f88fcd783f207a1ceb04c622c2d64a03a13b8d239dfc2a20ea06e8f3f79d7d98bf0b8022c695321"' : 'data-target="#xs-controllers-links-module-PaymentModule-de8cec850632e0cba9e050862fd3e61916441b9e30d0030a6f88fcd783f207a1ceb04c622c2d64a03a13b8d239dfc2a20ea06e8f3f79d7d98bf0b8022c695321"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PaymentModule-de8cec850632e0cba9e050862fd3e61916441b9e30d0030a6f88fcd783f207a1ceb04c622c2d64a03a13b8d239dfc2a20ea06e8f3f79d7d98bf0b8022c695321"' :
                                            'id="xs-controllers-links-module-PaymentModule-de8cec850632e0cba9e050862fd3e61916441b9e30d0030a6f88fcd783f207a1ceb04c622c2d64a03a13b8d239dfc2a20ea06e8f3f79d7d98bf0b8022c695321"' }>
                                            <li class="link">
                                                <a href="controllers/PaymentController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PaymentModule-de8cec850632e0cba9e050862fd3e61916441b9e30d0030a6f88fcd783f207a1ceb04c622c2d64a03a13b8d239dfc2a20ea06e8f3f79d7d98bf0b8022c695321"' : 'data-target="#xs-injectables-links-module-PaymentModule-de8cec850632e0cba9e050862fd3e61916441b9e30d0030a6f88fcd783f207a1ceb04c622c2d64a03a13b8d239dfc2a20ea06e8f3f79d7d98bf0b8022c695321"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PaymentModule-de8cec850632e0cba9e050862fd3e61916441b9e30d0030a6f88fcd783f207a1ceb04c622c2d64a03a13b8d239dfc2a20ea06e8f3f79d7d98bf0b8022c695321"' :
                                        'id="xs-injectables-links-module-PaymentModule-de8cec850632e0cba9e050862fd3e61916441b9e30d0030a6f88fcd783f207a1ceb04c622c2d64a03a13b8d239dfc2a20ea06e8f3f79d7d98bf0b8022c695321"' }>
                                        <li class="link">
                                            <a href="injectables/MovieService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MovieService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PaymentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TheatreService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TheatreService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TheatreModule.html" data-type="entity-link" >TheatreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TheatreModule-ce2e51e8f3c6f7ee09a7eddfd1d166846d904d56f2703d609b1aa25640ba4d5f97f0c07fc63d1606be30d0a9df953f4aadd199674a1cd6e15e829ed3190cb9bd"' : 'data-target="#xs-controllers-links-module-TheatreModule-ce2e51e8f3c6f7ee09a7eddfd1d166846d904d56f2703d609b1aa25640ba4d5f97f0c07fc63d1606be30d0a9df953f4aadd199674a1cd6e15e829ed3190cb9bd"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TheatreModule-ce2e51e8f3c6f7ee09a7eddfd1d166846d904d56f2703d609b1aa25640ba4d5f97f0c07fc63d1606be30d0a9df953f4aadd199674a1cd6e15e829ed3190cb9bd"' :
                                            'id="xs-controllers-links-module-TheatreModule-ce2e51e8f3c6f7ee09a7eddfd1d166846d904d56f2703d609b1aa25640ba4d5f97f0c07fc63d1606be30d0a9df953f4aadd199674a1cd6e15e829ed3190cb9bd"' }>
                                            <li class="link">
                                                <a href="controllers/TheatreController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TheatreController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TheatreModule-ce2e51e8f3c6f7ee09a7eddfd1d166846d904d56f2703d609b1aa25640ba4d5f97f0c07fc63d1606be30d0a9df953f4aadd199674a1cd6e15e829ed3190cb9bd"' : 'data-target="#xs-injectables-links-module-TheatreModule-ce2e51e8f3c6f7ee09a7eddfd1d166846d904d56f2703d609b1aa25640ba4d5f97f0c07fc63d1606be30d0a9df953f4aadd199674a1cd6e15e829ed3190cb9bd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TheatreModule-ce2e51e8f3c6f7ee09a7eddfd1d166846d904d56f2703d609b1aa25640ba4d5f97f0c07fc63d1606be30d0a9df953f4aadd199674a1cd6e15e829ed3190cb9bd"' :
                                        'id="xs-injectables-links-module-TheatreModule-ce2e51e8f3c6f7ee09a7eddfd1d166846d904d56f2703d609b1aa25640ba4d5f97f0c07fc63d1606be30d0a9df953f4aadd199674a1cd6e15e829ed3190cb9bd"' }>
                                        <li class="link">
                                            <a href="injectables/TheatreService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TheatreService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-c1e76a52b9f12ae64a640be275968a10340b833bc108efb71635efc7e484c8ec155893ce229854bd90e69fe0359c658d99ca44465f9e38716f1a934fa7ea2a45"' : 'data-target="#xs-controllers-links-module-UserModule-c1e76a52b9f12ae64a640be275968a10340b833bc108efb71635efc7e484c8ec155893ce229854bd90e69fe0359c658d99ca44465f9e38716f1a934fa7ea2a45"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-c1e76a52b9f12ae64a640be275968a10340b833bc108efb71635efc7e484c8ec155893ce229854bd90e69fe0359c658d99ca44465f9e38716f1a934fa7ea2a45"' :
                                            'id="xs-controllers-links-module-UserModule-c1e76a52b9f12ae64a640be275968a10340b833bc108efb71635efc7e484c8ec155893ce229854bd90e69fe0359c658d99ca44465f9e38716f1a934fa7ea2a45"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-c1e76a52b9f12ae64a640be275968a10340b833bc108efb71635efc7e484c8ec155893ce229854bd90e69fe0359c658d99ca44465f9e38716f1a934fa7ea2a45"' : 'data-target="#xs-injectables-links-module-UserModule-c1e76a52b9f12ae64a640be275968a10340b833bc108efb71635efc7e484c8ec155893ce229854bd90e69fe0359c658d99ca44465f9e38716f1a934fa7ea2a45"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-c1e76a52b9f12ae64a640be275968a10340b833bc108efb71635efc7e484c8ec155893ce229854bd90e69fe0359c658d99ca44465f9e38716f1a934fa7ea2a45"' :
                                        'id="xs-injectables-links-module-UserModule-c1e76a52b9f12ae64a640be275968a10340b833bc108efb71635efc7e484c8ec155893ce229854bd90e69fe0359c658d99ca44465f9e38716f1a934fa7ea2a45"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MovieController.html" data-type="entity-link" >MovieController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PaymentController.html" data-type="entity-link" >PaymentController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TheatreController.html" data-type="entity-link" >TheatreController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Movie.html" data-type="entity-link" >Movie</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Payment.html" data-type="entity-link" >Payment</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Theater.html" data-type="entity-link" >Theater</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link" >HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/JwtServiceClass.html" data-type="entity-link" >JwtServiceClass</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Maintenance.html" data-type="entity-link" >Maintenance</a>
                            </li>
                            <li class="link">
                                <a href="classes/TypeOrmInterface.html" data-type="entity-link" >TypeOrmInterface</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggerMiddleware.html" data-type="entity-link" >LoggerMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MovieService.html" data-type="entity-link" >MovieService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PaymentService.html" data-type="entity-link" >PaymentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TheatreService.html" data-type="entity-link" >TheatreService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ValidationPipe.html" data-type="entity-link" >ValidationPipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/SwaggerConfig.html" data-type="entity-link" >SwaggerConfig</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});