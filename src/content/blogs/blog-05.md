---

title: "Contact App"
publishedAt: 2024-12-03
description: "Gestion de contactos en Python con la librería de Flask y mysql, multiples funciones, busqueda, paginado, notificaciones tipo modals"
slug: "sistema_python"
isPublished: true
imagePath: "../../assets/contactApp.png"
---

## Descripción de ultimos cambios
#se agrego Paginate para el paginado de los registros
#se agrego busqueda de contacto.
#se agrego Font awesome para iconos

## Tecnologias empleadas.
> El lenguaje que he utilizado es Python. 

> Base de datos mysql.

> Fontawesome para iconos del sistema. 

> Bootstrap 5

## Funciones existentes

El sistema esta en constante actualización para incorporarle mejoras de diseño y funcionalidad.

> Paginado

> Alertas modal

> busqueda de contactos

> visualización de contactos

> Agregar contactos

> Editar contactos

> Eliminar contactos

### Ejemplo: Add Contact

```py
#Funcion de agregar contacto

@app.route('/add_contact', methods = ['GET','POST'])
def add_contact():
  if request.method == 'POST':
    fullname = request.form['fullname']
    lastname = request.form['lastname']
    phone = request.form['phone']
    email = request.form['email']
    cur = mysql.connection.cursor()
    cur.execute('INSERT INTO contact (fullname, lastname, phone, email) VALUES (%s, %s, %s, %s)',
    (fullname, lastname, phone, email)) 
    mysql.connection.commit()
    flash('Contacto agregado satisfactorimente')
    return redirect(url_for('inicio'))
  return render_template('add_contact.html') 
```
