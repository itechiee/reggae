<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;

class Location extends Model
{

    protected $table = 'locations';
    protected $fillable = ['address', 'phone','mail', 'btn_mail_text', 'location_description', 'created_at','updated_at'];
}
