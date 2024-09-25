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
          forgotPassword.textContent = 'Hai dimenticato la password?';
        } else if (language === 'en') {
          email.placeholder = 'Email';
          password.placeholder = 'Password';
          loginButton.textContent = 'Login';
          forgotPassword.textContent = 'Forgot your password?';
        } else if (language === 'fr') {
          email.placeholder = 'Email';
          password.placeholder = 'Password';
          loginButton.textContent = 'Login';
          forgotPassword.textContent = 'Mot de passe oublié?';
        }
        else if(language === 'es') {
            email.placeholder = 'Email';
            password.placeholder = 'Password';
            loginButton.textContent = 'Login';
            forgotPassword.textContent = '¿Olvidaste tu contraseña?';
        }
        else if(language === 'ru')
        {
            email.placeholder = 'электронная почта';
            password.placeholder = 'пароль';
            loginButton.textContent = 'авторизоваться';
            forgotPassword.textContent = 'Забыли пароль?';
        }
        else if(language === 'ch')
        {
            email.placeholder = '电子邮件';
            password.placeholder = '密码';
            loginButton.textContent = '登录';
            forgotPassword.textContent = '你好，密码是多少？';
        }
        else if(language === 'dt')
        {
            email.placeholder = 'Email';
            password.placeholder = 'Passwort';
            loginButton.textContent = 'Login';
            forgotPassword.textContent = 'Hast du das Passwort vermisst?';
        }
        else if(language === 'tk')
        {
          email.placeholder = 'e-posta';
          password.placeholder = 'şifre';
          loginButton.textContent = 'Giriş';
          forgotPassword.textContent = 'Şifreniz mi unuttunuz?';
        }
      });