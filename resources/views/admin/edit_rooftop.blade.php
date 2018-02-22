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
                                    <div class="col-md-6 col-sm-6 col-xs-6"><label>rooftop_type</label></div>
				                    <div class="col-md-6 col-sm-6 col-xs-6">
				                    	<select class="form-control" name="rooftop_type">
				                    		<?php $style = ''; ?>
				                    		@if($rooftop->type == 'Photo')
				                    			<?php $style = ' selected="selected"'; ?>
				                    		@elseif($rooftop->type == 'Video')
				                    			<?php $style = ' selected="selected"'; ?>
				                    		@endif
	                                        <option <?php echo $style ;?> value="Video">Video</option>
	                                        <option <?php echo $style ;?> value="Photo">Photo</option>
                                    	</select>
                                    </div>				                    			                    
			                    </div>

			                    @if($rooftop->type == 'Photo')
				                    <div class="col-md-12 col-sm-12 col-xs-12 form-group">
	                                    <div class="col-md-6 col-sm-6 col-xs-6">
	                                        <label>Current Image</label>
	                                    </div>
					                    <div class="col-md-6 col-sm-6 col-xs-6">
	                                    {!! Html::image('/uploads/rooftop/'.$rooftop->file_name,'image',['class' => 'col-md-6 col-sm-2', 'width' => '100']) !!}
	                                    </div>				                    			                    
	                                </div> 

	                            @else

	                            	<div class="col-md-12 col-sm-12 col-xs-12 form-group">
	                                    <div class="col-md-6 col-sm-6 col-xs-6">
	                                        <label>Current Video</label>
	                                    </div>
					                    <div class="col-md-6 col-sm-6 col-xs-6">
	                                    <embed src="{{ asset('../storage/app/uploads/'.$rooftop->file_name) }}">
	                                    </div>				                    			                    
	                                </div> 

								@endif

                                <div class="col-md-12 col-sm-12 col-xs-12 form-group">
                                    <div class="col-md-6 col-sm-6 col-xs-6">
                                        <label>Update</label>
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