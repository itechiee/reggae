<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;

class Images extends Model
{

    protected $table = 'images';
    protected $fillable = ['file_name', 'type','file_type','category','thumbnail','description','created_at'];

}
