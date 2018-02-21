<ul class="accordion accordion--row" data-accordion data-allow-all-closed="true">
    <li class="accordion-item" data-accordion-item>
        <a href="#" class="accordion-title medium-disabled">
            <h2 class="expando-line">
                FACILITIES
            </h2>
        </a>
        <div class="accordion-content" data-tab-content>
            <div class="row collapse">
                <div class="medium-4 large-6 columns end">
                <div class="callout default">
                    <h3>ALL HOSTEL FEATURE</h3>
                    <ul class="menu vertical uppercase iconlist">
                    @if(count($facilities['left']) > 0)
                        @foreach($facilities['left'] as $leftFacility)
                        <li> {{ $leftFacility->Description }} </li>
                        @endforeach
                    @endif
                    </ul>
                </div>
                </div>
                <div class="medium-4 large-6 columns end">
                <div class="callout default">
                    <!-- <h3>FACILITIES AT Reggae Stockholm</h3> -->
                    <ul class="menu vertical uppercase iconlist">
                    @if(count($facilities['right']) > 0)
                        @foreach($facilities['right'] as $rightFacility)
                        <li> {{ $rightFacility->Description }} </li>
                        @endforeach
                    @endif
                    </ul>
                </div>
                </div>
            </div>
        </div>
    </li>
</ul>