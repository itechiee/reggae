@extends ('layouts.admin_dashboard')

@section('section')

        <div id="page-wrapper">
            <div class="row">
                <div class="col-lg-6">
                    <h1 class="page-header">{{ $page_heading }}</h1>
                </div>
                <div class="col-lg-6">
                       <a href="{{ url('/admin/cafe') }}" class="page-header pull-right"> <button type="View" class="btn btn-default">Back</button></a>
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
                        {!! Form::open(['url' => 'admin/location/update', 'method' => 'post']) !!}
                        {!! Form::hidden('id', $location->id, ['class' => 'form-control', 'id' => 'locationId']) !!}

                                <div class="col-md-12 col-sm-12 col-xs-12 form-group">
                                    <div class="col-md-6 col-sm-6 col-xs-6"><label>Address</label></div>
				                    <div class="col-md-6 col-sm-6 col-xs-6">
                                        {!! Form::text('address', $location->address, ['class' => 'form-control', 'id' => 'address']) !!}
                                    </div>				                    			                    
			                    </div>

                                <div class="col-md-12 col-sm-12 col-xs-12 form-group">
                                    <div class="col-md-6 col-sm-6 col-xs-6"><label>Phone</label></div>
				                    <div class="col-md-6 col-sm-6 col-xs-6">
                                    {!! Form::text('phone', $location->phone, ['class' => 'form-control', 'id' => 'phone']) !!}	
                                    </div>				                    			                    
			                    </div>

                                <div class="col-md-12 col-sm-12 col-xs-12 form-group">
                                    <div class="col-md-6 col-sm-6 col-xs-6"><label>Mail</label></div>
				                    <div class="col-md-6 col-sm-6 col-xs-6">
                                    {!! Form::text('mail', $location->mail, ['class' => 'form-control', 'id' => 'mail']) !!}	
                                    </div>				                    			                    
			                    </div>

                                <div class="col-md-12 col-sm-12 col-xs-12 form-group">
                                    <div class="col-md-6 col-sm-6 col-xs-6"><label>Mail Link Text</label></div>
				                    <div class="col-md-6 col-sm-6 col-xs-6">
                                    {!! Form::text('btn_mail_text', $location->btn_mail_text, ['class' => 'form-control', 'id' => 'btn_mail_text']) !!}	
                                    </div>				                    			                    
			                    </div>

                                 <div class="col-md-12 col-sm-12 col-xs-12 form-group">
                                    <div class="col-md-6 col-sm-6 col-xs-6"><label>Location Description</label></div>
				                    <div class="col-md-6 col-sm-6 col-xs-6">
                                        {!! Form::textarea('location_description', $location->location_description, ['class' => 'form-control', 'id' => 'location_description', 'rows' => 4, 'cols' =>50]) !!}	
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

