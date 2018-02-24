@extends ('layouts.admin_dashboard')

@section('section')
        <div id="page-wrapper">
            <div class="row">
                <div class="col-lg-6">
                    <h1 class="page-header">{{ $page_heading }}</h1>
                </div>
                <div class="col-lg-6">
                       <a href="{{ url('/admin/cafe') }}" class="page-header pull-right"> <button type="View" class="btn btn-primary">Add</button></a>
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
                    <table id="rooms_list" class="table table-striped table-bordered" cellspacing="0" width="100%">
                        <thead>
                            <tr>
                                <th>Work Days</th>
                                <th>Working Time</th>
                                <th>Phone</th>
                                <th>Description</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @if(count($cafeLists) >0)
                                 @foreach($cafeLists as $cafe)
                                 <tr>
                                    <td>{{$cafe->work_days}}</td>
                                    <td>{{$cafe->work_time}}</td>
                                    <td>{{$cafe->phone}}</td>
                                     <td>{{$cafe->description}}</td>
                                    <td>
                                      {!! Html::image('/uploads/banner/'.$cafe->cafe_image,'image',['class' => 'col-md-4 col-sm-2']) !!}
                                    </td>
                                    <td><div>
                                        <a href="{{ url('/admin/cafe/edit/').'/'.$cafe->id }}"><i class="fa fa-edit"></i>  </a> 
                                        /
                                        <a href="{{ url('/admin/cafe/delete').'/'.$cafe->id }}"><i class="glyphicon glyphicon-remove"></i> </a> 
                                    </div></td>
                                 </tr>
                                @endforeach
                            @else
                                <tr><td colspan="6">No Results</td></tr>
                            @endif
                        </tbody>
                    </table>    
                </div>
            </div>
        </div>

@stop

<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script type="text/javascript"  src="https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script>
<script type="text/javascript"  src="https://cdn.datatables.net/1.10.16/js/dataTables.bootstrap.min.js"></script>

<script type="text/javascript">
  $(document).ready(function() {
    $('#rooms_list').DataTable();
    $url ="{{ url('/admin/rooms/edit') }}";

    $(function(){
        $('.trash').click(function(){
            $.ajax({
            type:'POST',
            url:$url,
            data:{del_id:del_id},
            success: function(data){
                 if(data=="YES"){
                     $ele.fadeOut().remove();
                 }else{
                     alert("can't delete the row")
                 }
            }

            })
        })
    })
})

</script>