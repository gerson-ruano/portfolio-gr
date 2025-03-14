---
title: "Ventas GR: Sistema de Ventas"
publishedAt: 2024-09-15
description: "Desarrollo de multiples modulos de sistema VentasGR"
slug: "desarrollo-de-multiples-modulos-de-sistema-ventasgr"
isPublished: true
imagePath: "../../assets/ventasgr.png"
---

## Creado utilizando la version 11 de Laravel

Aplicación que permite gestionar productos y ventas de los mismos, administracion de roles y permisos de usuarios para ingreso al sistema asi como compras de productos existentes, visualizaciòn de dashboard.

### Gestion de Carrito de productos

```php
public function updateQuantityProducts()
    {
        foreach (Cart::content() as $item) {
            $this->quantityInputs[$item->id] = $item->qty;
        }
        return $this->totalPrice;
    }
```

> Usando Laravel, puedes separar las capas de presentación de la lógica de negocios usando un marco MVC.

## Optimiza el tiempo de desarrollo en php

En Laravel hay una serie de funciones y estructuras preconstruidas que cumplen con los estándares actuales de PHP, lo que hace posible que los desarrolladores creen aplicaciones web responsivas muy rápidamente. .
