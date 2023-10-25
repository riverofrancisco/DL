export interface ErrorResponse {
    status: number; // Código de estado HTTP del error (por ejemplo, 404, 500, etc.)
    type: string;   // Tipo de error (puede ser una cadena descriptiva)
    message: string; // Mensaje de error detallado
    data?: any; // Datos adicionales relacionados con el error (opcional)
}