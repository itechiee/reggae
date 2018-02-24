@extends ('layouts.admin_dashboard')

@section('section')

        <div id="page-wrapper">
            <div class="row">
                <div class="col-lg-6">
                    <h1 class="page-header">{{ $page_heading }}</h1>
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
                    <div class="row" >
                        <div class="col-lg-6">
                            <form action="{{ url('/admin/rooftop/store') }}" method="POST" enctype="multipart/form-data">
                                <input type="hidden" name="_token" value="{{ csrf_token() }}">
                                
                                <div class="col-md-12 form-group">
                                    <div class="col-md-5"><label>Type</label></div>
				                    <div class="col-md-7">
                                        <select class="form-control" name="rooftop_type">
                                            <option value="Photo">Photo</option>
                                            <option value="Video">Video</option>                                            
                                        </select>
                                    </div>				                    			                    
			                    </div>

                                <div class="col-md-12 form-group">
                                    <div class="col-md-5"><label>Image/Video</label></div>
				                    <div class="col-md-7">
                                        <input type="file" name="file" id="file" class="form-control">	
                                    </div>				                    			                    
                                </div>
                                
                                <div class="col-md-12 form-group">
                                    <div class="col-md-5"><label>Thumbnail</label></div>
				                    <div class="col-md-7">
                                        <input type="file" name="thumbnail" id="thumbnail" class="form-control">	
                                    </div>				                    			                    
			                    </div>

                                <div class="col-md-12 form-group">
                                    <div class="col-md-5"><label>Description</label></div>
				                    <div class="col-md-7">
                                    {!! Form::text('description', null, ['class' => 'form-control']) !!}
                                    </div>				                    			                    
			                    </div>
                                
                                <div class="col-md-12 form-group">
                                    <div class="col-md-12">
                                        <button type="submit" class="btn btn-primary">Submit Button</button>
                                        <button type="reset" class="btn btn-default">Reset Button</button>
                                    </div>	                    			                    
			                    </div>                                                           
                            </form>
                        </div>                        
                    </div>
                </div>

                <hr class="divider"></hr>

                
@if(count($rooftop) > 0)
<?php $i=1; ?>
    <div class="col-sm-12">
        <div class="row">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>SNo</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($rooftop as $image)
                    <tr>
                        <td> {{ $i }} </td>
                        <td> {{ $image->type }} 
                        </td>
                        <td> {{ $image->description }} </td>
                        <td> 
                        @if($image->type == 'Video')
                            <?php $thumbnail = '/images/others/video.jpg'; 
                                if(isset($image->thumbnail)){
                                    $thumbnail = '/uploads/rooftop/'.$image->thumbnail;
                                }
                            ?>
                            {!! Html::image($thumbnail,'banner',['width' => '100', 'height' => '50']) !!}
                        @else
                            {!! Html::image('/uploads/rooftop/'.$image->file_name,'banner',['width' => '100px', 'height' => '50']) !!}
                        @endif
                        </td>
                        <td> 
                        <div>
                            <a href="{{ url('/admin/rooftop/edit').'/'.$image->id }}"><i class="fa fa-edit"></i> Edit </a> 
                        /
                            <a href="{{ url('/admin/rooftop/delete').'/'.$image->id }}"><i class="glyphicon glyphicon-remove"></i> Delete </a> </td>
                        </div>
                    </tr>
                    <?php $i++; ?>
                    @endforeach()
                </tbody>
            </table>	
        </div>
    </div>

@endif
            </div>
            
		</div>
        <!-- /#page-wrapper -->

            
</div>
@stop

