---

title: "Form Web"
publishedAt: 2025-11-06
description: "Aplicación que permite crear y administrar formularios para obtencion de datos de entrevistas, capacitaciones, encuestas."
slug: "sistema-de-formularios"
isPublished: true
imagePath: "../../assets/form_activos.png"
---

## Descripción
Aplicación que permite gestionar y crear formularios via WEB para la obtencion de registros de datos.

## Tecnologias empleadas.
> El Framework utilice es Flask. 

> Python 3.11.9.

> Bootstrap.

> Render para subir el sistema.

> CSV, JSON.


## Modulos existentes

El sistema esta en constante actualización para incorporarle mejoras en sus funcionalidades.

> ADMINISTRACION DE FORMULARIOS,

> GENERACION DE QRS,

> DESCARGA DE DATA,

> ADMINISTRACION DE ROLES,

> REGISTRO

## MODULO ADMINISTRACION
Es donde se adminsitran los formularios para que esten disponibles.

<img
      class="w-140 h-140 mb-3 shadow-lg border-2 border-neutral-500"
      src="/assets/images/adm_form.png"
    />

## MODULO DESCARGAS
Permite administrar los datos registraos por los usuarios del sistema.

<img
      class="w-140 h-140 mb-3 shadow-lg border-2 border-neutral-500"
      src="/assets/images/descarga_data.png"
    />

## MODULO GENERADOR QR
Permite generar los accesos a los formularios por medio de codigos qr o enlaces WEB.

<img
      class="w-140 h-140 mb-3 shadow-lg border-2 border-neutral-500"
      src="/assets/images/generador_qr.png"
    />

### Ejemplo: app.py

```python
@app.route("/")
@login_required
def index():
    formularios = []
    if os.path.exists(FORMS_DIR):
        for archivo in os.listdir(FORMS_DIR):
            if archivo.endswith(".json"):
                ruta = os.path.join(FORMS_DIR, archivo)
                with open(ruta, "r", encoding="utf-8") as f:
                    try:
                        config = json.load(f)
                        if not config.get("activo", True):
                            continue  # No mostrar formularios desactivados
                        nombre = os.path.splitext(archivo)[0]
                        formularios.append({
                            "nombre": nombre,
                            "titulo": config.get("titulo", nombre),
                            "descripcion": config.get("descripcion", "")
                        })
                    except json.JSONDecodeError:
                        pass

    return render_template("index.html", formularios=formularios)

@app.route("/formulario/<nombre>", methods=["GET", "POST"])
def formulario(nombre):
    session.pop('_flashes', None)  # Limpia cualquier mensaje previo
    ruta = os.path.join(FORMS_DIR, f"{nombre}.json")
    if not os.path.exists(ruta):
        return f"No se encontró el formulario '{nombre}'.", 404

    with open(ruta, "r", encoding="utf-8") as f:
        config = json.load(f)

    if not config.get("activo", True):
        #return "Este formulario no está disponible en este momento.", 403
        return render_template("components/form_inactivo.html", titulo=config.get("titulo", nombre))

```