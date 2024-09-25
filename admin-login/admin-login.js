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
        } else if (language === 'en') {
          email.placeholder = 'Email';
          password.placeholder = 'Password';
          loginButton.textContent = 'Login';
          forgotPassword.textContent = 'Do you need assistance?';
        } else if (language === 'fr') {
          email.placeholder = 'Email';
          password.placeholder = 'Password';
          loginButton.textContent = 'Login';
          forgotPassword.textContent = 'Avez-vous besoin d\'aide?';
        }
        else if(language === 'es') {
            email.placeholder = 'Email';
            password.placeholder = 'Password';
            loginButton.textContent = 'Login';
            forgotPassword.textContent = '¿Necesitas ayuda?';
        }
        else if(language === 'ru')
        {
            email.placeholder = 'электронная почта';
            password.placeholder = 'пароль';
            loginButton.textContent = 'авторизоваться';
            forgotPassword.textContent = 'Вам нужна помощь?';
        }
        else if(language === 'ch')
        {
            email.placeholder = '电子邮件';
            password.placeholder = '密码';
            loginButton.textContent = '登录';
            forgotPassword.textContent = '你需要帮助吗？';
        }
        else if(language === 'dt')
        {
            email.placeholder = 'Email';
            password.placeholder = 'Passwort';
            loginButton.textContent = 'Login';
            forgotPassword.textContent = 'Benötigen Sie Hilfe?';
        }
        else if(language === 'tk')
        {
          email.placeholder = 'e-posta';
          password.placeholder = 'şifre';
          loginButton.textContent = 'Giriş';
          forgotPassword.textContent = 'Yardıma ihtiyacınız var mı?';
        }
      });