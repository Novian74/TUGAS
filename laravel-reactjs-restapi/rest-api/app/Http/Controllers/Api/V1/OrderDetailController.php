<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreOrderDetailRequest;
use App\Models\OrderDetail;
use Illuminate\Http\Request;

class OrderDetailController extends Controller
{
  public function store(StoreOrderDetailRequest $request)
  {
    OrderDetail::create($request->validated());
    return response()->json("order Created");
  }
}
