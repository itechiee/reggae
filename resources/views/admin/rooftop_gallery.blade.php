@extends ('layouts.admin_dashboard')

@section('section')

        <div id="page-wrapper">
            <div class="row">
                <div class="col-lg-6">
                    <h1 class="page-header">{{ $page_heading }}</h1>
                </div>
                <div class="col-lg-6">
                       <a href="{{ url('/admin/rooftop/view_rooftop_details') }}" class="page-header pull-right"> <button type="View" class="btn btn-default">View</button></a>
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
                          
                            <form action="{{ url('/admin/rooftop/store') }}" method="POST" enctype="multipart/form-data">
                            	<input type="hidden" value="{{ csrf_token() }}" name="_token">
                            	<div class="form-group">
                                    <label>Type</label>
                                    <select class="form-control" name="rooftop_type">
                                        <option value="Video">Video</option>
                                        <option value="Photo">Photo</option>
                                    </select>
                                </div>
                               <div class="form-group">
				                    <label>Select image to upload:</label>
				                    <input type="file" name="file" id="file">				                    
			                    </div>

			                    <input type="submit" class="btn btn-default" value="Upload" name="submit">
			                    <button type="reset" class="btn btn-default">Reset</button>
			                </form>
                        </div>
                        
                    </div>
                </div>
            </div>
            
		</div>
@stop

