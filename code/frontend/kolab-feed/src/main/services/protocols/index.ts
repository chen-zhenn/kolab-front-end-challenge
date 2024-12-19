export interface IHttpPostQueryParams {
    userId?: number;
    id?: number;
    title?: string;
    body?: string;
    q?: string;
}

export enum HttpStatusMessages {
    servererror = 'Erro interno: Problema ao processar sua solicitação. Tente novamente mais tarde',
    badrequest = 'Dados inválidos: Os parâmetros fornecidos na sua solicitação são inválidos.',
}