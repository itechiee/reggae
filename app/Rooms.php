<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;

class Rooms extends Model
{

    protected $table = 'rooms';
    protected $fillable = ['room_name', 'price','room_description','created_at','updated_at'];

}
