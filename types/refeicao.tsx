export interface Alimento {
    id: string,
    descricao: string,
    calorias: number,
    proteinas: number,
    peso: number
};

export interface Refeicao {
    id: string,
    descricao: string,
    datahora: Date,
    componentes: Alimento[]    
};