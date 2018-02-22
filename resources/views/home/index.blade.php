@extends('layouts.app')
@section('content')

     <header class="header">
            <nav class="header__wrap clearfix">
               <div class="header__logo header__section show-for-large">
                  <a  href="#page-top" class="logo js-scroll-trigger">
                  <img src="../stock/images/logos/logo.png" alt="ReggaeMansion" />
                  </a>
               </div>
               <div class="header__menu header__section">


                
                
                  <div class="small-menu hide-for-large">
                     <!-- <button id="burgerMenu" type="button" data-toggle="offCanvas" aria-label="Menu"> -->

                        <button id="burgerMenu" type="button" data-toggle="offCanvas" aria-label="Menu">
                     <span></span>
                     <span></span>
                     <span></span>
                     </button>
                     <a href="#page-top" class="logo" style="color:#fff">
                         Reggae Mansion
                     <!-- <img src="https://generatorhostels.com/web/images/logos/logo_mobile.svg" alt="Generator" class="show-for-small-only" />
                     <img src="https://generatorhostels.com/web/images/logos/genlogo.svg" alt="Generator" class="show-for-medium-only" /> -->
                     </a>


                     <div class="responsive-menu" >
     <ul class=" " >
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

                  </div>
               </div>

               <div class="header__utils header__section show-for-large clearfix">
                  <div class="social">
                     <span data-toggle="socialDropdown">SOCIAL</span>
                     <div id="socialDropdown" class="dropdown-pane" data-dropdown data-close-on-click="true">
                        <ul class="vertical dropdown menu" data-dropdown-menu>
                           <li class="fb">
                              <a rel="noopener" href="https://www.facebook.com" target="_blank">/reggaemansion</a>
                           </li>
                           <li class="tw">
                              <a rel="noopener" href="https://twitter.com" target="_blank">@reggaemansion</a>
                           </li>
                           <li class="inst">
                              <a rel="noopener" href="https://www.instagram.com" target="_blank">/reggaemansion</a>
                           </li>
                           <li class="yt">
                              <a rel="noopener" href="https://www.youtube.com/" target="_blank">/reggaemansion</a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div class="header__book header__section">
                  <button type="button">BOOK 
                  <span class="show-for-medium">NOW</span>
                  </button>
               </div>
            </nav>
         </header>



         
         <div class="off-canvas-wrapper">
            <div class="off-canvas-wrapper-inner" data-off-canvas-wrapper>
           
               <div class="off-canvas-content" data-off-canvas-content>
        
                  <div class="magellan show-for-medium">
                     <div class="row">
                        <div class="columns">
                           <nav>
                                <ul class="navbar-nav horizontal menu expanded" >
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

                           </nav>
                        </div>
                     </div>
                  </div>
                  <main role="main">
                     <div class="clear-menu">
                            <div class="hero hero--booking" data-interchange="[../stock/images/header/bg1.jpg?ext=.jpg&width=800, small],[../stock/images/header/bg1.jpg?ext=.jpg&width=480, medium],[../stock/images/header/bg1.jpg?ext=.jpg&width=480, large]">
                                
                           <div class="hero-wrap">
                              <div class="row">
                                 <div class="columns">
                                    <div class="hero__content">
                                       <div class="hero__content-inner">
                                          <div class="hero__content-bg">
                                             <h4 class="as-h1">
                                                REGGAE MANSION
                                                <span></span>
                                             </h4>
                                             <div class="banner_subtitle">
                                                <h1>
                                                    PROBABLY THE NO.1 BACKPACKER PARTY HOSTEL IN KUALA LUMPUR
                                                 </h1>
                                             </div>
                                             
                                             <div class="row collapse hero__booking-buttons">                                
                                                <div class="banner_book_now col-md-4">
                                                  <a type="button" class="btn-success" href="#">BOOK NOW</a>
                                              </div>
                                             </div>
                                          </div>
                                        
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div class="content content--intro destination--intro">
                           <div class="row large-collapse">
                              <div class="large-6 large-push-6 columns">
                                 <div class="destination-gallery">
                                    <div class="reveal large gallery-modal" id="destinationsGalleryModal" data-reveal>
                                       <div class="gallery">
                                          <div>
                                             <div>
                                                <center>
                                                    <div class="reggae-wrapper">
                                                        <video class="reggae-video" id="reggae-video" loop controls>
                                                            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                                                        </video>
                                                        <div class="reggae-playButton" video-id="reggae-video" id="reggae-playButton"></div>
                                                    </div>
                                                </center>
    
                                             </div>
                                             <div class="gallery__caption">
                                                <div class="gallery__caption-text"></div>
                                             </div>
                                          </div>
                                          <div>
                                             <div>
                                                <img data-lazy="../stock/images/others/img1.jpg?ext=.jpg&width=1000" data-interchange="[../stock/images/others/img1.jpg?ext=.jpg&width=600, small],[../stock/images/others/img1.jpg?ext=.jpg&width=800, medium],[../stock/images/others/img1.jpg?ext=.jpg&width=1000, large]" />
                                             </div>
                                             <div class="gallery__caption">
                                                <div class="gallery__caption-text"></div>
                                             </div>
                                          </div>
                                          <div>
                                             <div>
                                                <img data-lazy="../stock/images/others/img2.jpg?ext=.jpg&width=1000" data-interchange="[../stock/images/others/img2.jpg?ext=.jpg&width=600, small],[../stock/images/others/img2.jpg?ext=.jpg&width=800, medium],[../stock/images/others/img2.jpg?ext=.jpg&width=1000, large]" />
                                             </div>
                                             <div class="gallery__caption">
                                                <div class="gallery__caption-text"></div>
                                             </div>
                                          </div>
                                          <div>
                                             <div>
                                                <img data-lazy="../stock/images/others/img3.jpg?ext=.jpg&width=1000" data-interchange="[../stock/images/others/img3.jpg?ext=.jpg&width=600, small],[../stock/images/others/img3.jpg?ext=.jpg&width=800, medium],[../stock/images/others/img2.jpg?ext=.jpg&width=1000, large]" />
                                             </div>
                                             <div class="gallery__caption">
                                                <div class="gallery__caption-text"></div>
                                             </div>
                                          </div>
                                          <div>
                                             <div>
                                                <img data-lazy="../stock/images/others/img4.jpg?ext=.jpg&width=1000" data-interchange="[../stock/images/others/img4.jpg?ext=.jpg&width=600, small],[../stock/images/others/img4.jpg?ext=.jpg&width=800, medium],[../stock/images/others/img4.jpg?ext=.jpg&width=1000, large]" />
                                             </div>
                                             <div class="gallery__caption">
                                                <div class="gallery__caption-text"></div>
                                             </div>
                                          </div>
                                          <div>
                                             <div>
                                                <img data-lazy="../stock/images/others/img5.jpg?ext=.jpg&width=1000" data-interchange="[../stock/images/others/img5.jpg?ext=.jpg&width=600, small],[../stock/images/others/img5.jpg?ext=.jpg&width=800, medium],[../stock/images/others/img5.jpg?ext=.jpg&width=1000, large]" />
                                             </div>
                                             <div class="gallery__caption">
                                                <div class="gallery__caption-text"></div>
                                             </div>
                                          </div>
                                          <div>
                                             <div>
                                                <img data-lazy="../stock/images/others/img2.jpg?ext=.jpg&width=1000" data-interchange="[../stock/images/others/img2.jpg?ext=.jpg&width=600, small],[../stock/images/others/img2.jpg?ext=.jpg&width=800, medium],[../stock/images/others/img2.jpg?ext=.jpg&width=1000, large]" />
                                             </div>
                                             <div class="gallery__caption">
                                                <div class="gallery__caption-text"></div>
                                             </div>
                                          </div>
                                          <div>
                                             <div>
                                                <img data-lazy="../stock/images/others/img3.jpg?ext=.jpg&width=1000" data-interchange="[../stock/images/others/img3.jpg?ext=.jpg&width=600, small],[../stock/images/others/img3.jpg?ext=.jpg&width=800, medium],[../stock/images/others/img3.jpg?ext=.jpg&width=1000, large]" />
                                             </div>
                                             <div class="gallery__caption">
                                                <div class="gallery__caption-text"></div>
                                             </div>
                                          </div>
                                       </div>
                                       <button class="close-button" data-close aria-label="Close modal" type="button">
                                       <span aria-hidden="true">&times;</span>
                                       </button>
                                    </div>
                                    
                                    <div class="row collapse small-up-3 large-up-2">
                                       <div class="columns header_gallery_column">
                                          <a class="destination-gallery__thumb is-video" data-open="destinationsGalleryModal" data-slide-index="0" style="background-image:url('../stock/images/others/img3.jpg');"></a>
                                       </div>
                                       <div  class="columns header_gallery_column">
                                          <a class="destination-gallery__thumb" data-interchange="[../stock/images/others/img3.jpg?ext=.jpg&width=400, small],[../stock/images/others/img3.jpg?ext=.jpg&amp;width=400, medium],[../stock/images/others/img3.jpg?ext=.jpg&amp;width=400, large]" data-open="destinationsGalleryModal" data-slide-index="1"></a>
                                       </div>
                                       
                                       <div  class="columns header_gallery_column">
                                          <a class="destination-gallery__thumb" data-interchange="[../stock/images/others/img4.jpg?ext=.jpg&amp;width=400, small],[../stock/images/others/img4.jpg?ext=.jpg&amp;width=400, medium],[../stock/images/others/img4.jpg?ext=.jpg&amp;width=400, large]" data-open="destinationsGalleryModal" data-slide-index="2">
                                             <div class="gallery-count hide-for-large">
                                                <div class="gallery-count__overlay">
                                                   <div class="gallery-count__container">
                                                      <div class="text-center">
                                                         <img src="../stock/images/icons/icon_camera.svg" alt="Camera" />
                                                         <div>SEE ALL</div>
                                                         <div class="js-hook--gallery-count count"></div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </a>
                                       </div>

                                       <div class="columns show-for-large header_gallery_column">
                                          <a class="destination-gallery__thumb" data-interchange="[../stock/images/others/img5.jpg?ext=.jpg&amp;width=400, small],[../stock/images/others/img5.jpg?ext=.jpg&amp;width=400, medium],[../stock/images/others/img5.jpg?ext=.jpg&amp;width=400, large]" data-open="destinationsGalleryModal" data-slide-index="3">
                                             <div class="gallery-count">
                                                <div class="gallery-count__overlay">
                                                   <div class="gallery-count__container">
                                                      <div class="text-center">
                                                         <img src="../stock/images/icons/icon_camera.svg" alt="Camera" />
                                                         <div>SEE ALL</div>
                                                         <div class="js-hook--gallery-count count"></div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="large-6 large-pull-6 columns">
                                 <article>
                                    <div class="content__panel">
                                       <div class="readmore expand-on-large">
                                          <div class="content__panel-content">
                                             <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cu</p>
                                          </div>
                                          <div class="content__panel-social">
                                             <h4>SOCIAL</h4>
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
                                 </article>
                              </div>
                           </div>
                        </div>

                              
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
                                 <ul class="accordion" data-accordion data-allow-all-closed="true">
                                    <li class="accordion-item" data-accordion-item>
                                       <a href="#" class="accordion-title medium-disabled">
                                          <h2 class="expando-line">
                                             ROOMS
                                          </h2>
                                       </a>
                                       <div class="accordion-content" data-tab-content>                                         
                                          <section class="room-listing">
                                             <ul class="accordion" data-accordion data-allow-all-closed="true">
                                                <li class="accordion-item is-active" data-accordion-item>
                                                  
                                                   <div class="accordion-content" data-tab-content>
                                                      <div class="row collapse room-list">
                                                         <div class="columns medium-6 large-4 room-column">
                                                            <article class="pod pod--room js-hook--room-expand" itemscope="" itemtype="http://schema.org/Product" data-room-name="premium-double">
                                                               <button class="close-button" type="button"></button>
                                                               <div class="pod--room__image" style="background-image:url('../stock/images/others/img5.jpg?ext=.jpg');">
                                                               </div>

                                                               <div class="room-gallery">
                                                                  <div>
                                                                     <img data-lazy="../stock/images/others/img5.jpg?ext=.jpg" />
                                                                  </div>
                                                               </div>

                                                               <div class="pod--room__content js-hook--room-content">
                                                                  <h2 itemprop="name">
                                                                     PRIVATE ROOMS
                                                                  </h2>
                                                                  <div class="pod--room__price">
                                                                     <span itemprop="price">From
                                                                     <span data-pricing>
                                                                     <span >RM</span>
                                                                     <span data-price="90.0000">90.0000</span>
                                                                     </span> per room</span>
                                                                  </div>
                                                                  <div class="pod--room__short-description" itemprop="description">
                                                                     <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores </p>
                                                                     <span class="more">More</span>
                                                                  </div>
                                                                  <div class="expanded-content">
                                                                     <div class="row collapse">
                                                                        <div class="columns">
                                                                           <div class="pod--room__description" itemprop="description">
                                                                                et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                                                                           </div>
                                                                        </div>
                                                                     </div>
                                                                  </div>
                                                               </div>
                                                            </article>
                                                         </div>
                                                         <div class="columns medium-6 large-4 room-column">
                                                            <article class="pod pod--room js-hook--room-expand" itemscope="" itemtype="http://schema.org/Product" data-room-name="twin-or-double">
                                                               <button class="close-button" type="button"></button>
                                                               <div class="pod--room__image" style="background-image:url('../stock/images/others/img5.jpg?width=900&amp;height=600&amp;ext=.jpg');">
                                                               </div>
                                                               <div class="room-gallery">
                                                                  <div>
                                                                     <img data-lazy="../stock/images/others/img5.jpg?width=900&amp;height=600&amp;ext=.jpg" />
                                                                  </div>
                                                                  </div>
                                                               <div class="pod--room__content js-hook--room-content">
                                                                  <h2 itemprop="name">
                                                                     DORMITORY
                                                                  </h2>
                                                                  <div class="pod--room__price">
                                                                     <span itemprop="price">From
                                                                     <span data-pricing>
                                                                     <span>RM</span>
                                                                     <span data-price="70.0000">70.0000</span>
                                                                     </span> per room</span>
                                                                  </div>
                                                                  <div class="pod--room__short-description" itemprop="description">
                                                                     <p>quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam
                                                                     </p>
                                                                     <span class="more">More</span>
                                                                  </div>
                                                                  <div class="expanded-content">
                                                                     <div class="row collapse">
                                                                        <div class="columns">
                                                                           <div class="pod--room__description" itemprop="description">
                                                                                et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repella
                                                                           </div>
                                                                        </div>
                                                                     </div>
                                                                     
                                                                  </div>
                                                               </div>
                                                            </article>
                                                         </div>
                                                         <div class="columns medium-6 large-4 room-column">
                                                            <article class="pod pod--room js-hook--room-expand" itemscope="" itemtype="http://schema.org/Product" data-room-name="quad-room">
                                                               <button class="close-button" type="button"></button>
                                                               <div class="pod--room__image" style="background-image:url('../stock/images/others/img5.jpg?width=900&amp;height=600&amp;ext=.jpg');">
                                                               </div>
                                                               <div class="room-gallery">
                                                                  <div>
                                                                     <img data-lazy="../stock/images/others/img5.jpg?width=900&amp;height=600&amp;ext=.jpg" />
                                                                  </div>
                                                               </div>
                                                               <div class="pod--room__content js-hook--room-content">
                                                                  <h2 itemprop="name">
                                                                     MANSION SUITE
                                                                  </h2>
                                                                  <div class="pod--room__price">
                                                                     <span itemprop="price">From
                                                                     <span data-pricing>
                                                                     <span>RM</span>
                                                                     <span data-price="88.0000">88.0000</span>
                                                                     </span> per room</span>
                                                                  </div>
                                                                  
                                                                  <div class="pod--room__short-description" itemprop="description">
                                                                     <p>quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur </p>
                                                                     <span class="more">More</span>
                                                                  </div>
                                                                  <div class="expanded-content">
                                                                     <div class="row collapse">
                                                                        <div class="columns">
                                                                           <div class="pod--room__description" itemprop="description">
                                                                                aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
                                                                           </div>
                                                                        </div>
                                                                     </div>
                                                                     
                                                                  </div>
                                                               </div>
                                                            </article>
                                                         </div>
                                                        
                                                         
                                                         
                                                        
                                                      </div>
                                                   </div>
                                                </li>
                                             </ul>
                                          </section>
                                          
                                       </div>
                                    </li>
                                 </ul>
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

                        <div id="rooftop-panel">
                            <div class="row">
                                <div class="columns">
                                    <h2 class="expando-line">RoofTop</h2>
                                </div>
                            </div>
                            <section id="rooftop" class="spaces-panel ">
                                <center>
                                    <div class="rooftop-reggae-wrapper">
                                        <video class="rooftop-reggae-video" id="rooftop-reggae-video" loop>
                                            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>
                                        </video>
                                        <div class="rooftop-reggae-playButton" id="rooftop-reggae-playButton" video-id="rooftop-reggae-video"></div>
                                    </div>
                                </center>
                            </section>
                        </div>

                        <div id="reggae-gallery" >
                                <div class="destination-gallery">
                                    <div class="reveal large gallery-modal" id="reggaeGalleryModal" data-reveal>
                                        <div class="rooftop-reggae-gallery" id="rooftop-reggae-gallery">
                                            <center>
                                                <div class="gallery__caption">
                                                        <div id="gallery__caption-text">testtet</div>
                                                          <div id="ReggaeGalleryImage">

                                                    </div>
                                                </div>
                                            </center>
                                        </div>
                                        <button class="close-button" data-close aria-label="Close modal" type="button">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>

                                </div>

                           



<div class="content content--destinations">

  
        <div class="row collapse expanded destinations">
                <div class="columns large-6">
                   <div class="row collapse destinations__column left">

                      
             <div class="columns small-6 large-4">
                <div class="destinations__pod" id="reggae-photo-image1">
                   <div class="destinations__pod-image" src="../stock/images/others/img2.jpg?ext=.jpg&amp;width=800" data-interchange="[../stock/images/others/img2.jpg?ext=.jpg&amp;width=400, small],[../stock/images/others/img2.jpg?ext=.jpg&amp;width=600, medium],[../stock/images/others/img2.jpg?ext=.jpg&amp;width=800, large]">
                   </div>
                   <a href="javascript:void(0)">
                      <div class="destinations__pod-content">
                         <span>Amsterdam</span>                
                      </div>
                   </a>
                </div>
             </div>

             <div class="columns small-6 large-4">
                <div class="destinations__pod" id="reggae-photo-image2">
                    <div class="destinations__pod-image" src="../stock/images/others/img2.jpg?ext=.jpg&amp;width=800" data-interchange="[../stock/images/others/img2.jpg?ext=.jpg&amp;width=400, small],[../stock/images/others/img2.jpg?ext=.jpg&amp;width=600, medium],[../stock/images/others/img2.jpg?ext=.jpg&amp;width=800, large]">
                   </div>
                   <a href="javascript:void(0)">
                      <div class="destinations__pod-content">
                         <span>
                         Barcelona</span>
                      </div>
                   </a>
                </div>
             </div>
             <div class="columns small-6 large-4">
                <div class="destinations__pod" id="reggae-photo-image3">
                   <div class="destinations__pod-image" src="../stock/images/others/img4.jpg?ext=.jpg&amp;width=800" data-interchange="[../stock/images/others/img4.jpg?ext=.jpg&amp;width=400, small],[../stock/images/others/img4.jpg?ext=.jpg&amp;width=600, medium],[../stock/images/others/img4.jpg?ext=.jpg&amp;width=800, large]">
                   </div>
                   <a href="javascript:void(0)">
                      <div class="destinations__pod-content">
                         <span>
                         Berlin-Mitte</span>
                      </div>
                   </a>
                </div>
             </div>
             <div class="columns small-6 large-4">
                <div class="destinations__pod" id="reggae-photo-image4">
                   <div class="destinations__pod-image" src="../stock/images/others/img5.jpg?ext=.jpg&amp;width=800" data-interchange="[../stock/images/others/img5.jpg?ext=.jpg&amp;width=400, small],[../stock/images/others/img5.jpg?ext=.jpg&amp;width=600, medium],[../stock/images/others/img5.jpg?ext=.jpg&amp;width=800, large]">
                   </div>
                   <a href="javascript:void(0)">
                      <div class="destinations__pod-content">
                         <span>
                         Dublin</span>
                      </div>
                   </a>
                </div>
             </div>
                      <div class="columns small-6 large-4 show-for-large">
                         <div class="destinations__pod form">
                            <div class="form form--newsletter js-hook--newsletter-pod" data-form-source="Pod">
                             
                            </div>
                         </div>
                      </div>


                      <div class="columns small-6 large-4">
                            <div class="destinations__pod" id="reggae-photo-image6">
                                <div class="destinations__pod-image" src="../stock/images/others/img5.jpg?ext=.jpg&amp;width=800" data-interchange="[../stock/images/others/img5.jpg?ext=.jpg&amp;width=400, small],[../stock/images/others/img5.jpg?ext=.jpg&amp;width=600, medium],[../stock/images/others/img5.jpg?ext=.jpg&amp;width=800, large]">
                               </div>
                               <a href="javascript:void(0)">
                                  <div class="destinations__pod-content">
                                     <span>
                                     Hamburg</span>
                                  </div>
                               </a>
                            </div>
                         </div>
                         <div class="columns small-6 large-4">
                            <div class="destinations__pod" id="reggae-photo-image7">
                                <div class="destinations__pod-image" src="../stock/images/others/img5.jpg?ext=.jpg&amp;width=800" data-interchange="[../stock/images/others/img5.jpg?ext=.jpg&amp;width=400, small],[../stock/images/others/img5.jpg?ext=.jpg&amp;width=600, medium],[../stock/images/others/img5.jpg?ext=.jpg&amp;width=800, large]">
                               </div>
                               <a href="javascript:void(0)">
                                  <div class="destinations__pod-content">
                                     <span>
                                     Madrid</span>
                                     
                                  </div>
                               </a>
                            </div>
                         </div>
                         <div class="columns small-6 large-4">
                            <div class="destinations__pod"  id="reggae-photo-image8">
                                <div class="destinations__pod-image" src="../stock/images/others/img5.jpg?ext=.jpg&amp;width=800" data-interchange="[../stock/images/others/img5.jpg?ext=.jpg&amp;width=400, small],[../stock/images/others/img5.jpg?ext=.jpg&amp;width=600, medium],[../stock/images/others/img5.jpg?ext=.jpg&amp;width=800, large]">
                               </div>
                               <a href="javascript:void(0)">
                                  <div class="destinations__pod-content">
                                     <span>
                                     Paris</span>
                                  </div>
                               </a>
                            </div>
                         </div>
            
                         
                         <div class="columns small-6 large-4">
                            <div class="destinations__pod" id="reggae-photo-image9">
                                <div class="destinations__pod-image" src="../stock/images/others/img5.jpg?ext=.jpg&amp;width=800" data-interchange="[../stock/images/others/img5.jpg?ext=.jpg&amp;width=400, small],[../stock/images/others/img5.jpg?ext=.jpg&amp;width=600, medium],[../stock/images/others/img5.jpg?ext=.jpg&amp;width=800, large]">
                               </div>
                               <a href="javascript:void(0)">
                                  <div class="destinations__pod-content">
                                     <span>
                                     Rome</span>
                                  </div>
                               </a>
                            </div>
                         </div>

                   </div>
                </div>
                <div class="columns large-6">
                   <div class="row collapse destinations__column right">

                        <div class="columns small-6 large-4">
                                <div class="destinations__pod" id="reggae-photo-image10">
                                    <div class="destinations__pod-image" src="../stock/images/others/img5.jpg?ext=.jpg&amp;width=800" data-interchange="[../stock/images/others/img5.jpg?ext=.jpg&amp;width=400, small],[../stock/images/others/img5.jpg?ext=.jpg&amp;width=600, medium],[../stock/images/others/img5.jpg?ext=.jpg&amp;width=800, large]">
                                   </div>
                                   <a href="javascript:void(0)">
                                      <div class="destinations__pod-content">
                                         <span>
                                         Miami</span>
                                        
                                      </div>
                                   </a>
                                </div>
                             </div>
                             <div class="columns small-6 large-4">
                                <div class="destinations__pod" id="reggae-photo-image11">
                                    <div class="destinations__pod-image" src="../stock/images/others/img5.jpg?ext=.jpg&amp;width=800" data-interchange="[../stock/images/others/img5.jpg?ext=.jpg&amp;width=400, small],[../stock/images/others/img5.jpg?ext=.jpg&amp;width=600, medium],[../stock/images/others/img5.jpg?ext=.jpg&amp;width=800, large]">
                                   </div>
                                   <a href="javascript:void(0)">
                                      <div class="destinations__pod-content">
                                         <span>
                                         Berlin-Prenzlauer Berg</span>
                                      </div>
                                   </a>
                                </div>
                             </div>
                             <div class="columns small-6 large-4">
                                <div class="destinations__pod" id="reggae-photo-image12">
                                    <div class="destinations__pod-image" src="../stock/images/others/img5.jpg?ext=.jpg&amp;width=800" data-interchange="[../stock/images/others/img5.jpg?ext=.jpg&amp;width=400, small],[../stock/images/others/img5.jpg?ext=.jpg&amp;width=600, medium],[../stock/images/others/img5.jpg?ext=.jpg&amp;width=800, large]">
                                   </div>
                                   <a href="destinations/copenhagen.html">
                                      <div class="destinations__pod-content">
                                         <span>
                                         Copenhagen</span>
                                      </div>
                                   </a>
                                </div>
                             </div>
                             <div class="columns small-6  large-8">
                                <div class="destinations__pod double" id="reggae-photo-image13">
                                    <div class="destinations__pod-image" src="../stock/images/others/img5.jpg?ext=.jpg&amp;width=800" data-interchange="[../stock/images/others/img5.jpg?ext=.jpg&amp;width=400, small],[../stock/images/others/img5.jpg?ext=.jpg&amp;width=600, medium],[../stock/images/others/img5.jpg?ext=.jpg&amp;width=800, large]">
                                   </div>
                                   <a href="javascript:void(0)">
                                      <div class="destinations__pod-content">
                                         <span>
                                         Stockholm</span>
                                         <div class="destinations__pod-info">
                                            Our newest hostel right in the heart of Stockholm's city centre
                                         </div>
                                      </div>
                                   </a>
                                </div>
                             </div>
                             <div class="columns small-6 large-4">
                                <div class="destinations__pod" id="reggae-photo-image14">
                                    <div class="destinations__pod-image" src="../stock/images/others/img5.jpg?ext=.jpg&amp;width=800" data-interchange="[../stock/images/others/img5.jpg?ext=.jpg&amp;width=400, small],[../stock/images/others/img5.jpg?ext=.jpg&amp;width=600, medium],[../stock/images/others/img5.jpg?ext=.jpg&amp;width=800, large]">
                                   </div>
                                   <a href="javascript:void(0)">
                                      <div class="destinations__pod-content">
                                         <span>
                                         London</span>
                                      </div>
                                   </a>
                                </div>
                             </div>
                             <div class="columns small-6 large-4">
                                <div class="destinations__pod" id="reggae-photo-image15">
                                    <div class="destinations__pod-image" src="../stock/images/others/img5.jpg?ext=.jpg&amp;width=800" data-interchange="[../stock/images/others/img5.jpg?ext=.jpg&amp;width=400, small],[../stock/images/others/img5.jpg?ext=.jpg&amp;width=600, medium],[../stock/images/others/img5.jpg?ext=.jpg&amp;width=800, large]">
                                   </div>
                                   <a href="javascript:void(0)">
                                      <div class="destinations__pod-content">
                                         <span>Venice</span>               
                                      </div>
                                   </a>
                                </div>
                             </div>


                   </div>
                </div>
             </div>
             </div>



                        </div>
                            
                         

                        
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