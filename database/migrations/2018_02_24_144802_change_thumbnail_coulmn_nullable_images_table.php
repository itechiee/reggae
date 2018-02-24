<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ChangeThumbnailCoulmnNullableImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement('ALTER TABLE `images` CHANGE `thumbnail` `thumbnail` VARCHAR(300) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL;');
        DB::statement('ALTER TABLE `images` CHANGE `description` `description` VARCHAR(300) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL;');
        // Schema::table('images', function (Blueprint $table) {
        //     // change() tells the Schema builder that we are altering a table
        //     $table->integer('thumbnail')->unsigned()->nullable()->change();
        //     $table->integer('description')->unsigned()->nullable()->change();
        // });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement('ALTER TABLE `images` CHANGE `thumbnail` `thumbnail` VARCHAR(300) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL;');
        DB::statement('ALTER TABLE `images` CHANGE `description` `description` VARCHAR(300) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL;');
        // $table->integer('thumbnail')->unsigned()->nullable(false)->change();
        // $table->integer('description')->unsigned()->nullable(false)->change();
    }
}
