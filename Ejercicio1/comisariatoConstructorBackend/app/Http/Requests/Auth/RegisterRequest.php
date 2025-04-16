<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class RegisterRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => [
                'required',
                'string',
                Password::min(8)->letters()->mixedCase()->numbers()->symbols(),
            ],
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'name.required' => 'Ingrese el nombre',
            'email.required' => 'Ingrese el Email',
            'email.email' => 'No es un Email válido',
            'email.unique' => 'El Email ya está en uso',
            'password.required' => 'Ingrese la contraseña',
            'password.min' => 'La contraseña debe tener al menos 8 caracteres',
            'password.letters' => 'La contraseña debe contener al menos una letra',
            'password.mixed' => 'La contraseña debe contener letras mayúsculas y minúsculas',
            'password.numbers' => 'La contraseña debe contener al menos un dígito',
            'password.symbols' => 'La contraseña debe contener al menos un carácter especial',
        ];
    }
}
