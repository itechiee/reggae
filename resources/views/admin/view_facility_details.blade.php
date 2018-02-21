@extends ('layouts.admin_dashboard')
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script type="text/javascript"  src="https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script>
<script type="text/javascript"  src="https://cdn.datatables.net/1.10.16/js/dataTables.bootstrap.min.js"></script>
@section('section')

        <div id="page-wrapper">
            <div class="row">
                <div class="col-sm-12">
                    <h3>List Facilities</h3>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Facility Name</th>
                                <th>Alignment</th>
                            </tr>
                        </thead>
                        <tbody>
                            @if(count($facilitiesList) >0)                          
                                @foreach($facilitiesList as $facility)
                                 <tr class="success">
                                    <td>{{$facility->Description}}</td>
                                    <td>{{$facility->Section}}</td>
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
    $('#rooms_list').DataTable();
} );

</script>