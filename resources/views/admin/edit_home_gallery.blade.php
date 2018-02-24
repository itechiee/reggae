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

                        {!! Form::open(['url' => 'admin/header_gallery/update', 'method' => 'post', 'enctype' => 'multipart/form-data']) !!}
                        {!! Form::hidden('id', $images->id, ['class' => 'form-control', 'id' => 'homeId']) !!}

                                <div class="col-md-12 col-sm-12 col-xs-12 form-group">
                                    <div class="col-md-6 col-sm-6 col-xs-6">
                                        <label>Current Banner Image/Video</label>
                                    </div>
				                    <div class="col-md-6 col-sm-6 col-xs-6">
                                    @if($images->type == 'Video')
                                        {!! Html::image('/images/others/video.jpg','banner',['width' => '100', 'height' => '50']) !!}
                                    @else
                                        {!! Html::image('/uploads/home/'.$images->file_name,'banner',['width' => '100', 'height' => '50']) !!}
                                    @endif
                                    </div>				                    			                    
                                </div>  

                                <div class="col-md-12 col-sm-12 col-xs-12 form-group">
                                    <div class="col-md-6 col-sm-6 col-xs-6">
                                        <label>Type</label>
                                    </div>
				                    <div class="col-md-6 col-sm-6 col-xs-6">
                                        {!! Form::select('home_file_type', ['Photo' => 'Photo', 'Video' => 'Video'], $images->type, ['class' => 'form-control']) !!}
                                    </div>				                    			                    
                                </div>  

                                <div class="col-md-12 col-sm-12 col-xs-12 form-group">
                                    <div class="col-md-6 col-sm-6 col-xs-6">
                                        <label>Update Image/Video</label>
                                    </div>
				                    <div class="col-md-6 col-sm-6 col-xs-6">
                                         <input type="file" name="gallery_image" id="file">	
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

