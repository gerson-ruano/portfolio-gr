---

title: "Mejorador de CVs"
publishedAt: 2025-11-07
description: "Aplicación que permite analizar y mejorar nuestro CV para entrevistas."
slug: "sistema-de-analizador-cvs"
isPublished: true
imagePath: "../../assets/mejorador_inicio.png"
---

## Descripción
Aplicación que permite analizar nuestros CVS como aspirante algun trabajo o como reclutador, este sistema esta en constante mejora para incorporale funcionalidades como:

> Roles en la aplicacion tanto como usuario normal o como reclutador.

> Enfocarlo a otros rubros, ya que por ahora esta enfocado a TI 

> Analisis en bloque de CVs

## Tecnologias empleadas.
> El Framework que utilice es Streamlit 

> Python 3.11.

> Html, CSS.

> Streamlit.io - para subir el sistema a la WEB.

> PDF, TXT.


## Modulos existentes

El sistema esta en constante actualización para incorporarle mejoras en sus funcionalidades.

> NAVEGACION ENTRE PAGINAS,

> GENERACION ANALISIS DE CV,

> SUGERENCIAS DE MEJORAS DE CV,


## MODULO GENERACION DE ANALISIS DE CV
Es donde se adminsitran los formularios para que esten disponibles.

<img
      class="w-140 h-140 mb-3 shadow-lg border-2 border-neutral-500"
      src="/assets/images/analizador_cvs.png"
    />

## MODULO MEJORA DE CV
Permite analizar los CVS de los aspirantes a un puesto usandolo como reclutador en el sistema.

<img
      class="w-140 h-140 mb-3 shadow-lg border-2 border-neutral-500"
      src="/assets/images/mejorador_cvs.png"
    />

### Ejemplo: Mejorador.py

```python
st.markdown('<h1 class="main-header">✨ Mejorador Profesional de CV</h1>', unsafe_allow_html=True)
    st.markdown('<p class="sub-header">Analiza y mejora la forma, estructura y presentación de tu Curriculum Vitae</p>', unsafe_allow_html=True)
    
    # Sidebar específico
    with st.sidebar:
        st.header("📤 Sube tu CV")
        
        uploaded_file = st.file_uploader(
            "**Selecciona tu archivo**",
            type=['pdf', 'docx', 'txt'],
            help="Formatos soportados: PDF, Word (DOCX), Texto (TXT)"
        )
        
        st.markdown("---")
        st.header("🎯 ¿Qué analizamos?")
        st.markdown("""
        - **🏗️ Estructura**: Organización y secciones
        - **📝 Contenido**: Calidad de escritura y verbos de acción  
        - **🎨 Formato**: Presentación y legibilidad
        - **✅ Completitud**: Información esencial
        - **💡 Recomendaciones**: Mejoras específicas
        """)
        
        st.markdown("---")
        st.header("💡 Consejos Rápidos")
        st.markdown("""
        - **Verbos de acción** al inicio de cada punto
        - **Logros cuantificables** con números
        - **Estructura clara** con secciones definidas
        - **Longitud ideal**: 300-800 palabras
        - **Formato limpio** y profesional
        """)
        
        st.markdown("---")

```