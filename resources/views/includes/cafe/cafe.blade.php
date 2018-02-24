
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
                                                        <?php $filePath = url('/uploads/cafe').'/'.$cafe->cafe_image;
                                                                $ext =  '.'.pathinfo($filePath, PATHINFO_EXTENSION);
                                                        ?>
                                                             <img src="{{ $filePath }}?ext={{ $ext }}">
                                                         </div>
                                                         
                                                         <div class="columns medium-4 large-3" >
                                                             <aside id="opening_hours">
                                                                <h3>OPENING HOURS :</h3>
                                                                <div>
                                                                    <span>{{ $cafe->work_days }}</span> <br>
                                                                    <span>{{ $cafe->work_time }}</span> <br><br>
                                                                     <span><b>RSVN :</b></span> <br>
                                                                     <span>{{ $cafe->phone }}</span>                                                                    
                                                                </div>
                                                             </aside>
                                                           </div>

                                                           <div class="columns medium-4 large-5">
                                                                 <aside class="callout">
                                                                    <h3>{{ $cafe->title }}</h3>
                                                                    <p>
                                                                    {{ $cafe->description }}
                                                                    </p>
                                                                 </aside>
                                                              </div>

                                                       </div>
                                                   </div>
                                                </figure>
                                             </div>
                                          </div>
                                       </section>
                                    </div>
                                 </li>
                                 
                              </ul>