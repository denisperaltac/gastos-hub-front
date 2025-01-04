export interface GastosType {
  gastoId: number;
  name: string;
  categoriaId: number;
  fechaEfectuado: string;
  monto: number;
  notes?: string;
  pagado?: boolean;
}

export interface IngresoType {
  ingresoId: number;
  monto: number;
  type: string;
  fecha?: string;
}

export interface FormState {
  montoMin?: number;
  montoMax?: number;
  categoriaId?: number;
  dateFrom?: string;
  dateTo?: string;
  page?: number;
  sort?: string;
}

export interface TableParams {
  pagination: {
    current: number;
    pageSize: number;
    total?: number;
  };
  sortOrder?: string;
  sortField?: string;
  filters?: any;
}

export interface ListaGastosProps {
  reloadGastos: number;
}

export interface ListaIngresosProps {
  reloadIngresos: number;
}
