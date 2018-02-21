@extends ('layouts.admin_dashboard')

@section('section')

        <div id="page-wrapper">
            <div class="row">

                <div class="col-sm-12">
                    <h3>List Of Rooms</h3>
                    <table id="rooms_list" class="table table-striped table-bordered" cellspacing="0" width="100%">
                        <thead>
                            <tr>
                                <th>Room Name</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @if(count($roomsLists) >0)
                                 @foreach($roomsLists as $room)
                                 <tr class="success">
                                    <td>{{$room->room_name}}</td>
                                    <td>{{$room->price}}</td>
                                    <td>{{$room->room_description}}</td>
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