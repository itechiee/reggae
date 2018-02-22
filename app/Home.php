<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;

class Home extends Model
{

    protected $table = 'homes';
    protected $fillable = ['title', 'subtitle','description','banner_image', 'created_at', 'updated_at'];

}
