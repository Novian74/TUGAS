<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProdukRequest extends FormRequest
{
  /**
   * Determine if the user is authorized to make this request.
   */
  public function authorize(): bool
  {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
   */
  public function rules(): array
  {
    return [
      'barang' => ['required', 'min:1', 'max:200'],
      'deskripsi' => ['required', 'min:1', 'max:200'],
      'kategori' => ['required', 'min:1', 'max:200'],
      'harga' => ['required', 'min:1', 'max:200'],
    ];
  }
}
