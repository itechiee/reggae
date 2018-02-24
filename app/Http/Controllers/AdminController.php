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
use App\Cafe;

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
        $data['roomCount'] = rooms::count();
        $data['roofTopCount'] = images::count();
        $data['contentsCount'] = contents::count();
        
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
        // $data['roomsLists'] = rooms::all();
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
            'file'=>'required',
        ]);

        if ($validator->fails()) {
            return redirect('admin/rooms')
                        ->withErrors($validator)
                        ->withInput();
        }
        
        $filename = null;
        if (request()->hasFile('file')) {
            $file = Input::file('file');
            $destinationPath = public_path(). '/uploads/rooms/';
            $filename = time() . '.' . $file->getClientOriginalExtension();
            $file->move($destinationPath, $filename);   
        }

        $rooms = new rooms();
        $rooms->room_name = $input['room_name'];
        $rooms->price = $input['room_price'];
        $rooms->price_text = $input['price_text'];
        $rooms->room_description = $input['room_description'];
        $rooms->short_description = $input['short_description'];
        $rooms->image = $filename;

        if($rooms->save()){
            $request->session()->flash('alert-success', 'Room added successfully!');
            return redirect('admin/rooms');
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
     * Create Rooms
     *
     * @return \Illuminate\Http\Response
     */
    public function createCafe()
    {
      
        $data['page_heading'] = 'Cafe';
        // $data['roomsLists'] = rooms::all();
        return view('admin.cafe', $data);
    }

    /**
     * Store store rooms
     *
     * @return \Illuminate\Http\Response
     */
    public function storeCafe(Request $request)
    {
        $data['page_heading'] = 'Rooms';
        $input = $request->all();

        $validator = Validator::make($request->all(), [
            'workdays' => 'required|max:50',
            'work_time' => 'required|numeric',
            'work_time' => 'required',
            'description' =>'required',
            'file'=>'required',
        ]);

        if ($validator->fails()) {
            return redirect('admin/cafe')
                        ->withErrors($validator)
                        ->withInput();
        }
        
        $filename = null;
        if (request()->hasFile('file')) {
            $file = Input::file('file');
            $destinationPath = public_path(). '/uploads/banner/';
            $filename = time() . '.' . $file->getClientOriginalExtension();
            $file->move($destinationPath, $filename);   
        }

        $cafe = new cafe();
        $cafe->work_days = $input['workdays'];
        $cafe->work_time = $input['work_time'];
        $cafe->phone = $input['phone'];
        $cafe->description = $input['description'];
        $cafe->cafe_image = $filename;

        if($cafe->save()){
            $request->session()->flash('alert-success', 'Cafe added successfully!');
            return redirect('admin/cafe');
        }
        
    }

     /**
     * View Cafe- Fetch afe details from DB
     *
     * @return array
     */
    public function viewCafe()
    {
        $data['page_heading'] = 'List Cafe';
        $data['cafeLists'] = cafe::all();
        return view('admin.view_cafe_details', $data);
    }


     /**
     * View contents- Fetch room details from DB
     *
     * @return array
     */
    public function viewContents()
    {
        $data['page_heading'] = 'List Contents';
        $data['contents'] = contents::all();
        return view('admin.view_contents', $data);
    }

    /**
     * View rooms- Fetch room details from DB
     *
     * @return array
     */
    public function viewRooms()
    {
        $data['page_heading'] = 'List Rooms';
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
        $data['page_heading'] = 'List Facilities';
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
        $data['rooftop'] = Images::where('category', 'rooftop')->orderBy('id', 'Desc')->get();

        return view('admin.rooftop_gallery', $data);
    }

    /**
     * Store Gallery
     *
     * @return \Illuminate\Http\Response
     */
    public function storeRooftop(Request $request)
    {
        $data['page_heading'] = 'RoofTop';
        $input = $request->all();

        if($input['rooftop_type'] == 'Photo'){
            $validator = Validator::make($request->all(), [
                'rooftop_type' => 'required',
                'file' => 'required',
            ]);

        }else{
            $validator = Validator::make($request->all(), [
                'rooftop_type' => 'required',
                'file' => 'required|max:50000',
            ]);
        }

        if ($validator->fails()) {
            return redirect('admin/rooftop')
                        ->withErrors($validator)
                        ->withInput();
        }

        $valid = true;
        if($input['rooftop_type'] == 'Photo'){
            $roofTopCount = Images::where('category', 'rooftop')->where('type', 'Photo')->count();
            if($roofTopCount >= 14) {
                $valid = false;
                $errorMsg = 'Maximum 14 photos only allowed';
            }
        } else {
            $roofTopCount = Images::where('category', 'rooftop')->where('type', 'Video')->count();
            if($roofTopCount >= 1) {
                $valid = false;
                $errorMsg = 'Maximum 1 video only allowed';
            }
        }

        if(!$valid){
            return redirect('admin/rooftop')
                            ->withErrors($errorMsg)
                            ->withInput();
        }

        $picture = new Images();
        $picture->type =  $input['rooftop_type'];        
        $picture->category = 'rooftop';

        $thumbnailFileName = $fileName = null;
        if ($request->hasFile('file')) {
            $file = Input::file('file');
            $destinationPath = public_path(). '/uploads/rooftop/';
            $fileName = rand().time() . '.' . $file->getClientOriginalExtension();
            $file->move($destinationPath, $fileName);
        }

        if ($request->hasFile('thumbnail')) {
            $file = Input::file('thumbnail');
            $destinationPath = public_path(). '/uploads/rooftop/';
            $thumbnailFileName = rand().time() . '.' . $file->getClientOriginalExtension();
            $file->move($destinationPath, $thumbnailFileName);
            $picture->thumbnail = $thumbnailFileName;
        }

        $picture->file_name = $fileName;         
        $picture->description = $input['description'];

        if($picture->save()){
            $request->session()->flash('alert-success', 'Gallery added successfully!');
            return redirect('admin/rooftop');
        }
        
    }
     /**
     * View Roof Top- Fetch gallery from DB
     *
     * @return array
     */
    public function viewRooftop()
    {
        $data['page_heading'] = 'List Rooftop';
        $data['rooftopList'] = images::all();
        return view('admin.view_rooftop', $data);
    }

    
    public function editRooftop($imageId)
    {
        $data['page_heading'] = 'RoofTop';
        $data['rooftop'] = Images::where('id', $imageId)->first();
        return view('admin.edit_rooftop', $data);
    }


    /**
     * Edit facility.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function editFacility($id)
    {
        $data['page_heading'] = 'Edit Facility';
        $data['facility'] = facilities::find($id);
        return view('admin.edit_facilities', $data);
    }
    /**
     * Update facility.
     *
     * @param  Request  $request
     * @return \Illuminate\Http\Response
     */
    public function updateFacility(Request $request)
    {
        $data['page_heading'] = 'Update Facility';
        
        $input = $request->all();
        $validator = Validator::make($request->all(), [
            'facility_name' => 'required|max:100',
            'align_section' => 'required',
        ]);
        if ($validator->fails()) {
            return redirect('admin/facilities/view_facility_details')
                        ->withErrors($validator)
                        ->withInput();
        }
        $facility = facilities::find($input['id']);
        $facility->Description = $input['facility_name'];
        $facility->Section = $input['align_section'];

        if($facility->save()){
            $request->session()->flash('alert-success', 'Facility updated successfully!');
            return redirect('admin/facilities/view_facility_details');
        }
    }
    /**
     * Delete facility.
     *
     * @param  int  $Id
     * @return \Illuminate\Http\Response
     */
     public function deleteFacility($Id)
    {
        $facility = facilities::find($Id);
        if(count($facility) > 0) {
            $facility->delete();
            \Session::flash('alert-info', 'Facility deleted successfully!');            
        }
        return redirect('admin/facilities/view_facility_details');
    }
    /**
     * Edit Room.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function editRoom($id)
    {
        $data['page_heading'] = 'Edit Room';
        $data['room'] = rooms::find($id);
        return view('admin.edit_room', $data);
    }
    /**
     * Update facility.
     *
     * @param  Request  $request
     * @return \Illuminate\Http\Response
     */
    public function updateRoom(Request $request)
    {
        $data['page_heading'] = 'Update Room';
        
        $input = $request->all();
        $validator = Validator::make($request->all(), [
            'room_name' => 'required|max:50',
            'price' => 'required|numeric',
            'room_description' => 'required',
        ]);

        if ($validator->fails()) {
            return redirect('admin/rooms/view_room_details')
                        ->withErrors($validator)
                        ->withInput();
        }
        $room = Rooms::find($input['id']);

        $filename = $room->image;
        
            if ($request->file('file')) {
                $file = Input::file('file');
                $destinationPath = public_path(). '/uploads/rooms/';
                $filename = time() . '.' . $file->getClientOriginalExtension();
                $file->move($destinationPath, $filename);
            }

        $room->room_name = $input['room_name'];
        $room->price = $input['price'];
        $room->room_description = $input['room_description'];
        $room->short_description = $input['short_description'];
        $room->price_text = $input['price_text'];
        $room->image = $filename;
        
        if($room->save()){
             $request->session()->flash('alert-success', 'Room updated successfully!');
            return redirect('admin/rooms/view_room_details');
        }


    }
    /**
     * Delete Room.
     *
     * @param  int  $Id
     * @return \Illuminate\Http\Response
     */
     public function deleteRoom($Id)
    {
        $room = rooms::find($Id);
        if(count($room) > 0) {
            $destinationPath = public_path(). '/uploads/rooms/';
            $oldFile = $destinationPath.$room->image;
            if(file_exists($oldFile)){
                @unlink($oldFile);
            }

            $room->delete();
            \Session::flash('alert-info', 'Room deleted successfully!');            
        }
        return redirect('admin/rooms/view_room_details');
    }
    /**
     * Edit Rooftop.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    // public function editRooftop($id)
    // {
    //     //
    // }
    /**
     * Update Rooftop.
     *
     * @param  Request  $request
     * @return \Illuminate\Http\Response
     */
    public function updateRooftop(Request $request)
    {
        $data['page_heading'] = 'Update Rooftop';        
        $input = $request->all();        
        $rooftop = images::find($input['id']);
        $rooftop->type = $input['rooftop_type'];

        $filename = $rooftop->file_name;
        $thumbnailFileName = $rooftop->thumbnail;
        
            if ($request->file('file')) {
                $file = Input::file('file');
                $destinationPath = public_path(). '/uploads/rooftop/';
                $filename = time() . '.' . $file->getClientOriginalExtension();
                $file->move($destinationPath, $filename);
                if($input['rooftop_type'] == 'Video'){
                $oldFile = $destinationPath.$rooftop->file_name;
                    if(file_exists($oldFile)){
                        @unlink($oldFile);
                    }
                }
            }
            if ($request->hasFile('thumbnail')) {
                $file = Input::file('thumbnail');
                $destinationPath = public_path(). '/uploads/rooftop/';
                $thumbnailFileName = rand().time() . '.' . $file->getClientOriginalExtension();
                $file->move($destinationPath, $thumbnailFileName);
                $oldThumbnailFile = $destinationPath.$rooftop->thumbnail;
                if(file_exists($oldThumbnailFile)){
                    @unlink($oldThumbnailFile);
                }
            }
        

        $rooftop->file_name = $filename;
        $rooftop->thumbnail = $thumbnailFileName;
        $rooftop->description = $input['description'];

        if($rooftop->save()){
            $request->session()->flash('alert-success', 'Rooftop updated successfully!');
            return redirect('admin/rooftop');
        }
    }
    /**
     * Delete Rooftop.
     *
     * @param  int  $Id
     * @return \Illuminate\Http\Response
     */
    public function deleteRooftop($Id)
    {
        $rooftop = Images::find($Id);
        if(count($rooftop) > 0) {
            $rooftop->delete();
            \Session::flash('alert-info', 'Rooftop image/video deleted successfully!');            
        }
        return redirect('admin/rooftop');
    }
    /**
     * Edit Content.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function editContent($id)
    {
        $data['page_heading'] = 'Edit Content';
        $data['content'] = contents::find($id);
        return view('admin.edit_content', $data);
    }
    /**
     * Update Content.
     *
     * @param  Request  $request
     * @return \Illuminate\Http\Response
     */
    public function updateContent(Request $request)
    {
        $data['page_heading'] = 'Update Content';
        
        $input = $request->all();

        $content = contents::find($input['id']);
        $content->name = $input['type'];
        $content->description = $input['description'];

        if($content->save()){
            $request->session()->flash('alert-success', 'Content updated successfully!');
            return redirect('admin/contents/view_contents_details');
        }
        
    }
    /**
     * Delete Content.
     *
     * @param  int  $Id
     * @return \Illuminate\Http\Response
     */
     public function deleteContent($Id)
    {
        $contents = contents::find($Id);
        if(count($contents) > 0) {
            $contents->delete();
            \Session::flash('alert-info', 'Content deleted successfully!');            
        }
        return redirect('admin/contents/view_contents_details');
    }

    /**
     * Edit Cafe.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function editCafe($id)
    {
        $data['page_heading'] = 'Edit Cafe';
        $data['cafe'] = cafe::find($id);
        return view('admin.edit_cafe', $data);
    }
    /**
     * Update Cafe.
     *
     * @param  Request  $request
     * @return \Illuminate\Http\Response
     */
    public function updateCafe(Request $request)
    {
        $data['page_heading'] = 'Update Cafe';
        
        $input = $request->all();
        $cafe = cafe::find($input['id']);

            if ($request->file('file')) {
                $file = Input::file('file');
                $destinationPath = public_path(). '/uploads/banner/';
                $filename = time() . '.' . $file->getClientOriginalExtension();
                $extension = $file->getClientOriginalExtension();
                $file->move($destinationPath, $filename);
            }

        $cafe->work_days  = $input['workdays'];
        $cafe->work_time = $input['work_time'];
        $cafe->phone = $input['phone'];
        $cafe->description = $input['description'];
        $cafe->type = $extension;
        $cafe->cafe_image = $filename;


        if($cafe->save()){
            $request->session()->flash('alert-success', 'Cafe updated successfully!');
            return redirect('admin/cafe/view_cafe_details');
        }
        
    }
    /**
     * Delete Content.
     *
     * @param  int  $Id
     * @return \Illuminate\Http\Response
     */
     public function deleteCafe($Id)
    {
        $cafe = cafe::find($Id);
        if(count($cafe) > 0) {
            $cafe->delete();
            \Session::flash('alert-info', 'Cafe deleted successfully!');            
        }
        return redirect('admin/cafe/view_cafe_details');
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
        // dd($input);
        $validator = Validator::make($request->all(), [
            'title' => 'required|max:200',
            'subtitle' => 'required|max:300',
            'description' => 'required|max:500',
            'banner_image' => 'required',
            'mobile_banner_image' => 'required'
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

        if ($request->file('banner_image')) {
            $file = Input::file('banner_image');
            $destinationPath = public_path(). '/uploads/banner/';
            $filename = rand().time() . '.' . $file->getClientOriginalExtension();
            $file->move($destinationPath, $filename);
            $home->banner_image = $filename;
        }

        if ($request->file('mobile_banner_image')) {
            $file = Input::file('mobile_banner_image');
            $destinationPath = public_path(). '/uploads/banner/';
            $mobile_filename = rand().time() . '.' . $file->getClientOriginalExtension();
            $file->move($destinationPath, $mobile_filename);
            $home->mobile_banner_image = $mobile_filename;
        }
        

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
        $mobile_filename = $home->mobile_banner_image;
        if ($request->file('banner_image')) {
            $file = Input::file('banner_image');
            $destinationPath = public_path(). '/uploads/banner/';
            $filename = rand().time() . '.' . $file->getClientOriginalExtension();
            $file->move($destinationPath, $filename);
            $oldFile = $destinationPath.$home->banner_image;
            if(file_exists($oldFile)){
                @unlink($oldFile);
            }
        }

        if ($request->file('mobile_banner_image')) {
            $file = Input::file('mobile_banner_image');
            $destinationPath = public_path(). '/uploads/banner/';
            $mobile_filename =  time() . '.' . $file->getClientOriginalExtension();
            $file->move($destinationPath, $mobile_filename);
            $oldFile = $destinationPath.$home->mobile_banner_image;
            if(file_exists($oldFile)){
                @unlink($oldFile);
            }
        }

        $home->banner_image = $filename;
        $home->mobile_banner_image = $mobile_filename;
        if($home->save()){
            $request->session()->flash('alert-success', 'Home content updated successfully!');
            return redirect('admin/header_content');
        }
    }
    
    public function deleteHeaderBanners($homeId)
    {
        $home = Home::find($homeId);
        if(count($home) > 0) {            
            $destinationPath = public_path(). '/uploads/banner/';
            $oldFile = $destinationPath.$home->banner_image;
            if(file_exists($oldFile)){
                @unlink($oldFile);
            }
            $home->delete();
            \Session::flash('alert-info', 'Home content deleted successfully!');            
        }
        return redirect('admin/header_content');
    }

    public function headerGallery()
    {
        $data['page_heading'] = 'Home Gallery';
        $data['images'] = Images::where('category','home')->get();
        return view('admin.home_gallery', $data);
    }

    public function storeHomeGallery(Request $request)
    {
        $data['page_heading'] = 'Home Gallery';
        $input = $request->all();
        
        // $rules['home_file_type'] = 'required|mimes:mp4,mov,m4v|max:2000';
        // $rules['file'] = 'required';
        // if(isset($input) && $input['home_file_type'] == "Photo"){
        //     $rules['home_file_type'] = 'mimes:jpeg,jpg,png|max:2000';
        // }
        // $validator =Validator::make(Input::all(), $rules);

        // if ($validator->fails()) {
        //     return redirect('admin/header_gallery')
        //                 ->withErrors($validator)
        //                 ->withInput();
        // }

       
        $thumbnailFileName = $fileName = null;

        if ($request->hasFile('file')) {
            $file = Input::file('file');
            $destinationPath = public_path(). '/uploads/home/';
            $fileName = rand().time() . '.' . $file->getClientOriginalExtension();
            $file->move($destinationPath, $fileName);
        }

        if ($request->hasFile('thumbnail')) {
            $file = Input::file('thumbnail');
            $destinationPath = public_path(). '/uploads/home/';
            $thumbnailFileName = rand().time() . '.' . $file->getClientOriginalExtension();
            $file->move($destinationPath, $thumbnailFileName);
        }

         $picture = new Images();
         $picture->type =  $input['home_file_type'];
         $picture->file_name = $fileName;
         $picture->category = 'home';
         $picture->description = $input['description'];
         $picture->thumbnail = $thumbnailFileName;

        if($picture->save()){
            $request->session()->flash('alert-success', 'Gallery added successfully!');
            return redirect('admin/header_gallery');
        }
        
    }

    public function editHeaderGallery($imageId)
    {
        $data['page_heading'] = 'Header';
        $data['images'] = Images::where('id', $imageId)->first();
        return view('admin.edit_home_gallery', $data);
    }

    public function updateHeaderGallery(Request $request)
    {
        $images = Images::find($request->id);
        $images->type = $request->home_file_type;
 
        $filename = $images->file_name;
        $thumbnailFileName = $images->thumbnail;
        if ($request->file('gallery_image')) {
            $file = Input::file('gallery_image');
            $destinationPath = public_path(). '/uploads/home/';
            $filename = time() . '.' . $file->getClientOriginalExtension();
            $file->move($destinationPath, $filename);
            $oldFile = $destinationPath.$images->file_name;
            if(file_exists($oldFile)){
                @unlink($oldFile);
            }
        }

        if ($request->hasFile('thumbnail')) {
            $file = Input::file('thumbnail');
            $destinationPath = public_path(). '/uploads/home/';
            $thumbnailFileName = rand().time() . '.' . $file->getClientOriginalExtension();
            $file->move($destinationPath, $thumbnailFileName);
            $oldThumbnailFile = $destinationPath.$images->thumbnail;
            if(file_exists($oldThumbnailFile)){
                @unlink($oldThumbnailFile);
            }
        }

        $images->file_name = $filename;
        $images->description = $request->description;
        $images->thumbnail = $thumbnailFileName;
        if($images->save()){
            $request->session()->flash('alert-success', 'Home gallery updated successfully!');
            return redirect('admin/header_gallery');
        }
    }
    
    public function deleteHeaderGallery($imageId)
    {
        $images = Images::find($imageId);
        if(count($images) > 0) {            
            $destinationPath = public_path(). '/uploads/home/';
            $oldFile = $destinationPath.$images->file_name;
            if(file_exists($oldFile)){
                @unlink($oldFile);
            }
            $images->delete();
            \Session::flash('alert-info', 'Home gallery deleted successfully!');            
        }
        return redirect('admin/header_gallery');
    }
}
