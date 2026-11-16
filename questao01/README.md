# 💧 Calculadora de Consumo de Água

![React Native](https://img.shields.io/badge/React_Native-0.81.5-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-~54.0.37-000020?style=for-the-badge&logo=expo&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Aplicativo mobile desenvolvido em **React Native** com **Expo** para estimar a meta ideal de hidratação diária com base no peso corporal do usuário.

---

## 📋 Sobre o Projeto

O aplicativo calcula a recomendação diária de ingestão hídrica utilizando a métrica padrão de **35 mL por quilograma**. A interface foi projetada com foco em usabilidade e conforto visual, adotando um tema **Dark Mode** moderno e responsivo.

### ✨ Funcionalidades

- **Cálculo Automático:** Conversão imediata de peso (kg) para litros recomendados por dia.
- **Suporte a Decimais:** Aceita tanto ponto (`.`) quanto vírgula (`,`) como separador decimal.
- **Validação de Entrada:** Bloqueio e alerta visual caso o valor informado seja nulo, negativo ou não numérico.
- **Experiência Mobile Otimizada:** Ajuste automático de tela para evitar sobreposição do teclado virtual (`KeyboardAvoidingView`) e fechamento ao tocar fora do campo.

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
   cd questao01

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
