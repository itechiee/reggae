@extends ('layouts.admin_dashboard')

@section('section')
        <div id="page-wrapper">
            <div class="row">
                <div class="col-lg-6">
                    <h1 class="page-header">{{ $page_heading }}</h1>
                </div>
                <div class="col-lg-6">
                       <a href="{{ url('/admin/rooftop') }}" class="page-header pull-right"> <button type="View" class="btn btn-primary">Add</button></a>
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

                <div class="col-sm-12">
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
	                                 <tr>
	                                 	@if($rooftop->type == 'Photo')
	                                 	<td>
	                                 		{!! Html::image('/uploads/rooftop/'.$rooftop->file_name,'image',['class' => 'col-md-4 col-sm-2']) !!}
	                                 	</td>
	                                 	@else

	                                 	<td>
											<embed src="{{ asset('../storage/app/uploads/'.$rooftop->file_name) }}">
											<!-- <video width='320' height='240' controls> <source src="{{ asset('../storage/app/uploads/'.$rooftop->file_name) }}" type='video/mp4'>Your browser does not support the video tag.</source></video> -->
										</td>
										@endif
                                        <td>
                                            <div>
                                                <a href="{{ url('/admin/rooftop/edit/').'/'.$rooftop->id }}"><i class="fa fa-edit"></i>  </a> 
                                                /
                                                <a href="{{ url('/admin/rooftop/delete').'/'.$rooftop->id }}"><i class="glyphicon glyphicon-remove"></i> </a> 
                                            </div>
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