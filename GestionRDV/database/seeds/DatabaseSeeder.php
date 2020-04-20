<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
      //   $this->call(UsersTableSeeder::class);
      //$this->call(PatientSeeder::class);
         //$this->call(RendvSeeder::class);
         /*$patients = array(
            array('name'=>'mohammed','age'=> '25','address'=>'oran'),
            array('name'=>'amine','age'=> '26','address'=>'ain temouchent'),
            array('name'=>'aek','age'=> '27','address'=>'alger'),
       );

        DB::table('patients')->insert($patients);*/

        $rdvs = array(
            array('description'=>'rythme cardiaque','dateOfvisiting'=> now(),'patient_id'=>1),
            array('description'=>'diabète maladie','dateOfvisiting'=>now(),'patient_id'=>2),
            array('description'=>'Tension' ,'dateOfvisiting'=>now(),'patient_id'=>3),
        );

        DB::table('rendvs')->insert($rdvs);
   }
}
