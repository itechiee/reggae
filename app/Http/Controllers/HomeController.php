<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Facilities;
use App\Home;
use App\Images;
use App\Rooms;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['facilities']['left'] = Facilities::where('Section', 'Left')->get();
        $data['facilities']['right'] = Facilities::where('Section', 'Right')->get();
        $data['homes_content'] = Home::first();
        $data['home_video'] = Images::where('type', 'Video')
                                    ->where('category', 'home')
                                    ->orderBy('id', 'DESC')->first();
        $data['home_gallery'] = Images::where('type', 'Photo')
                                    ->where('category', 'home')
                                    ->orderBy('id', 'DESC')->limit(3)->get(); 

        $data['rooftop_video_banner'] = Images::where('type', 'Video')
                                    ->where('category', 'rooftop')->first(); 
        
        $data['rooftop_gallery'] = Images::where('type', 'Photo')
                                    ->where('category', 'rooftop')
                                    ->orderBy('id', 'DESC')
                                    ->limit(14)
                                    ->get()
                                    ->toArray(); 
        
        $data['rooftopLeftA'] = array_slice($data['rooftop_gallery'], 0, 4);
        $data['rooftopLeftB'] = array_slice($data['rooftop_gallery'], 4, 4);
        $data['rooftopRight'] = array_slice($data['rooftop_gallery'], 8, 6);   

        $data['roomsLists'] = Rooms::get();

        return view('home.index', $data);
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
