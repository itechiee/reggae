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
            <div class="flash-message">
                @foreach (['danger', 'warning', 'success', 'info'] as $msg)
                  @if(Session::has('alert-' . $msg))

                  <p class="alert alert-{{ $msg }}">{{ Session::get('alert-' . $msg) }} <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a></p>
                  @endif
                @endforeach
            </div>

              <div class="col-sm-12">
                <div class="row">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Facility Name</th>
                                <th>Alignment</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            @if(count($facilitiesList) >0)      
                                @foreach($facilitiesList as $facility)
                                    <tr>
                                        <td> {{$facility->Description}} </td>
                                        <td> {{$facility->Section}} </td>
                                        <td> 
                                        <div>
                                            <a href="{{ url('/admin/facilities/edit/').'/'.$facility->id }}"><i class="fa fa-edit"></i> Edit </a> 
                                        /
                                            <a href="{{ url('/admin/facilities/delete').'/'.$facility->id }}"><i class="glyphicon glyphicon-remove"></i> Delete </a> </td>
                                        </div>
                                    </tr>
                                @endforeach 
                            @endif
                        </tbody>
                    </table>    
                </div>
            </div>
        </div>

        <hr>            

        <!-- /#page-wrapper -->
        </div>
@stop


<script type="text/javascript">
	$(document).ready(function() {
    $('#rooms_list').DataTable();
} );

</script>