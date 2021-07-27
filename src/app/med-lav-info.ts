export class MedLavInfo {
    constructor(
        public nome_azienda : string,
        public nome_responsabile : string,
        public cognome_responsabile : string,
        public email : string,
        public tel : string,
        public richiesta : string,
        public settore_azienda? : string,
    ) {}
}