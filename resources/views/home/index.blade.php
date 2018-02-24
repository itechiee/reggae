@extends('layouts.app')
@section('content')

    @include('includes.header')              
         <div class="off-canvas-wrapper">
            <div class="off-canvas-wrapper-inner" data-off-canvas-wrapper>           
               <div class="off-canvas-content" data-off-canvas-content>     

               @include('includes.menu_nav')      
                  
                  
                  <main role="main">
                     <div class="clear-menu">

                        @include('includes.home_banner')
                              
                        <div class="row medium-collapse outer-pad"  data-magellan-target="location">
                          <div class="columns show-for-medium">
                            <h2 class="expando-line location-hdr">
                                LOCATION</h2>
                          </div>
            
                        <div class="columns medium-6 large-6">
                            <section class="accordion-group" id="location">
                                <ul class="accordion" data-accordion data-allow-all-closed="true">
                                    <li class="accordion-item" data-accordion-item>
                                        <a href="#" class="accordion-title hide-for-medium">
                                            <h2 class="expando-line">
                                                LOCATION<span></span></h2>
                                        </a>
                                        <div class="accordion-content" data-tab-content>
                                            <div data-google-map="" data-google-map-zoom="14" data-google-map-lat="59.3358" data-google-map-long="18.0510">
                                                <div class="google-map" style="background-image: url(../stock/images/others/map2.png);">
                                                 </div>
                                               </div>
                                        </div>
                                    </li>
                                </ul>
                            </section>
                        </div>
            

                           <div class="columns medium-6 large-6">
                              <section class="accordion-group">
                                 <ul class="accordion" data-accordion data-allow-all-closed="true">
                                    <li class="accordion-item is-active" data-accordion-item>
                                       <div class="accordion-content" data-tab-content>
                                          <div class="row collapse">
                                             <div class="columns">
                                                <ul class="accordion" data-accordion data-allow-all-closed="true">
                                                   <li class="accordion-item" data-accordion-item>
                                                      <a href="#" class="accordion-title hide-for-medium">
                                                         <h2 class="expando-line">
                                                            CONTACT US
                                                            <span></span>
                                                         </h2>
                                                      </a>
                                                      <div class="accordion-content" data-tab-content>
                                                         <div class="callout default">
                                                            <div class="show-for-medium">
                                                               <h3>CONTACT US</h3>
                                                            </div>
                                                            <ul class="menu vertical iconlist" itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
                                                               <li>
                                                                 <span itemprop="streetAddress">5, Jalan Tun H.S Lee</span>,
                                                                  <span itemprop="addressLocality">Kuala Lumpur</span>,
                                                                  <span itemprop="addressCountry">Malaysia</span>,
                                                                  <span itemprop="postalCode">50000</span>
                                                               </li>
                                                               <li>
                                                                  +60 20726887
                                                               </li>
                                                               <li>
                                                                  <a class="uppercase" id="askus" itemprop="email" href="mailto:contactus@reggaehostelsmalaysia.com">ASK US</a>
                                                               </li>
                                                            </ul>
                                                         </div>
                                                      </div>
                                                   </li>
                                                </ul>
                                             </div>
                                             <div class="large-8 columns end">
                                                <div class="callout default show-for-medium">
                                                   <h3>Location</h3>
                                                   <div>
                                                      sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </li>
                                 </ul>
                              </section>
                           </div>
                           <div class="columns">
                              <section class="accordion-group"  id="facilities" >
                                    @include('includes.facility.facility')                                 
                              </section>
                           </div>
                        </div>
                        <div class="row">
                           <div class="columns">
                              <section class="accordion-group" id="rooms" data-magellan-target="rooms">
                                    @include('includes.rooms.rooms')
                              </section>
                           </div>
                        </div>
                        
                        <div class="row">
                           <div class="columns">
                              <section class="accordion-panel spaces-panel" id="cafe">
                                 <ul class="accordion" data-accordion data-allow-all-closed="true" data-multi-expand="true">
         
                                    <li  class="accordion-item" data-accordion-item="" data-magellan-target="cafe">
                                       <a href="#" class="accordion-title medium-disabled">
                                          <h2 class="expando-line">CAFÉ</h2>
                                       </a>
                                       <div class="accordion-content" data-tab-content>
                                          <section class="space-container left">
                                             <div class="row collapse">
                                                <div class="columns large-12 space-gallery-column">
                                                   <figure>
                                                      <div class="space-gallerys">
                                                    <div class="columns cafe_lg large-7" >
                                                                <img src="../stock/images/others/bar.jpg?ext=.jpg">
                                                            </div>
                                                            
                                                            <div class="columns medium-4 large-3" >
                                                                <aside id="opening_hours">
                                                                   <h3>OPENING HOURS :</h3>
                                                                   <div>
                                                                       <span>Mon - Sunday</span> <br>
                                                                       <span>07:00 - 23:00</span> <br><br>
                                                                        <span><b>RSVN :</b></span> <br>
                                                                        <span>+60 129104567</span>                                                                    
                                                                   </div>
                                                                </aside>
                                                              </div>

                                                              <div class="columns medium-4 large-5">
                                                                    <aside class="callout">
                                                                       <h3>ABOUT</h3>
                                                                       <p>
                                                                            sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus
                                                                       </p>
                                                                    </aside>
                                                                 </div>

                                                          </div>
                                                      </div>
                                                   </figure>
                                                   <div class="instagram space-gallery__insta show-for-large" data-insta="" data-insta-shortlink="https://www.instagram.com/p/BVUKDXVhAl2/?taken-at=289114468204779">
                                                   </div>
                                                </div>
                                             </div>
                                          </section>
                                       </div>
                                    </li>
                                    
                                 </ul>
                              </section>
                           </div>
                        </div>

                        @include('includes.rooftop.rooftop')
                        
                        <div class="content">
                           <div class="row">
                              <div class="columns">
                                  <section  id="aboutus"  class="spaces-panel">
                                 <div>
                                    <article>
                                       <h2 class="expando-line">
                                          ABOUT US
                                       </h2>
                                       <div class="two-column-text">
                                           <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id</p>
                       
                                       </div>
                                    </article>
                                 </div>
                                </section>
                              </div>
                           </div>
                        </div>
                     </div>
                     <!-- <div class="callout cookie-consent" data-closable>
                        COOKIES ENSURE THAT WE GIVE YOU THE BEST EXPERIENCE ON OUR SITE. BY USING OUR SERVICES, YOU AGREE TO OUR USE OF COOKIES.
                        <button class="close-button" aria-label="Dismiss alert" type="button" data-close>
                        <span aria-hidden="true">&times;</span>
                        </button>
                     </div> -->
                  </main>
                  <footer class="footer">
                     <div id="ctl00_ucFooter_pnlFooterLinks" class="footer__links">
                        
                        <div class="row">
                           <div class="medium-4 large-3 columns">
                              <strong>INFORMATION</strong>
                              <ul class="menu vertical">
                                    <li class="nav-item">
                                            <a class="nav-link js-scroll-trigger" href="#location">LOCATION</a>
                                          </li>
                                          <li class="nav-item">
                                            <a class="nav-link js-scroll-trigger" href="#facilities">FACILITIES</a>
                                          </li>
                                          <li class="nav-item">
                                            <a class="nav-link js-scroll-trigger" href="#rooms">ROOMS</a>
                                          </li>
                                          <li class="nav-item">
                                               <a class="nav-link js-scroll-trigger" href="#cafe">CAFE</a>
                                          </li>
                                          <li class="nav-item">
                                              <a class="nav-link js-scroll-trigger" href="#rooftop">ROOFTOP</a>
                                          </li>
                                          <li class="nav-item">
                                              <a class="nav-link js-scroll-trigger" href="#aboutus">ABOUT US</a>
                                          </li>
                                          
                              </ul>
                           </div>
                          
                           <div class="medium-4 large-3 columns">
                              <strong>SOCIAL</strong>
                              <ul class="menu social-menu">
                                 <li>
                                    <a aria-label="Facebook" rel="noopener" href="https://www.facebook.com/" target="_blank">
                                    <i class="fb-icon"></i>
                                    </a>
                                 </li>
                                 <li>
                                    <a aria-label="Twitter" rel="noopener" href="https://twitter.com/" target="_blank">
                                    <i class="tweet-icon"></i>
                                    </a>
                                 </li>
                                 <li>
                                    <a aria-label="Instagram" rel="noopener" href="https://www.instagram.com/" target="_blank">
                                    <i class="insta-icon"></i>
                                    </a>
                                 </li>
                                 <li>
                                    <a aria-label="Youtube" rel="noopener" href="https://www.youtube.com/" target="_blank">
                                    <i class="yt-icon"></i>
                                    </a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>

                     <div class="footer__locations">
                        
                        <div class="row small-up-1 medium-up-2 large-up-4  js--hook-footer-locations-list">
                         
                           
                        <div class="row">
                           <div class="columns">
                              <div class="copy"> 2018 Reggae Mansions. All Rights Reserved.
                              </div>
                           </div>
                        </div>
                     </div>
                  </footer>
               </div>
            </div>
         </div>
    
      <!-- </form> -->      
@endsection