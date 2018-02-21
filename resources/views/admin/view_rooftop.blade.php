@extends ('layouts.admin_dashboard')
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script type="text/javascript"  src="https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script>
<script type="text/javascript"  src="https://cdn.datatables.net/1.10.16/js/dataTables.bootstrap.min.js"></script>
@section('section')

        <div id="page-wrapper">
            <div class="row">
                <div class="col-sm-12">
                    <h3>Roof Top</h3>
                    <table id="roof_top" class="table table-bordered">
                        <thead>
                            <tr>
                                <th>File Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @if(count($rooftopList) >0)                          
                                @foreach($rooftopList as $rooftop)
	                                 <tr class="success">
	                                 	@if($rooftop->type == 'Photo')
	                                 	<td>
	                                 		<img src="{{ asset('../storage/app/uploads/'.$rooftop->file_name) }}" width="50" height="50"></img>
	                                 	</td>
	                                 	@else

	                                 	<td>
											<embed src="{{ asset('../storage/app/uploads/'.$rooftop->file_name) }}">
											<!-- <video width='320' height='240' controls> <source src="{{ asset('../storage/app/uploads/'.$rooftop->file_name) }}" type='video/mp4'>Your browser does not support the video tag.</source></video> -->
										</td>
										@endif
										<td>
											<a href="" class='btn btn-primary glyphicon glyphicon-edit'>
										    <a href="" class='trash btn btn-primary glyphicon glyphicon-remove' id='{{$rooftop->id}}'>
										</td>
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
        </div>

@stop

<script type="text/javascript">
	$(document).ready(function() {
    // $('#roof_top').DataTable();
    $url ="{{ url('admin/rooftop/delete') }}";
    
    $(function(){
        $('.trash').click(function(){
        	var del_id= $(this).attr('id');
            $.ajax({
            type:'POST',
            url:$url,
            data:{del_id:del_id},
            success: function(data){alert(data);
                 if(data=='1'){
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