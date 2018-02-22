<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Response;
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
use Image;
use App\Images;
use App\Contents;
use App\Home;

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

        $facilities = new facilities();
        $facilities->Description = $input['facility_name'];
        $facilities->Section = $input['align_section'];

        if($facilities->save()){
            $request->session()->flash('alert-success', 'Facility added successfully!');
            return redirect('admin/facilities');
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
     * Create About Us
     *
     * @return \Illuminate\Http\Response
     */
    public function createContents()
    {
      
        $data['page_heading'] = 'About  Us';
        $data['about_us'] = rooms::all();

        return view('admin.contents', $data);
    }
    /**
     * Store store rooms
     *
     * @return \Illuminate\Http\Response
     */
    public function storeContents(Request $request)
    {
        $data['page_heading'] = 'Content';
        $input = $request->all();

        $validator = Validator::make($request->all(), [
            'type' => 'required',
            'description' => 'required',
        ]);


        if ($validator->fails()) {
            return redirect('admin/contents')
                        ->withErrors($validator)
                        ->withInput();
        }

        $contents = new contents();
        $contents->name = $input['type'];
        $contents->description = $input['description'];

        if($contents->save()){
            $request->session()->flash('alert-success', 'Content was successful added!');
            return view('admin.contents', $data);
        }
        
    }



    /**
     * View rooms- Fetch room details from DB
     *
     * @return array
     */
    public function viewRooms()
    {
        $data['roomsLists'] = rooms::all();
        return view('admin.view_rooms', $data);
    }
     /**
     * View Facilities- Fetch room details from DB
     *
     * @return array
     */
    public function viewFacilities()
    {
        $data['facilitiesList'] = facilities::all();
        return view('admin.view_facility_details', $data);
    }

    /**
     * Create Gallery
     *
     * @return \Illuminate\Http\Response
     */
    public function createRooftop()
    {
      
        $data['page_heading'] = 'Roof Top';
        $data['roomsLists'] = rooms::all();

        return view('admin.rooftop_gallery', $data);
    }

    /**
     * Store Gallery
     *
     * @return \Illuminate\Http\Response
     */
    public function storeRooftop(Request $request)
    {
        $data['page_heading'] = 'Roof Top';
        $input = $request->all();

        $validator = Validator::make($request->all(), [
            'rooftop_type' => 'required',
            'file' => 'required',
        ]);

        if ($validator->fails()) {
            return redirect('admin/rooftop')
                        ->withErrors($validator)
                        ->withInput();
        }

        $fileName = null;
        if (request()->hasFile('file')) {
            $file = request()->file('file');
            $file_type = $file->getClientOriginalExtension();
            $fileName = md5($file->getClientOriginalName() . time()) . "." . $file->getClientOriginalExtension();
            $file->move('../storage/app/uploads/', $fileName);    
        }

         $picture = new images();
         $picture->type =  $input['rooftop_type'];
         $picture->file_name = $fileName;
         $picture->file_type = $file_type;

        if($picture->save()){
            $request->session()->flash('alert-success', 'Gallery was successful added!');
            return view('admin.rooftop_gallery', $data);
        }
        
    }
     /**
     * View Roof Top- Fetch gallery from DB
     *
     * @return array
     */
    public function viewRooftop()
    {
        $data['rooftopList'] = images::all();
        return view('admin.view_rooftop', $data);
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
    public function editRooftop($id)
    {
        //
    }
    /**
     * Delete Roof top
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deleteRooftop($id)
    {dd($id);
        if(isset($id)){
            $deleteId = images::delete();
            if($deleteId ){
                return response()->json(['msg' => '1']);
            }
        }
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

    /**
     * Create header banners
     *
     * @return \Illuminate\Http\Response
     */
    public function headerBanners()
    {
        $data['page_heading'] = 'Home Content';
        $data['homes'] = Home::orderBy('id','desc')->get();
        return view('admin.home', $data);
    }

    /**
     * Store Facilities
     *
     * @return \Illuminate\Http\Response
     */
    public function storeHeaderBanners(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($request->all(), [
            'title' => 'required|max:200',
            'subtitle' => 'required|max:300',
            'description' => 'required|max:500',
            'banner_image' => 'required'
        ]);
        if ($validator->fails()) {
            return redirect('admin/header_content')
                        ->withErrors($validator)
                        ->withInput();
        }

        $home = new Home();
        $home->title = $input['title'];
        $home->subtitle = $input['subtitle'];
        $home->description = $input['description'];

        $file = Input::file('banner_image');
        $destinationPath = public_path(). '/uploads/banner/';
        $filename = time() . '.' . $file->getClientOriginalExtension();
        $file->move($destinationPath, $filename);
        $home->banner_image = $filename;

        if($home->save()){
            $request->session()->flash('alert-success', 'Home content added successfully!');
            return redirect('admin/header_content');
        }
    }

    public function editHeaderBanners($homeId)
    {
        $data['page_heading'] = 'Header';
        $data['homes'] = Home::where('id', $homeId)->first();
        return view('admin.edit_home', $data);
    }

    public function updateHeaderBanners(Request $request)
    {
        $home = Home::find($request->id);
        $home->title = $request->title;
        $home->subtitle = $request->subtitle;
        $home->description = $request->description;
        $filename = $home->banner_image;
        if ($request->file('banner_image')) {
            $file = Input::file('banner_image');
            $destinationPath = public_path(). '/uploads/banner/';
            $filename = time() . '.' . $file->getClientOriginalExtension();
            $file->move($destinationPath, $filename);
            $oldFile = $destinationPath.$home->banner_image;
            if(file_exists($oldFile)){
                @unlink($oldFile);
            }
        }

        $home->banner_image = $filename;
        if($home->save()){
            $request->session()->flash('alert-success', 'Home content updated successfully!');
            return redirect('admin/header_content');
        }
    }
    
    public function deleteHeaderBanners($homeId)
    {
        $home = Home::find($homeId);
        if(count($home) > 0) {
            $home->delete();
            $destinationPath = public_path(). '/uploads/banner/';
            $oldFile = $destinationPath.$home->banner_image;
            if(file_exists($oldFile)){
                @unlink($oldFile);
            }
            \Session::flash('alert-info', 'Home content deleted successfully!');            
        }
        return redirect('admin/header_content');
    }

    public function headerGallery()
    {
        $data['page_heading'] = 'Home Gallery';
        $data['homes'] = Home::orderBy('id','desc')->get();
        return view('admin.home_gallery', $data);
    }
}
