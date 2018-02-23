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

Route::get('admin/contents', 'AdminController@createContents');
Route::post('admin/contents/store', 'AdminController@storeContents');
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

Route::get('/', 'HomeController@index');