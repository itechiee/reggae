@extends ('layouts.admin_dashboard')

@section('section')

        <div id="page-wrapper">
            <div class="row">
                <div class="col-lg-6">
                    <h1 class="page-header">{{ $page_heading }}</h1>
                </div>
                <div class="col-lg-6">
                       <a href="{{ url('/admin/rooftop/view_rooftop_details') }}" class="page-header pull-right"> <button type="View" class="btn btn-primary">Back</button></a>
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
                        {!! Form::open(['url' => 'admin/rooftop/update', 'method' => 'post' , 'enctype' => 'multipart/form-data']) !!}
                        {!! Form::hidden('id', $rooftop->id, ['class' => 'form-control', 'id' => 'rooftopId']) !!}
                              

                        <div class="col-md-12 col-sm-12 col-xs-12 form-group">
                                    <div class="col-md-6 col-sm-6 col-xs-6">
                                        <label>Current Banner Video</label>
                                    </div>
				                    <div class="col-md-6 col-sm-6 col-xs-6">
                                    @if($rooftop->type == 'Video')
                                        <?php $thumbnail = '/images/others/video.jpg'; 
                                            if(isset($rooftop->thumbnail)){
                                                $thumbnail = '/uploads/rooftop/'.$rooftop->thumbnail;
                                            }
                                        ?>
                                        
                                        {!! Html::image($thumbnail,'banner',['width' => '100', 'height' => '50']) !!}
                                    @else
                                        {!! Html::image('/uploads/rooftop/'.$rooftop->file_name,'banner',['width' => '100', 'height' => '50']) !!}
                                    @endif
                                    </div>				                    			                    
                                </div>  

                                <div class="col-md-12 col-sm-12 col-xs-12 form-group">
                                    <div class="col-md-5 col-sm-5 col-xs-5">
                                        <label>Type</label>
                                    </div>
				                    <div class="col-md-7 col-sm-7 col-xs-7">
                                        {!! Form::select('rooftop_type', ['Photo' => 'Photo', 'Video' => 'Video'], $rooftop->type, ['class' => 'form-control']) !!}
                                    </div>				                    			                    
                                </div>  

                                <div class="col-md-12 col-sm-12 col-xs-12 form-group">
                                    <div class="col-md-5 col-sm-5 col-xs-5">
                                        <label>Update Image/Video</label>
                                    </div>
				                    <div class="col-md-7 col-sm-7 col-xs-7">
                                         <input type="file" name="file" id="file" class="form-control">	
                                    </div>				                    			                    
                                </div>
                                
                                <div class="col-md-12 form-group">
                                    <div class="col-md-5"><label>Update Thumbnail</label></div>
				                    <div class="col-md-7">
                                        <input type="file" name="thumbnail" id="thumbnail" class="form-control">	
                                    </div>				                    			                    
                                </div>
                                
                                <div class="col-md-12 form-group">
                                    <div class="col-md-5"><label>Description</label></div>
				                    <div class="col-md-7">
                                        {!! Form::text('description', $rooftop->description, ['class' => 'form-control']) !!}
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
