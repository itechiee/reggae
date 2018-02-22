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
              



                <div class="col-sm-12 form-group">
                    <div class="row">
                        <div class="col-lg-6">


                            <form role="form" method="POST" action="{{ url('/admin/header_gallery/store') }}" enctype="multipart/form-data">
                                <input type="hidden" name="_token" value="{{ csrf_token() }}">
                                
                                <div class="col-md-12 form-group">
                                    <div class="col-md-6"><label>Type</label></div>
				                    <div class="col-md-6">
                                        <select class="form-control" name="home_file_type">
                                            <option value="Video">Video</option>
                                            <option value="Photo">Photo</option>
                                        </select>
                                    </div>				                    			                    
			                    </div>

                                <div class="col-md-12 form-group">
                                    <div class="col-md-6"><label>Image/Video</label></div>
				                    <div class="col-md-6">
                                    <input type="file" name="file" id="file">	
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
@if(count($homes) > 0)
    <div class="col-sm-12">
        <div class="row">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Subtitle</th>
                        <th>Description</th>
                        <th>Banner</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($homes as $home)
                    <tr>
                        <td> {{ $home->title }} </td>
                        <td> {{ $home->subtitle }} </td>
                        <td> {{ $home->description }} </td>
                        <td> {{ $home->banner_image }} </td>
                        <td> 
                        <div>
                            <a href="{{ url('/admin/header_content/edit').'/'.$home->id }}"><i class="fa fa-edit"></i> Edit </a> 
                        /
                            <a href="{{ url('/admin/header_content/delete').'/'.$home->id }}"><i class="glyphicon glyphicon-remove"></i> Delete </a> </td>
                        </div>
                    </tr>
                    @endforeach()
                </tbody>
            </table>	
        </div>
    </div>

@endif
            </div>

<hr>            



            <!-- /#page-wrapper -->
        </div>
@stop

<style>
    .divider{width:100%;  border: 1px solid #eee;}
</style>