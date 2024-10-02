document.getElementById('languageSelector').addEventListener('change', function() {
        const language = this.value;
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const loginButton = document.getElementById('login-button');
        const forgotPassword = document.getElementById('forgot-password');
        

        if (language === 'it') {
          email.placeholder = 'Email';
          password.placeholder = 'Password';
          loginButton.textContent = 'Login';
          forgotPassword.textContent = 'Hai bisogno di assistenza?';
          errorMessage.textContent = 'Credenziali Sbagliate';
        } else if (language === 'en') {
          email.placeholder = 'Email';
          password.placeholder = 'Password';
          loginButton.textContent = 'Login';
          forgotPassword.textContent = 'Do you need assistance?';
          errorMessage.textContent = 'Wrong Credentials';
        } else if (language === 'fr') {
          email.placeholder = 'Email';
          password.placeholder = 'Password';
          loginButton.textContent = 'Login';
          forgotPassword.textContent = 'Avez-vous besoin d\'aide?';
          errorMessage.textContent = 'Mauvaises Credentials';
        }
        else if(language === 'es') {
            email.placeholder = 'Email';
            password.placeholder = 'Password';
            loginButton.textContent = 'Login';
            forgotPassword.textContent = '¿Necesitas ayuda?';
            errorMessage.textContent = 'Credenciales Incorrectas';
        }
        else if(language === 'ru')
        {
            email.placeholder = 'электронная почта';
            password.placeholder = 'пароль';
            loginButton.textContent = 'авторизоваться';
            forgotPassword.textContent = 'Вам нужна помощь?';
            errorMessage.textContent = 'Неверные учетные данные';
        }
        else if(language === 'ch')
        {
            email.placeholder = '电子邮件';
            password.placeholder = '密码';
            loginButton.textContent = '登录';
            forgotPassword.textContent = '你需要帮助吗？';
            errorMessage.textContent = '错误的凭证';
        }
        else if(language === 'dt')
        {
            email.placeholder = 'Email';
            password.placeholder = 'Passwort';
            loginButton.textContent = 'Login';
            forgotPassword.textContent = 'Benötigen Sie Hilfe?';
            errorMessage.textContent = 'Falsche Anmeldeinformationen';
        }
        else if(language === 'tk')
        {
          email.placeholder = 'e-posta';
          password.placeholder = 'şifre';
          loginButton.textContent = 'Giriş';
          forgotPassword.textContent = 'Yardıma ihtiyacınız var mı?';
          errorMessage.textContent = 'Yanlış kimlik bilgileri';
        }
    
      });

    //funzione per il login
    const errorMessage = document.getElementById('error-message');
    
    // Nascondi il messaggio di errore all'inizio
    errorMessage.style.display = 'none';
    
    document.getElementById('login-button').addEventListener('click', function(e) {
        e.preventDefault();
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        if (email == 'admin@gmail.com' && password == 'admin') {
            window.location.href = '../admin-file-management/admin-file-management.html';
        } else {
            // Mostra il messaggio di errore
            errorMessage.style.display = 'block';
            errorMessage.style.color = 'red';
            errorMessage.style.padding = '8px';
            errorMessage.style.border = '1px solid red';
            errorMessage.style.borderRadius = '10px';
            errorMessage.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
            // Imposta il testo del messaggio di errore in base alla lingua
            switch(language) {
                case 'it':
                    errorMessage.textContent = 'Credenziali Sbagliate';
                    break;
                case 'en':
                    errorMessage.textContent = 'Wrong Credentials';
                    break;
                case 'fr':
                    errorMessage.textContent = 'Mauvaises Credentials';
                    break;
                case 'es':
                    errorMessage.textContent = 'Credenciales Incorrectas';
                    break;
                case 'ru':
                    errorMessage.textContent = 'Неверные учетные данные';
                    break;
                case 'ch':
                    errorMessage.textContent = '错误的凭证';
                    break;
                case 'dt':
                    errorMessage.textContent = 'Falsche Anmeldeinformationen';
                    break;
                case 'tk':
                    errorMessage.textContent = 'Yanlış kimlik bilgileri';
                    break;
                default:
                    errorMessage.textContent = 'Wrong Credentials';
            }
        }
    });
