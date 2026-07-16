# FINAL-TP2-2026-ALOISIO-ALEJANDRO

Sistema de monitoreo de sensores IoT — Taller de Programación 2, Examen Final (15/07/2026)

**Alumno:** Alejandro Aloisio

## Descripción

Backend RESTful en Node.js + Express que recibe, almacena y procesa lecturas de
sensores IoT (TEMPERATURA, HUMEDAD, CO2). Registra cada sensor con su última
lectura y genera alertas según umbrales. La persistencia es en memoria RAM (DAO).

## Instalación

```
npm install
```

## Ejecución

```
npm start
```

El servidor queda corriendo en: **http://localhost:8000**

## Endpoints

### POST http://localhost:8000/lecturas

Recibe una lectura y registra el sensor (o actualiza su última lectura si ya existe).

Body (JSON):

```json
{
  "id": "SEN4A9X1",
  "tipo": "TEMPERATURA",
  "valor": 40,
  "timestamp": "2025-12-01T18:30:00Z"
}
```

Respuesta — 201 si el sensor es nuevo, 200 si se actualizó:

```json
{
  "id": "SEN4A9X1",
  "tipo": "TEMPERATURA",
  "valor": 40,
  "timestamp": "2025-12-01T18:30:00Z",
  "alerta": "TEMPERATURA alta"
}
```

Si no corresponde alerta, `"alerta": null`.

### GET http://localhost:8000/sensores

Lista todos los sensores con su última lectura:

```json
[
  {
    "id": "SEN4A9X1",
    "tipo": "TEMPERATURA",
    "valor": 40,
    "timestamp": "2025-12-01T18:30:00Z"
  }
]
```

## Validaciones

- `id`: exactamente 8 caracteres alfanuméricos
- `tipo`: TEMPERATURA, HUMEDAD o CO2
- `valor`: numérico
- `timestamp`: string

## Alertas

- TEMPERATURA: si valor > 35 → "TEMPERATURA alta"
- HUMEDAD: si valor < 20 → "HUMEDAD baja"
- CO2: si valor > 1000 → "CO2 alto"

En caso de error, el servidor responde `{ "errorMsg": "motivo" }` con el código
de estado correspondiente (por ejemplo, 400 para datos inválidos).