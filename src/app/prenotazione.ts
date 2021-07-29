export class Prenotazione {
    constructor(
        public id: number,
        public nome : string,
        public cognome : string,
        public codice_fiscale : string,
        public nro_tessera_sanitaria : string,
        public email? : string,
        public tel? : string,
        public indirizzo? : string,
        public cap? : number,
        public citta? : string,
        public messaggio? : string,
        public orario? : string
    ) {}
}