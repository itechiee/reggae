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
              

               

@if(count($homes) > 0)
    <div class="col-sm-12">
        <div class="row">
            <table class="table table-bordered" id="home_table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Subtitle</th>
                        <th>Description</th>
                        <th class="th_banner">Banner</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($homes as $home)
                    <tr>
                        <td> {{ $home->title }} </td>
                        <td> {{ $home->subtitle }} </td>
                        <td> {{ $home->description }} </td>
                        <td> 
                            {!! Html::image('/uploads/banner/'.$home->banner_image,'banner',['class' => 'col-md-6 col-sm-2', 'width' => '100px', 'height' => '100px']) !!}
                        </td>
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
@else

<div class="col-sm-12">
                    <div class="row">
                        <div class="col-lg-6">
                            <form role="form" method="POST" action="{{ url('/admin/header_content/store') }}" enctype="multipart/form-data">
                                <input type="hidden" name="_token" value="{{ csrf_token() }}">
                                
                                <div class="col-md-12 form-group">
                                    <div class="col-md-6"><label>Banner Image</label></div>
				                    <div class="col-md-6">
                                         <input type="file" name="banner_image" id="banner_image">	
                                    </div>				                    			                    
			                    </div>

                                <div class="col-md-12 form-group">
                                    <div class="col-md-6"><label>Mobile Banner Image</label></div>
				                    <div class="col-md-6">
                                         <input type="file" name="mobile_banner_image" id="mobile_banner_image">	
                                    </div>				                    			                    
			                    </div>

                                <div class="col-md-12 form-group">
                                    <div class="col-md-6"><label>Title</label></div>
				                    <div class="col-md-6">
                                         <input type="text" name="title" id="title">	
                                    </div>				                    			                    
			                    </div>

                                <div class="col-md-12 form-group">
                                    <div class="col-md-6"><label>Sub Title</label></div>
				                    <div class="col-md-6">
                                         <input type="text" name="subtitle" id="subtitle">	
                                    </div>				                    			                    
			                    </div>

                                <div class="col-md-12 form-group">
                                    <div class="col-md-6"><label>Content</label></div>
				                    <div class="col-md-6">
                                        <textarea rows="4" cols="50" name="description"></textarea>
                                    </div>				                    			                    
			                    </div>
                                
                                <div class="col-md-12 form-group">
                                    <div class="col-md-12">
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                        <button type="reset" class="btn btn-default">Reset</button>
                                    </div>	                    			                    
			                    </div>                                                           
                            </form>
                        </div>
                        
                    </div>
                </div>

@endif
            </div>

<hr>            



            <!-- /#page-wrapper -->
        </div>
@stop

<style>
    #home_table .th_banner{width:25%;}
</style>