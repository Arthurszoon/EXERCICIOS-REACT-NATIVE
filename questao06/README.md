### `questao06/README.md`

```markdown
# 🗳️ Votação de Representantes – Grêmio Estudantil

![React Native](https://img.shields.io/badge/React_Native-0.81.5-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-~54.0.37-000020?style=for-the-badge&logo=expo&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Aplicativo mobile desenvolvido em **React Native** com **Expo** para registro de votos e apuração automática em tempo real de eleições do grêmio estudantil.

---

## 📋 Sobre o Projeto

O sistema apresenta as chapas concorrentes em cards interativos, contabiliza os votos individualmente e calcula automaticamente o total geral e o status da liderança (incluindo detecção de empates).

### ✨ Funcionalidades

- **Registro Instantâneo de Votos:** Contabilização individual com um toque para cada chapa candidata:
  - *Chapa 01 - Arthur Rocha*
  - *Chapa 02 - Carlos Kauan*
  - *Chapa 03 - Pedro Alexandrino*
- **Apuração em Tempo Real:** Soma automática do total geral de votos computados.
- **Detecção Inteligente de Liderança:** Identifica automaticamente a chapa mais votada ou sinaliza quando há **empate na liderança**, listando todos os empatados e suas respectivas contagens.
- **Interface Dark Mode:** Layout organizado e responsivo para fácil visualização dos resultados.

---

## 🛠️ Tecnologias Utilizadas

- [React Native](https://reactnative.dev/) (`0.81.5`)
- [Expo](https://expo.dev/) (`~54.0.37`)
- [React](https://react.dev/) (`19.1.0`)

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado na máquina
- Aplicativo **Expo Go** instalado no dispositivo móvel (Android/iOS) ou um emulador configurado

### Passo a passo

1. Acesse a pasta do projeto:
   ```bash
   cd questao06
Instale as dependências:

Bash
npm install
Inicie o servidor de desenvolvimento:

Bash
npm start
Escaneie o QR Code exibido no terminal utilizando o Expo Go (Android) ou a câmera nativa (iOS), ou pressione a / i no terminal para abrir em um emulador.





# Sample Snack app

Open the `App.js` file to start writing some code. You can preview the changes directly on your phone or tablet by scanning the **QR code** or use the iOS or Android emulators. When you're done, click **Save** and share the link!

When you're ready to see everything that Expo provides (or if you want to use your own editor) you can **Download** your project and use it with [expo cli](https://docs.expo.dev/get-started/installation/#expo-cli)).

All projects created in Snack are publicly available, so you can easily share the link to this project via link, or embed it on a web page with the `<>` button.

If you're having problems, you can tweet to us [@expo](https://twitter.com/expo) or ask in our [forums](https://forums.expo.dev/c/expo-dev-tools/61) or [Discord](https://chat.expo.dev/).

Snack is Open Source. You can find the code on the [GitHub repo](https://github.com/expo/snack).
