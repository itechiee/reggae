<div id="rooftop-panel">
    <div class="row">
        <div class="columns">
            <h2 class="expando-line">RoofTop</h2>
        </div>
    </div>
    <section id="rooftop" class="spaces-panel ">
        <center>
            <div class="rooftop-reggae-wrapper">
            <?php $rooftopVideo = isset($rooftop_video_banner)?url('/uploads/rooftop').'/'.$rooftop_video_banner->file_name:url('/images/others').'/default-rooftop.mp4'; ?>
                <video class="rooftop-reggae-video" id="rooftop-reggae-video" loop>
                    <source src="{{ $rooftopVideo }}" />
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
             <?php $i=1; ?>
             @if($rooftopLeftA)
                @foreach($rooftopLeftA as $rooftopLeftAGallery)
                    <div class="columns small-6 large-4">
                        <div class="destinations__pod" id="{{ 'reggae-photo-image'.$i }}">

                        <?php $filePath = url('/uploads/rooftop').'/'.$rooftopLeftAGallery['file_name'];
                                $ext =  '.'.pathinfo($filePath, PATHINFO_EXTENSION);
                        ?>
                            <div class="destinations__pod-image" src="{{ $filePath }}?ext={{ $ext }}&amp;width=800" data-interchange="[{{ $filePath }}?ext={{ $ext }}&amp;width=400, small],[{{ $filePath }}?ext={{ $ext }}&amp;width=600, medium],[{{ $filePath }}?ext={{ $ext }}&amp;width=800, large]">
                        </div>
                        <a href="javascript:void(0)">
                            <div class="destinations__pod-content">
                                <span>
                                    {{ $rooftopLeftAGallery['description'] }}
                                </span>
                            </div>
                        </a>
                        </div>
                    </div>
                    <?php $i++; ?>
                @endforeach
             @endif

             <div class="columns small-6 large-4 show-for-large">
                <img src="{{ url('/images/logos/header_title.jpg') }}" style="width:100%;height:200px">
            </div>

            @if($rooftopLeftA)
                @foreach($rooftopLeftB as $rooftopLeftBGallery)
                    <div class="columns small-6 large-4">
                        <div class="destinations__pod" id="{{ 'reggae-photo-image'.$i }}">

                        <?php $filePath = url('/uploads/rooftop').'/'.$rooftopLeftBGallery['file_name'];
                                $ext =  '.'.pathinfo($filePath, PATHINFO_EXTENSION);
                        ?>
                            <div class="destinations__pod-image" src="{{ $filePath }}?ext={{ $ext }}&amp;width=800" data-interchange="[{{ $filePath }}?ext={{ $ext }}&amp;width=400, small],[{{ $filePath }}?ext={{ $ext }}&amp;width=600, medium],[{{ $filePath }}?ext={{ $ext }}&amp;width=800, large]">
                        </div>
                        <a href="javascript:void(0)">
                            <div class="destinations__pod-content">
                                <span>
                                    {{ $rooftopLeftBGallery['description'] }}
                                </span>
                            </div>
                        </a>
                        </div>
                    </div>
                    <?php $i++; ?>
                @endforeach
             @endif 
            </div>
        </div>
                <div class="columns large-6">
                   <div class="row collapse destinations__column right">
                       

                   @if($rooftopRight)
                @foreach($rooftopRight as $rooftopRightBGallery)

                <?php  if($i == 12) { ?>
                    <div class="columns small-6  large-8">
                            <div class="destinations__pod double" id="{{ 'reggae-photo-image'.$i }}">
                            <?php $filePath = url('/uploads/rooftop').'/'.$rooftopRightBGallery['file_name'];
                                    $ext =  '.'.pathinfo($filePath, PATHINFO_EXTENSION);
                            ?>
                                <div class="destinations__pod-image" src="{{ $filePath }}?ext={{ $ext }}&amp;width=800" data-interchange="[{{ $filePath }}?ext={{ $ext }}&amp;width=400, small],[{{ $filePath }}?ext={{ $ext }}?ext=.jpg&amp;width=600, medium],[{{ $filePath }}?ext={{ $ext }}?ext=.jpg&amp;width=800, large]">
                            </div>
                            <a href="javascript:void(0)">
                                <div class="destinations__pod-content">
                                    <span>{{ $rooftopRightBGallery['description'] }}</span>
                                    <!-- <div class="destinations__pod-info">
                                        Our newest hostel right in the heart of Stockholm's city centre
                                    </div> -->
                                </div>
                            </a>
                        </div>
                    </div>
                <?php } else { ?>
                    <div class="columns small-6 large-4">
                        <div class="destinations__pod" id="{{ 'reggae-photo-image'.$i }}">

                        <?php $filePath = url('/uploads/rooftop').'/'.$rooftopRightBGallery['file_name'];
                                $ext =  '.'.pathinfo($filePath, PATHINFO_EXTENSION);
                        ?>
                            <div class="destinations__pod-image" src="{{ $filePath }}?ext={{ $ext }}&amp;width=800" data-interchange="[{{ $filePath }}?ext={{ $ext }}&amp;width=400, small],[{{ $filePath }}?ext={{ $ext }}&amp;width=600, medium],[{{ $filePath }}?ext={{ $ext }}&amp;width=800, large]">
                        </div>
                        <a href="javascript:void(0)">
                            <div class="destinations__pod-content">
                                <span>
                                    {{ $rooftopRightBGallery['description'] }}
                                </span>
                            </div>
                        </a>
                        </div>
                    </div>
                    
                <?php } $i++; ?>
                @endforeach
             @endif 

                        <!-- <div class="columns small-6 large-4">
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
                             </div> -->


                   </div>
                </div>
             </div>
             </div>



                        </div>