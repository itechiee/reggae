<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;

class Facilities extends Model
{

    protected $table = 'facilities';
    protected $fillable = ['Description', 'Section','created_at'];

}
