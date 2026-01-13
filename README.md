## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## 🧪 Testowanie API (WebStorm HTTP Client)

Wszystkie testy integracyjne API znajdują się w folderze `/test-api`. Korzystamy z wbudowanego w WebStorm narzędzia *
*HTTP Client**, co pozwala na wersjonowanie testów wraz z kodem.

### 📁 Struktura plików

* `auth.http` – Testy logowania i generowania tokenów JWT.
* `todo.http` – Testy operacji na zadaniach (wymagają tokena).

### 🚀 Jak dodawać i uruchamiać testy?

1. **Uruchom serwer:** `npm run start:dev`.
2. **Otwórz plik `.http`:** W WebStormie zobaczysz zielone strzałki (Play) przy każdym zapytaniu.
3. **Zmienne środowiskowe:** Możesz używać pliku `http-client.env.json` do przechowywania tokenów, aby nie wklejać ich
   ręcznie.

---

### 📝 Przykłady zapytań

#### 1. Autoryzacja (`auth.http`)

Weryfikacja procesu logowania. Pamiętaj o zachowaniu spójności z DTO – brakujące pola wyrzucą błąd 400 dzięki
`ValidationPipe`.

```http
### Logowanie (Sukces)
POST http://localhost:3000/auth/login
Content-Type: application/json

{
  "username": "admin",
  "password": "password123"
}

> {% client.global.set("auth_token", response.body.access_token); %}
