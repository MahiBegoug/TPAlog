<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRendvsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rendvs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('description');
            $table->date('dateOfvisiting');

            $table->unsignedBigInteger('patient_id');

            $table->foreign('patient_id')
                    ->references('id')->on('patients')
                    ->onDelete('cascade');

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
        Schema::dropIfExists('rendvs');
    }
}
