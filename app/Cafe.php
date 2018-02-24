<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;

class Cafe extends Model
{

    protected $table = 'cafe';
    protected $fillable = ['work_days', 'work_time','phone', 'description', 'cafe_image','type', 'created_at','updated_at'];
}
