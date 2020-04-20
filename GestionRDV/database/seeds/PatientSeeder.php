<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class PatientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $patients = array(
            array('name'=>'mohammed','age'=> '25','address'=>'oran'),
            array('name'=>'amine','age'=> '26','address'=>'ain temouchent'),
            array('name'=>'aek','age'=> '27','address'=>'alger'),
       );

        DB::table('patients')->insert($patients);
    }
}
