<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


/*
 *
 *    RDV Componenet
 */

Route::get('showAllRdv','RendvController@showAllRdv');
Route::get('showRdvPatient/{id}','RendvController@showRdvPatient');
Route::post('createRdv','RendvController@createRdv');
Route::delete('destroyRdv/{id}','RendvController@deleteRDV');
Route::post('modifieRdv/{id}','RendvController@modifierRdv');
Route::get('showbyDate/{date}','RendvController@showRdvDate');

/**
 *    Patient
 */


Route::get('showAllPation','PatientController@showAll');
Route::get('showPatient/{id}','PatientController@showPatient');
Route::post('createPatient','PatientController@createPatient');
Route::delete('destroyPatient/{id}','PatientControllerr@destroyPatient');
Route::post('modifiePatient/{id}','PatientController@modifiePatient');
