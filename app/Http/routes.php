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
Route::get('admin/facilities/edit/{id}', 'AdminController@editFacility');
Route::post('admin/facilities/update', 'AdminController@updateFacility');
Route::get('admin/facilities/delete/{id}', 'AdminController@deleteFacility');

Route::get('admin/rooms', 'AdminController@createRooms');
Route::post('admin/rooms/store', 'AdminController@storeRooms');
Route::get('admin/rooms/view_room_details', 'AdminController@viewRooms');
Route::get('admin/rooms/edit/{id}', 'AdminController@editRoom');
Route::post('admin/rooms/update', 'AdminController@updateRoom');
Route::get('admin/rooms/delete/{id}', 'AdminController@deleteRoom');
 
Route::get('admin/rooftop', 'AdminController@createRooftop');
Route::post('admin/rooftop/store', 'AdminController@storeRooftop');
Route::get('admin/rooftop/view_rooftop_details', 'AdminController@viewRooftop');
Route::get('admin/rooftop/edit/{id}', 'AdminController@editRooftop');
Route::post('admin/rooftop/update', 'AdminController@updateRooftop');
Route::get('admin/rooftop/delete/{id}', 'AdminController@deleteRooftop');

Route::get('admin/contents', 'AdminController@createContents');
Route::post('admin/contents/store', 'AdminController@storeContents');
Route::get('admin/contents/view_content_details', 'AdminController@viewContents');
Route::get('admin/contents/edit/{id}', 'AdminController@editContent');
Route::post('admin/contents/update', 'AdminController@updateContent');
Route::get('admin/contents/delete/{id}', 'AdminController@deleteContent');

//Route::get('admin/rooftop', 'AdminController@createRooftop');
//Route::post('admin/Rooftop/store', 'AdminController@storeRooftop');

Route::get('admin/header_content', 'AdminController@headerBanners');
Route::post('admin/header_content/store', 'AdminController@storeHeaderBanners');
Route::get('admin/header_content/edit/{homeId}', 'AdminController@editHeaderBanners');
Route::post('/admin/header_content/update', 'AdminController@updateHeaderBanners');
Route::get('admin/header_content/delete/{homeId}', 'AdminController@deleteHeaderBanners');

Route::get('admin/header_gallery', 'AdminController@headerGallery');

Route::post('admin/header_gallery/store', 'AdminController@storeHomeGallery');
Route::get('admin/header_gallery/edit/{imageId}', 'AdminController@editHeaderGallery');
Route::post('/admin/header_gallery/update', 'AdminController@updateHeaderGallery');
Route::get('admin/header_gallery/delete/{homeId}', 'AdminController@deleteHeaderGallery');


Route::get('admin/contents/view_contents_details', 'AdminController@viewContents');
//Route::get('admin/rooftop', 'AdminController@createRooftop');
//Route::post('admin/Rooftop/store', 'AdminController@storeRooftop');


Route::get('/', 'HomeController@index');