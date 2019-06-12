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
                    <a href="index.html" data-type="index-link">spur-template-for-angular documentation</a>
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
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-6d6c0ee41e76559a97444df403a6a8f8"' : 'data-target="#xs-components-links-module-AppModule-6d6c0ee41e76559a97444df403a6a8f8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-6d6c0ee41e76559a97444df403a6a8f8"' :
                                            'id="xs-components-links-module-AppModule-6d6c0ee41e76559a97444df403a6a8f8"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-934c16be0b8e4d8ba05dd6a0f412c178"' : 'data-target="#xs-components-links-module-AuthModule-934c16be0b8e4d8ba05dd6a0f412c178"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-934c16be0b8e4d8ba05dd6a0f412c178"' :
                                            'id="xs-components-links-module-AuthModule-934c16be0b8e4d8ba05dd6a0f412c178"' }>
                                            <li class="link">
                                                <a href="components/ForgotComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ForgotComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResetComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignupComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SignupComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link">AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BlankModule.html" data-type="entity-link">BlankModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BlankModule-274f5d6d0f0cf268215d0689ca3e5e47"' : 'data-target="#xs-components-links-module-BlankModule-274f5d6d0f0cf268215d0689ca3e5e47"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BlankModule-274f5d6d0f0cf268215d0689ca3e5e47"' :
                                            'id="xs-components-links-module-BlankModule-274f5d6d0f0cf268215d0689ca3e5e47"' }>
                                            <li class="link">
                                                <a href="components/BlankComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BlankComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BlankRoutingModule.html" data-type="entity-link">BlankRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CardsModule.html" data-type="entity-link">CardsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CardsModule-f4700e008149faacc2f8f304f8e641bc"' : 'data-target="#xs-components-links-module-CardsModule-f4700e008149faacc2f8f304f8e641bc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CardsModule-f4700e008149faacc2f8f304f8e641bc"' :
                                            'id="xs-components-links-module-CardsModule-f4700e008149faacc2f8f304f8e641bc"' }>
                                            <li class="link">
                                                <a href="components/CardsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CardsRoutingModule.html" data-type="entity-link">CardsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ChartjsModule.html" data-type="entity-link">ChartjsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ChartjsModule-ae0459a1e865d875825b3ed9f6b863c6"' : 'data-target="#xs-components-links-module-ChartjsModule-ae0459a1e865d875825b3ed9f6b863c6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ChartjsModule-ae0459a1e865d875825b3ed9f6b863c6"' :
                                            'id="xs-components-links-module-ChartjsModule-ae0459a1e865d875825b3ed9f6b863c6"' }>
                                            <li class="link">
                                                <a href="components/ChartjsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChartjsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ChartjsRoutingModule.html" data-type="entity-link">ChartjsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ContentModule.html" data-type="entity-link">ContentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ContentModule-29baf3de019252ccf217794544f25118"' : 'data-target="#xs-components-links-module-ContentModule-29baf3de019252ccf217794544f25118"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ContentModule-29baf3de019252ccf217794544f25118"' :
                                            'id="xs-components-links-module-ContentModule-29baf3de019252ccf217794544f25118"' }>
                                            <li class="link">
                                                <a href="components/ContentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContentComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContentRoutingModule.html" data-type="entity-link">ContentRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link">DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-6086b7bbe420868a5a68926a427aa206"' : 'data-target="#xs-components-links-module-DashboardModule-6086b7bbe420868a5a68926a427aa206"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-6086b7bbe420868a5a68926a427aa206"' :
                                            'id="xs-components-links-module-DashboardModule-6086b7bbe420868a5a68926a427aa206"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardRoutingModule.html" data-type="entity-link">DashboardRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FormsModule.html" data-type="entity-link">FormsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FormsModule-a32382a0ab1192e52e4eed611c173058"' : 'data-target="#xs-components-links-module-FormsModule-a32382a0ab1192e52e4eed611c173058"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormsModule-a32382a0ab1192e52e4eed611c173058"' :
                                            'id="xs-components-links-module-FormsModule-a32382a0ab1192e52e4eed611c173058"' }>
                                            <li class="link">
                                                <a href="components/FormsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FormsRoutingModule.html" data-type="entity-link">FormsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/IconsModule.html" data-type="entity-link">IconsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-IconsModule-79516b744a3b62bd03caf96e51c03ecd"' : 'data-target="#xs-components-links-module-IconsModule-79516b744a3b62bd03caf96e51c03ecd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IconsModule-79516b744a3b62bd03caf96e51c03ecd"' :
                                            'id="xs-components-links-module-IconsModule-79516b744a3b62bd03caf96e51c03ecd"' }>
                                            <li class="link">
                                                <a href="components/IconsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IconsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IconsRoutingModule.html" data-type="entity-link">IconsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PagesModule.html" data-type="entity-link">PagesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PagesModule-1073aa0f0b7854e7f690be07e9c893ef"' : 'data-target="#xs-components-links-module-PagesModule-1073aa0f0b7854e7f690be07e9c893ef"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PagesModule-1073aa0f0b7854e7f690be07e9c893ef"' :
                                            'id="xs-components-links-module-PagesModule-1073aa0f0b7854e7f690be07e9c893ef"' }>
                                            <li class="link">
                                                <a href="components/PagesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PagesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PagesRoutingModule.html" data-type="entity-link">PagesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-49989f30b6aacc59142387c0c01afd4a"' : 'data-target="#xs-components-links-module-SharedModule-49989f30b6aacc59142387c0c01afd4a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-49989f30b6aacc59142387c0c01afd4a"' :
                                            'id="xs-components-links-module-SharedModule-49989f30b6aacc59142387c0c01afd4a"' }>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidebarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StatsModule.html" data-type="entity-link">StatsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StatsModule-de58980f361143d6daf026cb6ccadd0e"' : 'data-target="#xs-components-links-module-StatsModule-de58980f361143d6daf026cb6ccadd0e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StatsModule-de58980f361143d6daf026cb6ccadd0e"' :
                                            'id="xs-components-links-module-StatsModule-de58980f361143d6daf026cb6ccadd0e"' }>
                                            <li class="link">
                                                <a href="components/StatsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StatsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StatsRoutingModule.html" data-type="entity-link">StatsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TablesModule.html" data-type="entity-link">TablesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TablesModule-41d46b60983c99522db310110d9869a1"' : 'data-target="#xs-components-links-module-TablesModule-41d46b60983c99522db310110d9869a1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TablesModule-41d46b60983c99522db310110d9869a1"' :
                                            'id="xs-components-links-module-TablesModule-41d46b60983c99522db310110d9869a1"' }>
                                            <li class="link">
                                                <a href="components/TablesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TablesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TablesRoutingModule.html" data-type="entity-link">TablesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TypographyModule.html" data-type="entity-link">TypographyModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TypographyModule-142abdff13e8d0c3b7c8faa8ce29f242"' : 'data-target="#xs-components-links-module-TypographyModule-142abdff13e8d0c3b7c8faa8ce29f242"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TypographyModule-142abdff13e8d0c3b7c8faa8ce29f242"' :
                                            'id="xs-components-links-module-TypographyModule-142abdff13e8d0c3b7c8faa8ce29f242"' }>
                                            <li class="link">
                                                <a href="components/TypographyComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TypographyComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TypographyRoutingModule.html" data-type="entity-link">TypographyRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserinterfaceModule.html" data-type="entity-link">UserinterfaceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserinterfaceModule-4469206c1f953615ecb51bb3f7bdebef"' : 'data-target="#xs-components-links-module-UserinterfaceModule-4469206c1f953615ecb51bb3f7bdebef"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserinterfaceModule-4469206c1f953615ecb51bb3f7bdebef"' :
                                            'id="xs-components-links-module-UserinterfaceModule-4469206c1f953615ecb51bb3f7bdebef"' }>
                                            <li class="link">
                                                <a href="components/UserinterfaceComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserinterfaceComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserinterfaceRoutingModule.html" data-type="entity-link">UserinterfaceRoutingModule</a>
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
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link">User</a>
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
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
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