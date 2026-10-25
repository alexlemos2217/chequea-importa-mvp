# Chequeá Importa — MVP 0.1

Una aplicación web responsiva para **simular costos de importación a Uruguay** y **organizar expedientes personales**, sin registro ni backend.

## Para abrirla ahora

1. Descomprimí este ZIP.
2. Abrí `index.html` con Chrome o Edge. Para que el almacenamiento local sea más estable, recomendamos usar un servidor local (ver abajo).
3. Entrá en **Simulador**, probá distintos precios y guardá un expediente.
4. En **Mis expedientes** podés cargar facturas PDF / imágenes, anotar tracking, marcar una lista de preparación e imprimir un informe (podés seleccionar *Guardar como PDF*).

### Servidor local recomendado

Desde la carpeta del proyecto:

```bash
python -m http.server 8080
```

Abrí <http://localhost:8080>.

## Cómo publicarla gratis en Netlify

1. Entrá a <https://app.netlify.com/> e iniciá sesión.
2. Elegí **Add new project** → **Deploy manually** o abrí <https://app.netlify.com/drop>.
3. Arrastrá **la carpeta descomprimida `chequea-importa-mvp`** al área de despliegue (si tu navegador no deja arrastrar carpetas, subí un ZIP del contenido de la carpeta).
4. Netlify te dará una URL HTTPS pública. No necesita comandos de compilación, claves ni instalar dependencias.
5. Al actualizar cualquiera de los archivos, volvé a desplegar la carpeta actualizada.

**Importante:** los expedientes y documentos se guardan en el **navegador de cada persona**; al publicarla, NO se crea una base compartida ni un sistema de cuentas.

## Funcionalidades incluidas

- Dashboard responsive y navegación móvil.
- Simulación del régimen de franquicia de envíos internacionales vigente desde el 01/05/2026 y del régimen simplificado al 60%.
- Control informativo de topes anuales: hasta 3 envíos y US$ 800 (entrada manual, sin conexión con Aduanas).
- Señalización del registro del vendedor estadounidense para exoneración de IVA a partir del 03/11/2026.
- Estimación orientativa de IVA con tasa general del 22%: **no es liquidación oficial**.
- Comparación manual entre costo final estimado y precio de compra local.
- Expedientes de compra con notas, estado manual, datos de courier y tracking.
- Adjuntos PDF e imágenes guardados en IndexedDB, 8 MB máximo por archivo.
- Checklist de documentación y descarga mediante impresión como PDF.
- Exportación de expedientes en JSON (no incluye adjuntos) y borrado completo de los datos locales.

## Limitaciones de esta versión

- No tramita ante Aduanas, no declara envíos y no cobra impuestos.
- No conecta con couriers ni puede determinar estados de envío en tiempo real.
- No lee un enlace de Amazon ni obtiene precios o cotizaciones automáticamente.
- No verifica permisos especiales por categoría ni todos los requisitos legales.
- No almacena documentación en nube y **no es apta como archivo seguro para documentos sensibles en equipos compartidos**.
- Los presupuestos son aproximados. Para impuestos definitivos y condiciones aplicables, consultar la documentación oficial y al operador postal.
- La exoneración desde EE. UU. requiere condiciones adicionales verificables; desde el 03/11/2026, el registro del emisor ante Aduanas es obligatorio para esa exoneración.

## Fuentes oficiales

- Franquicia: <https://www.aduanas.gub.uy/innovaportal/v/28221/1/innova.front/>
- Régimen simplificado: <https://www.aduanas.gub.uy/innovaportal/v/28222/1/innova.front/>
- Régimen general: <https://www.aduanas.gub.uy/innovaportal/v/28223/1/innova.front/>
- Preguntas frecuentes: <https://www.aduanas.gub.uy/innovaportal/v/28231/1/innova.front/>

Fuentes verificadas el 24 de octubre de 2026. Revisar vigencia antes de utilizar comercialmente.

## Próximo paso técnico recomendado

Cuando esta prueba valide interés real, migrar a React + Vite, Supabase Auth + PostgreSQL con RLS por usuario, Supabase Storage privado con acceso firmado y Edge Functions para consultas externas. Añadir administración versionada de reglas, integraciones oficiales con couriers bajo acuerdo y pruebas automatizadas del motor de cálculos. **Nunca colocar `service_role` de Supabase ni contraseñas de terceros en el frontend.**
