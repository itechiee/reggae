@extends ('layouts.admin_dashboard')

@section('section')

        <div id="page-wrapper">
            <div class="row">

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
                                 <tr class="success">
                                    <td>{{$content->name}}</td>
                                    <td>{{$content->description}}</td>
                                    <td></td>
                                 </tr>
                                @endforeach
                            @else
                                <tr><td colspan="2">No Results</td></tr>
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