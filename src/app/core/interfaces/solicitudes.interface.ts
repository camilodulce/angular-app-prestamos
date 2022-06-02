export interface solicitud {
    nombre: string,
    correo: string,
    cedula: string,
    valor: number,
    fecha?: string,
    pendiente_pagar: number,
    id?: number
}