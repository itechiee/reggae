@extends ('layouts.admin_dashboard')

@section('section')

        <div id="page-wrapper">
            <div class="row">
                <div class="col-lg-6">
                    <h1 class="page-header">{{ $page_heading }}</h1>
                </div>
                <div class="col-lg-6">
                       <a href="{{ url('/admin/contents') }}" class="page-header pull-right"> <button type="View" class="btn btn-primary">Add</button></a>
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
                    <h3>Contents</h3>
                    <table id="rooms_list" class="table table-striped table-bordered" cellspacing="0" width="100%">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @if(count($contents) >0)
                                 @foreach($contents as $content)
                                 <tr>
                                    <td>{{$content->name}}</td>
                                    <td>{{$content->description}}</td>
                                    <td>
                                        <div>
                                            <a href="{{ url('/admin/contents/edit/').'/'.$content->id }}"><i class="fa fa-edit"></i>  </a> 
                                            /
                                            <a href="{{ url('/admin/contents/delete').'/'.$content->id }}"><i class="glyphicon glyphicon-remove"></i>  </a>
                                        </div>
                                    </td>
                                 </tr>
                                @endforeach
                            @else
                                <tr><td colspan="3">No Results</td></tr>
                            @endif
                        </tbody>
                    </table>    

                </div>
            </div>
       
 <hr>            

 <!-- /#page-wrapper -->
</div>
@stop