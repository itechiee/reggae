 
 <?php 
    $BannerImage = isset($homes_content->banner_image)?url('/uploads/banner').'/'.$homes_content->banner_image:url('/images/bg').'/default-bg.png';  
    $mobileBannerImage = isset($homes_content->mobile_banner_image)?url('/uploads/banner').'/'.$homes_content->mobile_banner_image:url('/images/bg').'/default-bg.png';  
 ?>
 <div class="hero hero--booking" data-interchange="[{{ $mobileBannerImage }}?ext=.jpg&width=800, small],[{{ $BannerImage }}?ext=.jpg&width=480, medium],[{{ $BannerImage }}?ext=.jpg&width=480, large]">
                                   
        <div class="hero-wrap">
            <div class="row">
                <div class="columns">
                    <div class="hero__content">
                    <div class="hero__content-inner">
                        <div class="hero__content-bg">
                            <h4 class="as-h1">                            
                                <?php echo isset($homes_content->title)?$homes_content->title:'REGGAE MANSION'; ?> 
                                <span></span>
                            </h4>
                            <div class="banner_subtitle">
                                <h1>
                                <?php echo isset($homes_content->subtitle)?$homes_content->subtitle:'PROBABLY THE NO.1 BACKPACKER PARTY HOSTEL IN KUALA LUMPUR'; ?> 
                                    
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

                                        @if($home_video)
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
                                        @endif
                                        @if($home_gallery)
                                            @foreach($home_gallery as $homePhoto)
                                            <div>
                                                <div>
                                                    <img data-lazy="{{url('/uploads/home').'/'.$homePhoto->file_name}}?ext=.jpg&width=1000" data-interchange="[{{url('/uploads/home').'/'.$homePhoto->file_name}}?ext=.jpg&width=600, small],[{{url('/uploads/home').'/'.$homePhoto->file_name}}?ext=.jpg&width=800, medium],[../stock/images/others/img1.jpg?ext=.jpg&width=1000, large]" />
                                                </div>
                                                <div class="gallery__caption">
                                                    <div class="gallery__caption-text">{{ $homePhoto->description }}</div>
                                                </div>
                                            </div>
                                            @endforeach
                                        @endif                                      
                                      
                                    </div>
                                    <button class="close-button" data-close aria-label="Close modal" type="button">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                 </div>
                                 
                                 <div class="row collapse small-up-3 large-up-2">
                                     @if($home_video)
                                        <?php
                                            $thumbnail = url('/images/others/video.jpg');
                                            if(isset($home_video->thumbnail)){
                                                $thumbnail = url('/uploads/home').'/'.$home_video->thumbnail;
                                            }
                                        ?>
                                        <div class="columns header_gallery_column">
                                            <a class="destination-gallery__thumb is-video" data-open="destinationsGalleryModal" data-slide-index="0" style="background-image:url('{{ $thumbnail }}');"></a>
                                        </div>
                                     @endif
                                    
                                     <?php if(isset($home_gallery[0])){ ?>
                                            <div  class="columns header_gallery_column">
                                                <a class="destination-gallery__thumb" data-interchange="[{{ url('/uploads/home').'/'.$home_gallery[0]->file_name }}?ext=.jpg&width=400, small],[{{ url('/uploads/home').'/'.$home_gallery[0]->file_name }}?ext=.jpg&amp;width=400, medium],[{{ url('/uploads/home').'/'.$home_gallery[0]->file_name }}?ext=.jpg&amp;width=400, large]" data-open="destinationsGalleryModal" data-slide-index="1"></a>
                                            </div>
                                    <?php } ?>
                                    
                                    <?php if(isset($home_gallery[1])){ ?>
                                        <div  class="columns header_gallery_column">
                                            <a class="destination-gallery__thumb" data-interchange="[{{ url('/uploads/home').'/'.$home_gallery[1]->file_name }}?ext=.jpg&amp;width=400, small],[{{ url('/uploads/home').'/'.$home_gallery[1]->file_name }}?ext=.jpg&amp;width=400, medium],[{{ url('/uploads/home').'/'.$home_gallery[1]->file_name }}?ext=.jpg&amp;width=400, large]" data-open="destinationsGalleryModal" data-slide-index="2">
                                                <div class="gallery-count hide-for-large">
                                                    <div class="gallery-count__overlay">
                                                        <div class="gallery-count__container">
                                                        <div class="text-center">
                                                            <img src="{{ url('/images/icons/icon_camera.svg') }}" alt="Camera" />
                                                            <div>SEE ALL</div>
                                                            <div class="js-hook--gallery-count count"></div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    <?php } ?>
                                    
                                    <?php if(isset($home_gallery[2])){ ?>
                                        <div class="columns show-for-large header_gallery_column">
                                            <a class="destination-gallery__thumb" data-interchange="[{{ url('/uploads/home').'/'.$home_gallery[2]->file_name }}?ext=.jpg&amp;width=400, small],[{{ url('/uploads/home').'/'.$home_gallery[2]->file_name }}?ext=.jpg&amp;width=400, medium],[{{ url('/uploads/home').'/'.$home_gallery[2]->file_name }}?ext=.jpg&amp;width=400, large]" data-open="destinationsGalleryModal" data-slide-index="3">
                                                <div class="gallery-count">
                                                    <div class="gallery-count__overlay">
                                                        <div class="gallery-count__container">
                                                        <div class="text-center">
                                                            <img src="{{ url('/images/icons/icon_camera.svg') }}" alt="Camera" />
                                                            <div>SEE ALL</div>
                                                            <div class="js-hook--gallery-count count"></div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                            </div>
                                    <?php } ?>
                                    

                                 </div>
                              </div>
                           </div>
                           <div class="large-6 large-pull-6 columns">
                              <article>
                                 <div class="content__panel">
                                    <div class="readmore expand-on-large">
                                       <div class="content__panel-content">
                                          <p>
                                          @if(isset($homes_content->description))
                                            {{ $homes_content->description }}
                                          @endif
                                          </p>
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
