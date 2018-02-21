<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;

class Contents extends Model
{

    protected $table = 'contents';
    protected $fillable = ['name','description','created_at'];

}
