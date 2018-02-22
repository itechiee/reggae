@extends ('layouts.admin_dashboard')

@section('section')

        <div id="page-wrapper">
            <div class="row">
                <div class="col-sm-5 col-lg-6">
                    <h1 class="page-header">{{ $page_heading }}</h1>
                </div>
                <div class="col-sm-7 col-lg-6">
                <a href="{{ url('/admin/facilities/view_facility_details') }}" class="page-header pull-right"> <button type="valueiew" class="btn btn-primary">View</button></a>
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
                            <form role="form" method="POST" action="{{ url('/admin/facilities/store') }}" enctype="multipart/form-data">
                                <input type="hidden" name="_token" value="{{ csrf_token() }}">
                                
                                <div class="col-md-12 form-group">
                                    <div class="col-md-6"><label>Facility Name</label></div>
                                    <div class="col-md-6">
                                         <input class="form-control" name="facility_name"> 
                                    </div>                                                                
                                </div> 

                                <div class="col-md-12 form-group">
                                    <div class="col-md-6"><label>Alignment(For UI)</label></div>
                                    <div class="col-md-6">
                                         <select class="form-control" name="align_section">
                                        <option value="Left">Left</option>
                                        <option value="Right">Right</option>
                                    </select>   
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

        <hr>            

<!-- /#page-wrapper -->
        </div>
@stop


