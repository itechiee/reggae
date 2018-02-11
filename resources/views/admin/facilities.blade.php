@extends ('layouts.admin_dashboard')

@section('section')

        <div id="page-wrapper">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">{{ $page_heading }}</h1>
                </div>
                <!-- /.col-lg-12 -->
           </div>
			<div class="row">  
                <div class="col-sm-12">
                    <div class="row">
                        <div class="col-lg-6">
                            <form role="form" method="POST" action="{{ url('/admin/facilities/store') }}">
                                <input type="hidden" name="_token" value="{{ csrf_token() }}">
                                <div class="form-group">
                                    <label>Facility Name</label>
                                    <input class="form-control" name="facility_name">
                                </div>
                               
                               
                                <div class="form-group">
                                    <label>Alignment(For UI)</label>
                                    <select class="form-control" name="align_section">
                                        <option value="A">Left</option>
                                        <option value="B">Right</option>
                                    </select>
                                </div>
                               
                                <button type="submit" class="btn btn-default">Submit Button</button>
                                <button type="reset" class="btn btn-default">Reset Button</button>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
            <!-- /#page-wrapper -->

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
                          
                            @endif
                        </tbody>
                    </table>    

                </div>
            </div>
        </div>
        </div>




@stop

