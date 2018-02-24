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
                                            <div id="googleMap" class="columns medium-12 large-12">
                                                <div id="map"></div>
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
                                                            <ul class="menu vertical iconlist">
                                                               <li>
                                                                   <span> {{ $location->address }} </span>
                                                               </li>
                                                               <li>
                                                               {{ $location->phone }}
                                                               </li>
                                                               <li>
                                                               <!-- contactus@reggaehostelsmalaysia.com -->
                                                                  <a class="uppercase" id="askus" itemprop="email" href="mailto:{{ $location->mail }}"> <?php echo isset($location->btn_mail_text)?$location->btn_mail_text:'ASK US'; ?></a>
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
                                                      {{  $location->location_description }}
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
                              @include('includes.cafe.cafe')
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

      <script>
      function initMap() {
        var uluru = {lat: 3.1481539, lng: 101.69712589999995};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 18,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
    </script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAIWV-c2NOmAb8teF2acpPxAfSpijREbOE&callback=initMap">
    </script>

<style>
 #map {
   width: 100%;
   height: 400px;
   background-color: grey;
 }
</style>
@endsection