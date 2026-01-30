# ☁ Weather Widget

Weather widget sviluppato come take-home challenge per Freedome.  
Il componente è pensato per essere integrato all’interno delle pagine attività del marketplace e mostra le previsioni meteo della località in cui si svolge l’esperienza.

Il progetto è stato sviluppato con l’obiettivo di simulare un contesto reale di lavoro in team, privilegiando leggibilità, manutenibilità e attenzione ai dettagli.

---

## 🎯 Obiettivo

Realizzare un widget frontend che:
- mostri il meteo **attuale**
- le previsioni delle **prossime 5 ore**
- le previsioni dei **prossimi 5 giorni**
- permetta la navigazione tra le viste tramite **swipe**
- riceva la località come **parametro esterno**, non selezionabile dall’utente

---

## 🧩 Caratteristiche principali

- Componente React **riusabile e isolato**
- Navigazione swipe tra le viste
- Dati meteo in tempo reale tramite API OpenWeather
- Gestione di stati di loading ed errore
- Layout responsive, pensato per essere embedded in una pagina esistente

---

## 🛠 Tech Stack

- **React** (Vite)
- **JavaScript (ES6+)**
- **TailwindCSS** per lo stile
- **Axios** per le chiamate HTTP
- **OpenWeather API**

---

## 📁 Struttura del progetto
```bash
src/
├─ components/ 
│ ├─ CurrentWeather.jsx
│ ├─ DailyWeather.jsx
│ ├─ HourlyWeather.jsx
│ ├─ SwipeContainer.jsx
│ └─ WeatherWidget.jsx
├─ hooks/
│ └─ useWeather.js
├─ services/
│ └─ weatherApi.js

```

- `services`: gestione delle chiamate API
- `hooks`: logica di fetch, loading ed error handling
- `components`: componenti presentazionali e widget principale

---

## 📦 Setup locale

1. Clona il repository
```bash
git clone https://github.com/MatteoGranata/freedome-weather-widget.git
```

2. Installa le dipendenze 
```bash
npm Install
```

3. Rinomina il file `.env.example` in `.env` e inserisci la tua API key di OpenWeather 
```bash
VITE_OPENWEATHER_API_KEY=your_api_key_here
```
4. Avvia il progetto in locale
```bash
npm run dev
```

## 🔑 Utilizzo del componente

Il widget riceve la località come prop

```bash
<WeatherWidget
  location={{
    lat: 43.99,
    lon: 10.64
  }}
/>
```



In questo modo il componente è facilmente riutilizzabile per qualsiasi attività senza modifiche interne.

## 🧠 Scelte progettuali

- `Separazione delle responsabilità:` la logica di fetch è isolata in un custom hook (`useWeather`), mentre i componenti si occupano solo del rendering.
- `API:` `/forecast` di OpenWeather consete di coprire sia le previsioni orarie che giornaliere riducendo il numero di chiamate.
- `TailwindCSS:` scelto per garantire consistenza visiva e velocità di sviluppo.

## 🚧 Possibili miglioramenti futuri

- Migliorare normalizzazione dei dati meteo
- Animazioni di transizione tra i componenti
- Inserimento di icone personalizzate
- Gestione di fallback UI più avanzati

## 🔗 Live Demo
https://freedomeweatherwidget.netlify.app/

## Autore

- [@MatteoGranata](https://github.com/MatteoGranata)

