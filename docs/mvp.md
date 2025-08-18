# MVP – App de Gestión de Tareas Personales

## 1. Problema a solucionar
Las personas no saben cuánto tiempo invierten realmente en sus tareas diarias o semanales.  
La app ofrece **gratificación visual y personal** al mostrar horas invertidas y progreso, motivando a completar más tareas.  
Enfoque: **flexible**, “hazlo cuando quieras”, no horarios estrictos.

---

## 2. Público objetivo
- Personas que buscan gestionar tareas personales o profesionales de forma simple.  
---

## 3. Funcionalidades principales

### Autenticación de usuario (OAuth)

- Inicio de sesión mediante **Google** u otros proveedores OAuth.  

### Espacios de trabajo
- Crear y gestionar espacios de trabajo aislados.  

### Plantillas de tareas (opcional)
- Plantilla base de tareas: define **nombre, prioridad, estimativo y día de la semana**.  
- Se puede usar para **repetir la semana anterior**.  
- La plantilla **no guarda horas ni estado** de ejecución.

### Tareas (entidad independiente)
- Cada tarea tiene:  
  - Nombre / descripción  
  - Prioridad  
  - Estimativo de duración  
  - Estado: pendiente / realizada / cancelada  
  - Notas de finalización o cancelación  
  - Fecha específica (para filtrado semanal)  
- Las instancias de tareas se crean:  s
  - Manualmente  
  - Automáticamente al **repetir la semana anterior**  

### Instancias semanales
- Semana actual = **filtrado lógico** de tareas por fecha (lunes → domingo).  
- Se muestran en columnas: Lunes → Domingo.  
- Al repetir semana anterior: se crean nuevas **instancias** con fechas actualizadas y estado reiniciado.

### Dashboard
- Visualización de horas invertidas por tarea, por día y por semana.  
- Resumen gráfico de progreso total.  
- Motivación visual: barras de progreso, colores según estado.

### Calendario mensual
- Vista rápida del mes con bloques por día mostrando tareas asignadas.  
- Sencillo, solo visualización, sin necesidad de duplicar datos.

---

## 4. Flujo de uso del MVP
1. Crear espacio de trabajo.  
2. Crear plantillas de tareas o usar la semana anterior.  
3. Crear instancias de tareas para la semana actual (copiando definición o plantilla).  
4. Marcar tareas como realizadas/canceladas y agregar notas.  
5. Visualizar progreso en dashboard filtrando por rango de fechas (semana actual).  
6. Repetir semana anterior si se quiere mantener la misma estructura para la próxima semana.

---

## 5. Roadmap MVP Fases

### Fase 1 – Core
- Crear espacios de trabajo.  
- Crear tareas con fecha, prioridad y estimativo.  
- Marcar tareas realizadas/canceladas con hora y notas.  
- Dashboard básico de horas invertidas por semana.  
