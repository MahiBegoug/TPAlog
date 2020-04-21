<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;

class RendvController extends Controller
{

    public function showAllRdv()
    {
       return response()->json(DB::table('rendvs')->get()->toArray());
    }

    public function showRdvPatient($patient_id)
    {
        return response()->json(DB::table('rendvs')->where('patient_id','=',$patient_id)->get()->toArray());
    }

    public function createRdv(Request $request)
    {
        return response()->json(DB::table('rendvs')->insert($request->all()));
    }

    public function modifierRdv(Request $request,$id)
    {
        return response()->json(
        DB::table('rendvs')
        ->where('id', $id)
        ->update($request->all()));
    }

    public function deleteRDV($id)
    {
        return response()->json(DB::table('rendvs')->where('id','=',$id)->delete());
    }

    public function showRdvDate($date)
    {
        return response()->json(DB::table('rendvs')->where('dateOfvisiting','=',$date)->get()->toArray());
    }
}
