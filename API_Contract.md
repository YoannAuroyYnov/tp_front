# API Contract

## 1-Informations générales

| paramètre          | valeur                      |
| ------------------ | --------------------------- |
| Nom du projet      | Bookspace                   |
| Version API        | v1.0.0                      |
| URL de base        | http://localhost:300/api/v1 |
| Date de création   | 19 janvier 2026             |
| Format des données | JSON (UTF-8)                |
| Protocole          | HTTP                        |

## 2-Authentification

| paramètre            | valeur                          |
| -------------------- | ------------------------------- |
| Méthode              | JWT (JSON WEB TOKEN)            |
| Header               | `Authorization: Bearer <token>` |
| Durée de validité    | -                               |
| access token         | 1 heure                         |
| refresh token        | 30 jours                        |
| Endpoints auth       | -                               |
| inscription          | `/auth/register`                |
| connexion            | `/auth/login`                   |
| renouvellement token | `/auth/refresh`                 |

## 3-Endpoints métiers

### 3.1-Espaces

| méthode http | url                      | détail                                  |
| ------------ | ------------------------ | --------------------------------------- |
| GET          | /spaces                  | lecture de tous les espaces             |
| GET          | /spaces/:id              | lecture d'un espace                     |
| GET          | /spaces/:id/availability | lecture de la disponibilité d'un espace |
| POST         | /spaces                  | création d'un espace                    |
| PUT          | /spaces/:id              | modification d'un espace                |
| DELETE       | /spaces/:id              | suppression d'un espace                 |

### 3.2-Réservations

| méthode http | url           | détail                             |
| ------------ | ------------- | ---------------------------------- |
| GET          | /bookings     | lecture de toutes les réservations |
| GET          | /bookings/:id | lecture d'une réservation          |
| POST         | /bookings     | création d'une réservation         |
| PUT          | /bookings/:id | modification d'une réservation     |
| DELETE       | /bookings/:id | suppression d'une réservation      |

### 3.3-Avis

| méthode http | url                 | détail                                  |
| ------------ | ------------------- | --------------------------------------- |
| GET          | /reviews/spaces/:id | lecture de tous les avis pour un espace |
| GET          | /reviews/:id        | lecture d'un avis                       |
| POST         | /reviews/spaces/:id | création d'un avis pour un espace       |
| PUT          | /reviews/:id        | modification d'un avis                  |
| DELETE       | /reviews/:id        | suppression d'un avis                   |

## 4-Code HTTP

| code | signification         | méthode associée       | usage                                        |
| ---- | --------------------- | ---------------------- | -------------------------------------------- |
| 200  | OK                    | GET, PUT               | requête réussie                              |
| 201  | created               | POST                   | ressource créée avec succès                  |
| 204  | no content            | DELETE                 | ressource créée avec succès                  |
| 400  | bad request           | GET, PUT, POST, DELETE | erreur de validation ou paramètres invalides |
| 401  | unauthorized          | GET, PUT, POST, DELETE | token manquant ou invalide                   |
| 403  | forbiden              | GET, PUT, POST, DELETE | accès refusé (permissions insuffisantes)     |
| 404  | not found             | GET, PUT, DELETE       | token manquant ou invalide                   |
| 409  | conflict              | PUT, POST              | conflit (ex: créneau déjà réservé)           |
| 422  | unprocessable entity  | PUT, POST              | données valides mais logiquement incorrectes |
| 429  | too many request      | GET, PUT, POST, DELETE | limites de taux dépassées                    |
| 500  | internal server error | GET, PUT, POST, DELETE | erreur serveur                               |
| 503  | service unavailable   | GET, PUT, POST, DELETE | service temporairement indisponible          |

### format de succès

```json
{
  "code": 200,
  "data": [
    {
      "id": 30982,
      "type": "booking_confirmed",
      "title": "Réservation confirmée",
      "message": "Votre réservation pour Salle Innovation Hub le 20/01/2026 est confirmée.",
      "data": {
        "booking_id": 1001,
        "space_name": "Salle Innovation Hub"
      },
      "createdAt": "2026-01-19T15:35:00Z",
      "updatedAt": "2026-01-19T15:35:00Z"
    }
  ]
}
```

### format d'erreur

```json
{
  "code": 400,
  "error": {
    "message": "Les données fournises sont invalides",
    "details": [
      {
        "field": "email",
        "message": "Le format de l'email est invalide",
        "value": "user@invalid"
      }
    ],
    "timestamp": "2026-01-19T17:00:00Z"
  }
}
```

## 5-Webhooks

| evenement                      | description                                 |
| ------------------------------ | ------------------------------------------- |
| `booking.created.{space_id}`   | nouvelle réservation créé pour un espace    |
| `booking.cancelled.{space_id}` | annulation d'une réservation pour un espace |
| `review.created.{space_id}`    | nouvel avis créé pour un espace             |

### format du payload

```json
{
  "event": "booking.created",
  "timestamp": "2026-01-19T15:35:00Z",
  "data": {
    "booking_id": 1001,
    "space_id": 456,
    "user_id": 789,
    "start_datetime": "2026-01-20T09:00:00Z",
    "end_datetime": "2026-01-20T12:00:00Z"
  }
}
```

## 6-Format des données

### dates et heures

- **Format** : ISO 8601 (UTC)
- **Exemple** : 2026-01-19T15:30:00Z

### devises

- **Format** : Nombre décimal avec 2 chiffres après la virgule
- **Code devise** : ISO 4217 (EUR, USD, GBP, etc.)

### téléphones

- **Format** : Format international avec indicatif pays
- **Exemple** : `+33612345678`

### images

- **Formats acceptés** : JPEG, PNG, WebP
- **Taille maximale** : 5MB par image
