<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;

class Home extends Model
{

    protected $table = 'homes';
    protected $fillable = ['title', 'subtitle','description','banner_image','mobile_banner_image','thumbnail', 'created_at', 'updated_at'];

}
