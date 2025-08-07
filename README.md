# 🎶 Progetto My Playlist

**My Playlist** è un'applicazione web sviluppata con **React** che visualizza una playlist musicale in modo dinamico e personalizzata.

---

## 🚀 Funzionalità

- Visualizzazione di una playlist musicale.
- Componenti React modulari.
- Dati recuperati tramite le API di Spotify.

---

## 🛠️ Architettura del Progetto

Il progetto è stato sviluppato in due fasi principali:

### 1. 📡 Generazione dei Dati (API di Spotify)

Per ottenere i dati musicali, sono state utilizzate le **API di Spotify for Developers**.  
Queste API permettono di accedere ai dati di una playlist, che vengono poi salvati in un file locale chiamato `playlist.json`.

Questo file funge da **database statico** per l'applicazione, e contiene:

- Titolo della canzone
- Nome dell'artista
- URL della copertina dell'album

---

### 2. 🎨 Implementazione Front-End (React)

Una volta ottenuti i dati, è stata costruita l'interfaccia utente con **React**, utilizzando componenti modulari:

#### 🔹 `App.jsx`

Il componente principale che:

- Carica i dati da `playlist.json`
- Passa la playlist al componente figlio `SongList`

#### 🔹 `SongList.jsx`

Questo componente:

- Riceve la playlist come `props`
- Itera su ogni traccia
- Crea un componente `SongCard` per ogni traccia

#### 🔹 `SongCard.jsx`

Il componente più dettagliato, che:

- Riceve le informazioni di una singola traccia
- Mostra titolo, artista e copertina in una card stilizzata

---


## 🧪 Tecnologie Utilizzate

- ⚛️ **React** – Libreria per la creazione dell'interfaccia utente
- ⚡ **Vite** – Dev server e bundler moderno
- 🟨 **JavaScript (ES6+)**
- 🎨 **CSS** – Stili personalizzati
- 🎧 **Spotify Web API** – Recupero dei dati musicali

## 👤 Autore

Sviluppato da **Pietro Saccomando**

GitHub: https://github.com/saccomando-pietro

