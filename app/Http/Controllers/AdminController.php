<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use DB;
use Validator;
use Input;
use Auth;
use Redirect;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Hash;
use App\Facilities;
use App\Rooms;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['page_heading'] = '';
        $data['facilitiesListCount'] = facilities::count();
        $data['facilitiesRoomCount'] = rooms::count();
        
        return view('admin.dashboard', $data);
       
    }

    /**
     * Create Facilities
     *
     * @return \Illuminate\Http\Response
     */
    public function createFacilities()
    {
      
        $data['page_heading'] = 'Facilities';
        $data['facilitiesList'] = facilities::all();

        return view('admin.facilities', $data);
    }

    /**
     * Store Facilities
     *
     * @return \Illuminate\Http\Response
     */
    public function storeFacilities(Request $request)
    {
        $data['page_heading'] = 'Facilities';
        $input = $request->all();

        $validator = Validator::make($request->all(), [
            'facility_name' => 'required|max:100',
            'align_section' => 'required',
        ]);



        if ($validator->fails()) {
            return redirect('admin/facilities')
                        ->withErrors($validator)
                        ->withInput();
        }
        $data['facilitiesList'] = facilities::all();

        $facilities = new facilities();
        $facilities->Description = $input['facility_name'];
        $facilities->Section = $input['align_section'];

        if($facilities->save()){
            return view('admin.facilities', $data)->withErrors('sucess');
        }

        
    }
    /**
     * Create Rooms
     *
     * @return \Illuminate\Http\Response
     */
    public function createRooms()
    {
      
        $data['page_heading'] = 'Rooms';
        $data['roomsLists'] = rooms::all();

        return view('admin.rooms', $data);
    }

    /**
     * Store store rooms
     *
     * @return \Illuminate\Http\Response
     */
    public function storeRooms(Request $request)
    {
        $data['page_heading'] = 'Rooms';
        $input = $request->all();

        $validator = Validator::make($request->all(), [
            'room_name' => 'required|max:50',
            'room_price' => 'required|numeric',
            'room_description' => 'required',
        ]);


        if ($validator->fails()) {
            return redirect('admin/rooms')
                        ->withErrors($validator)
                        ->withInput();
        }
        $data['roomsLists'] = rooms::all();

        $rooms = new rooms();
        $rooms->room_name = $input['room_name'];
        $rooms->price = $input['room_price'];
        $rooms->room_description = $input['room_description'];

        if($rooms->save()){
            $request->session()->flash('alert-success', 'Room was successful added!');
            return view('admin.rooms', $data);
        }
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
