import LocalizedStrings from "localized-strings";

const strings = new LocalizedStrings({
  ptBR: {
    components: {
      loginForm: {
        inputs: {
          username: "Usuário",
          password: "Senha"
        },
        buttons: {
          login: "Entrar",
        },
        forgotPassword: "Esqueceu a senha?",
        dontHaveAccount: "Não tem uma conta ainda? ",
        createNow: "Crie agora!",
        warnings: {
          usernameIsRequired: "Usuário é obrigatório!",
          passwordIsRequired: "Senha é obrigatória!",
          invalidUsernameOrPassword: "Usuário ou senha inválidos!"
        }
      },
    },
    sections: {},
    actions: {
      toSend: "Enviar",
      toGoBack: "Voltar",
      toEnter: "Entrar",
      toGoOut: "Sair",
    },
    alerts: {},
  },
});

export default strings;