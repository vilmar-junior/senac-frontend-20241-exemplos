import { Vacina } from "./vacina";

export class Vacinacao {
    id: number;
	idPessoa: number;
	vacina: Vacina;
	dataAplicacao: Date;
	avaliacao: number;
}