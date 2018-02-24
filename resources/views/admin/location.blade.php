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
              @if(count($locations) > 0)
                <div class="col-sm-12">
                    <div class="row">
                        <table class="table table-bordered" id="home_table">
                            <thead>
                                <tr>
                                    <th>Address</th>
                                    <th>Phone</th>
                                    <th>Mail</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> {{ $locations->address }} </td>
                                    <td> {{ $locations->phone }} </td>
                                    <td> {{ $locations->mail }} </td>
                                    <td> {{ $locations->location_description }} </td>                                    
                                    
                                    <td> 
                                        <div>
                                            <a href="{{ url('/admin/location/edit').'/'.$locations->id }}"><i class="fa fa-edit"></i> Edit </a> 
                                        /
                                            <a href="{{ url('/admin/location/delete').'/'.$locations->id }}"><i class="glyphicon glyphicon-remove"></i> Delete </a> </td>
                                        </div>
                                </tr>
                            </tbody>
                        </table>	
                    </div>
                </div>
            @else

            <div class="col-sm-12">
                <div class="row">
                    <div class="col-lg-6">
                        <form role="form" method="POST" action="{{ url('/admin/location/store') }}" >
                            <input type="hidden" name="_token" value="{{ csrf_token() }}">
                            
                            <div class="col-md-12 form-group">
                                <div class="col-md-6"><label>Address</label></div>
                                <div class="col-md-6">
                                    <input type="text" class="form-control" name="address" id="address">		
                                </div>				                    			                    
                            </div>

                            <div class="col-md-12 form-group">
                                <div class="col-md-6"><label>Phone</label></div>
                                <div class="col-md-6">
                                    <input type="text" class="form-control" name="phone" id="phone">		
                                </div>				                    			                    
                            </div>

                            <div class="col-md-12 form-group">
                                <div class="col-md-6"><label>Mail</label></div>
                                <div class="col-md-6">
                                    <input type="text" class="form-control" name="mail" id="mail">		
                                </div>				                    			                    
                            </div>

                            <div class="col-md-12 form-group">
                                <div class="col-md-6"><label>Mail Link Text</label></div>
                                <div class="col-md-6">
                                    <input type="text" class="form-control" name="btn_mail_text" id="btn_mail_text">		
                                </div>				                    			                    
                            </div>

                            <div class="col-md-12 form-group">
                                <div class="col-md-6"><label>Location Description</label></div>
                                <div class="col-md-6">
                                    <textarea rows="4" class="form-control" cols="50" name="location_description"></textarea>
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
            </div> <!-- /#page-wrapper -->
        </div>
@stop



