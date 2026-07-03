# FakeStore

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.0.0.

## Functionality

product-service.ts:
    getProducts
    getProduct(id)
cart-service.ts:
    addToCart(product)
    removeFromCart(id)
    getCart()
    isInCart(product)
user-service.ts:
    isLogined
    getCurrentUser()
    setCurrentUser()
    setRegistredUser()
    logOut()
    loginUser(name , password)
    registredUser(name, password, email)
components:
    about-page
    cart-item
    modal-cart
    product-card
    product-details
    products-list
    side-bar
    user-details
    user-login
models:
    product-model.ts
    user-model.ts

## Development server

To start a local development server, run:

```bash
ng serve
```

`http://localhost:4200/`

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Dependencies

"dependencies": {
    "@angular/common": "^22.0.0",
    "@angular/compiler": "^22.0.0",
    "@angular/core": "^22.0.0",
    "@angular/forms": "^22.0.0",
    "@angular/platform-browser": "^22.0.0",
    "@angular/router": "^22.0.0",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0"
  },
  "devDependencies": {
    "@angular/build": "^22.0.0",
    "@angular/cli": "^22.0.0",
    "@angular/compiler-cli": "^22.0.0",
    "@tailwindcss/postcss": "^4.1.12",
    "jsdom": "^28.0.0",
    "postcss": "^8.5.3",
    "prettier": "^3.8.1",
    "tailwindcss": "^4.1.12",
    "typescript": "~6.0.2",
    "vitest": "^4.0.8"
  }