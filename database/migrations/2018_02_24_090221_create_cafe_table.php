<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCafeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cafe', function (Blueprint $table) {
            $table->increments('id');
            $table->string('work_days', 200);
            $table->string('work_time', 300);
            $table->string('phone', 300);
            $table->mediumText('description');
            $table->string('type',200);
            $table->string('cafe_image', 300);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
       Schema::drop('cafe');
    }
}
