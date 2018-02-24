@extends ('layouts.admin_dashboard')

@section('section')

        <div id="page-wrapper">
            <div class="row">
                <div class="col-lg-6">
                    <h1 class="page-header">{{ $page_heading }}</h1>
                </div>
                <div class="col-lg-6">
                       <a href="{{ url('/admin/rooftop/view_contents_details') }}" class="page-header pull-right"> <button type="View" class="btn btn-primary">Back</button></a>
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
                        {!! Form::open(['url' => 'admin/contents/update', 'method' => 'post' , 'enctype' => 'multipart/form-data']) !!}
                        {!! Form::hidden('id', $content->id, ['class' => 'form-control', 'id' => 'contentId']) !!}
                              
                                <div class="col-md-12 col-sm-12 col-xs-12 form-group">
                                    <div class="col-md-6 col-sm-6 col-xs-6"><label>Type</label></div>
				                    <div class="col-md-6 col-sm-6 col-xs-6">
				                    	<?php $style = ''; ?>
				                    		@if($content->type == 'about_us')
				                    			<?php $style = ' selected="selected"'; ?>
				                    		@elseif($content->type == 'contact')
				                    			<?php $style = ' selected="selected"'; ?>
				                    		@elseif($content->type == 'cafe')
				                    			<?php $style = ' selected="selected"'; ?>
				                    		@endif
				                    	 <select class="form-control" name="type">
                                          <option value="about_us">About Us</option>
                                          <option value="contact">Contact</option>
                                        </select> 
                                    </div>				                    			                    
			                    </div>

			                     <div class="col-md-12 col-sm-12 col-xs-12 form-group">
                                    <div class="col-md-6 col-sm-6 col-xs-6"><label>Description</label></div>
				                    <div class="col-md-6 col-sm-6 col-xs-6">
                                        {!! Form::textarea('description', $content->description, ['class' => 'form-control', 'id' => 'description', 'rows' => 4, 'cols' =>50]) !!}	
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
