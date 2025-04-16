<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class ResetPasswordRequest extends FormRequest
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
            'email' => 'required|email',
            'password' => [
                'required',
                'string',
                'min:8',
                Password::min(8)->letters()->mixedCase()->numbers()->symbols(),
                'confirmed',
            ],
            'token' => 'required'
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
            'email.required' => 'Ingrese el Email',
            'password.required' => 'Ingrese la contraseña',
            'password.min' => 'La contraseña debe tener al menos 8 caracteres',
            'password.required' => 'Ingrese la contraseña',
            'password.letters' => 'La contraseña debe contener al menos una letra',
            'password.mixed' => 'La contraseña debe contener letras mayúsculas y minúsculas',
            'password.numbers' => 'La contraseña debe contener al menos un dígito',
            'password.symbols' => 'La contraseña debe contener al menos un carácter especial',
            'password.confirmed' => 'Las contraseñas no coinciden',
        ];
    }
}
