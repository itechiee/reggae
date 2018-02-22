@extends ('layouts.admin_dashboard')

@section('section')

        <div id="page-wrapper">
            <div class="row">
                <div class="col-lg-6">
                    <h1 class="page-header">{{ $page_heading }}</h1>
                </div>
                <div class="col-lg-6">
                       <a href="{{ url('/admin/header_content') }}" class="page-header pull-right"> <button type="View" class="btn btn-default">Back</button></a>
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
                        {!! Form::open(['url' => 'admin/header_content/update', 'method' => 'post', 'enctype' => 'multipart/form-data']) !!}
                        {!! Form::hidden('id', $homes->id, ['class' => 'form-control', 'id' => 'homeId']) !!}

                                <div class="col-md-12 col-sm-12 col-xs-12 form-group">
                                    <div class="col-md-6 col-sm-6 col-xs-6">
                                        <label>Current Banner Image</label>
                                    </div>
				                    <div class="col-md-6 col-sm-6 col-xs-6">
                                    {!! Html::image('/uploads/banner/'.$homes->banner_image,'banner',['class' => 'col-md-6 col-sm-2', 'width' => '100']) !!}
                                    </div>				                    			                    
                                </div>  
                                <div class="col-md-12 col-sm-12 col-xs-12 form-group">
                                    <div class="col-md-6 col-sm-6 col-xs-6">
                                        <label>Update Banner Image</label>
                                    </div>
				                    <div class="col-md-6 col-sm-6 col-xs-6">
                                         <input type="file" name="banner_image" id="file">	
                                    </div>				                    			                    
			                    </div>

                                <div class="col-md-12 col-sm-12 col-xs-12 form-group">
                                    <div class="col-md-6 col-sm-6 col-xs-6"><label>Title</label></div>
				                    <div class="col-md-6 col-sm-6 col-xs-6">
                                        {!! Form::text('title', $homes->title, ['class' => 'form-control', 'id' => 'title']) !!}
                                    </div>				                    			                    
			                    </div>

                                <div class="col-md-12 col-sm-12 col-xs-12 form-group">
                                    <div class="col-md-6 col-sm-6 col-xs-6"><label>Sub Title</label></div>
				                    <div class="col-md-6 col-sm-6 col-xs-6">
                                    {!! Form::text('subtitle', $homes->subtitle, ['class' => 'form-control', 'id' => 'subtitle']) !!}	
                                    </div>				                    			                    
			                    </div>

                                <div class="col-md-12 col-sm-12 col-xs-12 form-group">
                                    <div class="col-md-6 col-sm-6 col-xs-6"><label>Content</label></div>
				                    <div class="col-md-6 col-sm-6 col-xs-6">
                                        {!! Form::textarea('description', $homes->description, ['class' => 'form-control', 'id' => 'description', 'rows' => 4, 'cols' =>50]) !!}	
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

