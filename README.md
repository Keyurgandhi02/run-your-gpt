# GSTUDIO AI

GSTUDIO AI is an AI Task that lets you ask a machine to do things for you. You can ask it questions or other things you want it to do, or you can give it a voice command and it'll do the same. Plus, you can hear what it's saying by hitting the triggers.

## Prerequisites

Before you begin, ensure you have met the following requirements:

<!--- These are just example requirements. Add, duplicate or remove as required --->

- You have installed the latest version of Python and websockets.
- You have a `<Windows/Linux/Mac>` machine. State which OS is supported/which is not.
- You have read `<guide/link/documentation_related_to_project>`.

## Installing and Running GSTUDIO AI

1. Fork this repository.
2. Open forked repo in any code editor
3. Run `npm install` command
4. `npm start` start local server
5. Start Google colab server.
6. After Successfully run colab server Add wss URI in URI vaiable in `APIExampleStream.py` file (Ex: URI = 'wss://your-uri-here.trycloudflare.com/api/v1/stream').
7. Run `APIExampleStream.py` clicking on run button or type `python    APIExampleStream.py` on terminal.
8. Chage Server URI in config/global file use python server running URI (Ex:http://192.168.86.39:880)

# Folder Structure

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    components
      Auth
      Chat
    config
      global.js
    pages
      ChatPage.jsx
      LoginPage.jsx
    routes
      routes.js
    store
      authSlice.js
      index.js
    UI
    utils
      helper.js
    index.js
    index.css
```

# Demo

`https://vimeo.com/857616610?share=copy`
