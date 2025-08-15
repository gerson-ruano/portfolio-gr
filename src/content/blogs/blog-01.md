---
title: "Sistema Ventas GR"
publishedAt: 2025-05-15
description: "Aplicación que permite gestión de productos y ventas de los mismos, administrar roles y permisos de usuarios para ingreso al sistema."
slug: "sistema"
isPublished: true
imagePath: "../../assets/ventasgr.png"
---

## Descripción
Gestión de ventas de productos existentes, visualización de diferentes tipos de reportes en tiempo real con dashboard de graficas.

## Tecnologias empleadas.
> El Framework que he utilizado es Laravel version 9-11 ya que me ha permitido crear fácilmente la estructura básica del proyecto haciendo uso de sus librerías, paquetes y herramientas. 

> Tailwind para el diseño de los estilos del proyecto, Daisy Ui para utilizar componentes prediseñados de tailwind.

> Livewire para crear controlaores y componentes personalizados: para la reactividad de la pagina.

> Breeze para la autenticación de los usuarios. 

> Fontawesome para iconos del sistema. 

> SweetAlert2 para notificaciones interactivas.

## Modulos existentes

El sistema esta en constante actualización para incorporarle mas modulos y mejoras en sus funcionalidades.

> VENTAS,
> ADMINISTRACION DE STOCK,
> REPORTERIA,
> GESTION DE USUARIOS,
> CONFIGURACIÓN,
> API - FACTUS

## MODULO REPORTE DE VENTAS
Muestra una vista general de las ventas realizadas en el sistema, donde se puede realizar consultas y filtrar nuestra busqueda para hacerlas mas especificas, ademas podemos exportar los reportes en PDF y EXCEL.

<img
      class="w-140 h-140 mb-3 shadow-lg border-2 border-neutral-500"
      src="/assets/images/reporte_ventas.png"
    />

## MODULO GRAFICAS
Dashbord de stock, usuarios y ventas realizadas para la toma de decisiones y tener una vision general del sistema y sus activos.

<img
      class="w-140 h-140 mb-3 shadow-lg border-2 border-neutral-500"
      src="/assets/images/graficas.png"
    />

### Ejemplo: Scan Product

```php
public function scanCode($barcode, $cant = 1)
    {
        // Si $barcode viene como array (porque dispatch manda un objeto JS)
        if (is_array($barcode) && isset($barcode['barcode'])) {
            $barcode = trim($barcode['barcode']);
        } else {
            $barcode = trim($barcode);
        }

        $product = Product::where('barcode', $barcode)->first();

        if (!$product) {
            $this->dispatch('showNotification', 'El producto con código ' . $barcode . ' no existe o aún no está registrado', 'dark');
            $this->search = '';
            return;
        }

        $cartItem = $this->getCartItem($product->id);

        if ($cartItem) {
            $this->increaseQty($product->id, $cant);
            return;
        }

        if ($product->stock < $cant) {
            $this->dispatch('showNotification', 'Stock insuficiente para realizar la operación', 'warning');
            return;
        }

        Cart::add($product->id, $product->name, $cant, $product->price, ['image' => $product->image]);
        $this->updateCartSummary();
        $this->updateTotalPrice();
        $this->dispatch('showNotification', 'Producto ' . $product->name . ' agregado exitosamente', 'success');
        $this->dispatch('cartUpdated');

    }
```
### Ejemplo: Update Acash
```php
public function ACash($value)
    {
        if ($value == 0) {
            $value = $this->totalPrice - $this->efectivo;
        }
        $this->efectivo += (float)$value;
        $this->change = ($this->efectivo - $this->totalPrice);
    }
```