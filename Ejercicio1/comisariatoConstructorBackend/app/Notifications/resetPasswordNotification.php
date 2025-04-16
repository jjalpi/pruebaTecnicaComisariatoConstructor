<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class resetPasswordNotification extends Notification
{
    use Queueable;
    public $token;
    /**
     * Create a new notification instance.
     */
    public function __construct($token)
    {
        $this->token = $token;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    { {
            $frontendUrl = config('app.frontend_url');
            $url = $frontendUrl . '/reset_password/' . $this->token;
            return (new MailMessage)
                ->subject('Restablecimiento de Contraseña')
                ->greeting('Hola!')
                ->line('Recibiste este correo porque recibimos una solicitud de restablecimiento de contraseña para tu cuenta.')
                ->action('Restablecer Contraseña', $url)
                ->line('Si no solicitaste un restablecimiento de contraseña, no se requiere ninguna acción adicional.')
                ->salutation('Saludos, Comisariato del Constructor')
                ->withSymfonyMessage(function ($message) use ($url) {
                    $message->getHeaders()->addTextHeader(
                        'X-Alt-Message',
                        "Si tienes problemas con el botón, copia esta URL en tu navegador: $url"
                    );
                });
        }
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
