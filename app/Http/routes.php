<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

// Authentication routes...
Route::get('auth/login', 'Auth\AuthController@getLogin');
Route::post('auth/login', 'Auth\AuthController@postLogin');
Route::get('auth/logout', 'Auth\AuthController@getLogout');

Route::get('admin/dashboard', 'AdminController@index');

Route::get('admin/facilities', 'AdminController@createFacilities');
Route::post('admin/facilities/store', 'AdminController@storeFacilities');
Route::get('admin/facilities/view_facility_details', 'AdminController@viewFacilities');

Route::get('admin/rooms', 'AdminController@createRooms');
Route::post('admin/rooms/store', 'AdminController@storeRooms');
Route::get('admin/rooms/view_room_details', 'AdminController@viewRooms');
 
Route::get('admin/rooftop', 'AdminController@createRooftop');
Route::post('admin/rooftop/store', 'AdminController@storeRooftop');
Route::get('admin/rooftop/view_rooftop_details', 'AdminController@viewRooftop');
Route::post('admin/rooftop/delete', 'AdminController@deleteRooftop');

//Route::get('admin/rooftop', 'AdminController@createRooftop');
//Route::post('admin/Rooftop/store', 'AdminController@storeRooftop');

Route::get('/', 'HomeController@index');