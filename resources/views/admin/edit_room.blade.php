@extends ('layouts.admin_dashboard')

@section('section')

        <div id="page-wrapper">
            <div class="row">
                <div class="col-lg-6">
                    <h1 class="page-header">{{ $page_heading }}</h1>
                </div>
                <div class="col-lg-6">
                       <a href="{{ url('/admin/rooms/view_room_details') }}" class="page-header pull-right"> <button type="View" class="btn btn-default">Back</button></a>
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
                    <div class="row">
                        <div class="col-lg-6">
                        {!! Form::open(['url' => 'admin/rooms/update', 'method' => 'post' , 'enctype' => 'multipart/form-data']) !!}
                        {!! Form::hidden('id', $room->id, ['class' => 'form-control', 'id' => 'roomId']) !!}
                              
                                <div class="col-md-12 col-sm-12 col-xs-12 form-group">
                                    <div class="col-md-6 col-sm-6 col-xs-6"><label>Room Name</label></div>
				                    <div class="col-md-6 col-sm-6 col-xs-6">
                                        {!! Form::text('room_name', $room->room_name, ['class' => 'form-control', 'id' => 'Description']) !!}
                                    </div>				                    			                    
			                    </div>
			                     <div class="col-md-12 col-sm-12 col-xs-12 form-group">
                                    <div class="col-md-6 col-sm-6 col-xs-6"><label>Price(Starting price)</label></div>
				                    <div class="col-md-6 col-sm-6 col-xs-6">
                                        {!! Form::text('price', $room->price, ['class' => 'form-control', 'id' => 'price']) !!}
                                    </div>				                    			                    
			                    </div>

                                <div class="col-md-12 col-sm-12 col-xs-12 form-group">
                                    <div class="col-md-6 col-sm-6 col-xs-6"><label>Price Text</label></div>
				                    <div class="col-md-6 col-sm-6 col-xs-6">
                                        {!! Form::text('price_text', $room->price_text, ['class' => 'form-control', 'id' => 'price']) !!}
                                    </div>				                    			                    
			                    </div>

                                <div class="col-md-12 col-sm-12 col-xs-12 form-group">
                                    <div class="col-md-6 col-sm-6 col-xs-6"><label>Short Description</label></div>
				                    <div class="col-md-6 col-sm-6 col-xs-6">
                                        {!! Form::textarea('short_description', $room->short_description, ['class' => 'form-control', 'id' => 'short_description', 'rows' => 4, 'cols' =>50]) !!}	
                                    </div>				                    			                    
			                    </div>
			                    
			                    <div class="col-md-12 col-sm-12 col-xs-12 form-group">
                                    <div class="col-md-6 col-sm-6 col-xs-6"><label>Description</label></div>
				                    <div class="col-md-6 col-sm-6 col-xs-6">
                                        {!! Form::textarea('room_description', $room->room_description, ['class' => 'form-control', 'id' => 'room_description', 'rows' => 4, 'cols' =>50]) !!}	
                                    </div>				                    			                    
			                    </div>
                                <div class="col-md-12 col-sm-12 col-xs-12 form-group">
                                        <div class="col-md-6 col-sm-6 col-xs-6">
                                            <label>Current Image</label>
                                        </div>
                                        <div class="col-md-6 col-sm-6 col-xs-6">
                                        {!! Html::image('/uploads/rooms/'.$room->image,'image',['class' => 'col-md-6 col-sm-2', 'width' => '100']) !!}
                                        </div>                                                                  
                                </div> 
                                <div class="col-md-12 col-sm-12 col-xs-12 form-group">
                                    <div class="col-md-6 col-sm-6 col-xs-6">
                                        <label>Update Image</label>
                                    </div>
                                    <div class="col-md-6 col-sm-6 col-xs-6">
                                         <input type="file" name="file" id="file">  
                                    </div>                                                                  
                                </div>
                                
                                <div class="col-md-12 col-sm-12 col-xs-12 form-group">
                                    <div class="col-md-12">
                                        <button type="submit" class="btn btn-primary">Update</button>
                                        <button type="reset" class="btn btn-default">Reset</button>
                                    </div>	                    			                    
			                    </div> 
                            {!! Form::close() !!}
                        </div>
                        
                    </div>
                </div>

            </div>

<hr>            



            <!-- /#page-wrapper -->
        </div>
@stop
