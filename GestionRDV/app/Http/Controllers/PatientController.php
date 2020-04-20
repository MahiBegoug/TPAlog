<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class PatientController extends Controller
{
        public function createPatient(Request $request)
        {
            return response()->json(DB::table('patients')->insert($request->all()));

        }

        public function modifiePatient(Request $request,$id)
        {
            return response()->json(
                DB::table('patients')
                ->where('id', $id)
                ->update($request->all()));
        }

        public function showPatient($id)
        {
            return response()->json(DB::table('patients')->where('id','=',$id)->get());
        }

        public function showAll()
        {
            return response()->json(DB::table('patients')->get()->toArray());
        }

        public function destroyPatient($id)
        {
            return response()->json(DB::table('patients')->where('id','=',$id)->delete());

        }


}
