<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RendvSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $rdvs = array(
            array('description'=>'rythme cardiaque','dateOfvisiting'=> now(),'patient_id'=>1),
            array('description'=>'diabète maladie','dateOfvisiting'=>now(),'patient_id'=>2),
            array('description'=>'Tension' ,'dateOfvisiting'=>now(),'patient_id'=>3),
        );

        DB::table('rendvs')->insert($rdvs);
    }
}
