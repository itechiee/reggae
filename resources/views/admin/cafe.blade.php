@extends ('layouts.admin_dashboard')

@section('section')

        <div id="page-wrapper">
            <div class="row">
                <div class="col-lg-6">
                    <h1 class="page-header">{{ $page_heading }}</h1>
                </div>
                <div class="col-lg-6">
                       <a href="{{ url('/admin/cafe/view_cafe_details') }}" class="page-header pull-right"> <button type="View" class="btn btn-primary">View</button></a>
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

                             <form role="form" method="POST" action="{{ url('/admin/cafe/store') }}" enctype="multipart/form-data">
                                <input type="hidden" name="_token" value="{{ csrf_token() }}">

                                <div class="col-md-12 form-group">
                                    <div class="col-md-6"><label>Work Days</label></div>
                                    <div class="col-md-6">
                                         <input class="form-control" name="workdays"> 
                                    </div>                                                                
                                </div> 

                                 <div class="col-md-12 form-group">
                                    <div class="col-md-6"><label>Working Time</label></div>
                                    <div class="col-md-6">
                                    <input name="work_time" class="form-control" >
                                    </div>                                                                
                                </div> 

                                 <div class="col-md-12 form-group">
                                    <div class="col-md-6"><label>Phone</label></div>
                                    <div class="col-md-6">
                                    <input name="phone" class="form-control" >
                                    </div>                                                                
                                </div> 

                                <div class="col-md-12 form-group">
                                    <div class="col-md-6"><label>Title</label></div>
                                    <div class="col-md-6">
                                        <input name="title" class="form-control"  type="text"> 
                                    </div>                                                                
                                </div>

                                <div class="col-md-12 form-group">
                                    <div class="col-md-6"><label>Description</label></div>
                                    <div class="col-md-6">
                                    <textarea name="description" rows="4" cols="50" class="form-control"></textarea>  
                                    </div>                                                                
                                </div>
                                <div class="col-md-12 form-group">
                                    <div class="col-md-6"><label>Select image to upload:</label></div>
                                    <div class="col-md-6">
                                         <input type="file" name="file" id="file">  
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
            </div>
            <!-- /#page-wrapper -->

            
</div>
@stop

