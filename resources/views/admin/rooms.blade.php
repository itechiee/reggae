@extends ('layouts.admin_dashboard')

@section('section')

        <div id="page-wrapper">
            <div class="row">
                <div class="col-lg-6">
                    <h1 class="page-header">{{ $page_heading }}</h1>
                </div>
                <div class="col-lg-6">
                       <a href="{{ url('/admin/rooms/view_room_detail') }}" class="page-header pull-right"> <button type="View" class="btn btn-default">View</button></a>
                </div>
                <!-- /.col-lg-12 -->
           </div>
			 <div class="flash-message">
                @if($errors->has())
                   @foreach ($errors->all() as $error)
                      <h4 class="alert alert-danger">{{ $error }}</h4>
                  @endforeach
                @endif
            </div>
            <div class="row">  
                <div class="flash-message">
                    @foreach (['danger', 'warning', 'success', 'info'] as $msg)
                      @if(Session::has('alert-' . $msg))

                      <p class="alert alert-{{ $msg }}">{{ Session::get('alert-' . $msg) }} <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a></p>
                      @endif
                    @endforeach
                </div>
                <div class="col-sm-12">
                    <div class="row card-box" >
                        <div class="col-lg-6">
                            <form role="form" method="POST" action="{{ url('/admin/rooms/store') }}">
                                <input type="hidden" name="_token" value="{{ csrf_token() }}">
                                <div class="form-group">
                                    <label>Room Name</label>
                                    <input class="form-control" type="text" name="room_name">
                                </div>
                               
                               
                                <div class="form-group">
                                    <label>Price(Starting price)</label>
                                    <input class="form-control" type="number" name="room_price">
                                </div>

                                <div class="form-group">
                                    <label>Description</label>
                                    <textarea  class="form-control" name="room_description"></textarea>
                                </div>
                               
                                <button type="submit" class="btn btn-default">Submit</button>
                                <button type="reset" class="btn btn-default">Reset</button>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
            <!-- /#page-wrapper -->

            
</div>
@stop

