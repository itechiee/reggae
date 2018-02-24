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

            @if($roomsLists)
                @foreach($roomsLists as $rooms)
                <div class="columns medium-6 large-4 room-column">
                        <article class="pod pod--room js-hook--room-expand">
                           <button class="close-button" type="button"></button>

                           <?php $filePath = url('/uploads/rooms').'/'.$rooms->image;
                                    $ext =  '.'.pathinfo($filePath, PATHINFO_EXTENSION);
                            ?>
                           <div class="pod--room__image" style="background-image:url('{{ $filePath }}?ext={{ $ext }}');">
                           </div>

                           <div class="room-gallery">
                              <div>
                                 <img data-lazy="{{ $filePath }}?ext={{ $ext }}" />
                              </div>
                           </div>

                           <div class="pod--room__content js-hook--room-content">
                              <h2 itemprop="name">
                              {{ $rooms->room_name }}
                              </h2>
                              <div class="pod--room__price">
                                <span>{{ $rooms->price_text }}</span>
                                 <!-- <span itemprop="price">From
                                 <span data-pricing>
                                 <span >RM</span>
                                 <span data-price="90.0000">90.0000</span>
                                 </span> per room</span> -->
                              </div>
                              <div class="pod--room__short-description" itemprop="description">
                                 <p>{{ $rooms->short_description }}</p>
                                 <span class="more">More</span>
                              </div>
                              <div class="expanded-content">
                                 <div class="row collapse">
                                    <div class="columns">
                                       <div class="pod--room__description" itemprop="description">
                                       {{ $rooms->room_description }}
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </article>
                     </div>
                @endforeach
            @endif
                    
                    
                     
                     
                    
                  </div>
               </div>
            </li>
         </ul>
      </section>
      
   </div>
</li>
</ul>