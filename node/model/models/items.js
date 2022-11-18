const {listItems, insertItem} = require('../dao/catalogDao');

class Items {
    constructor(p) {
        if (p) {
            if (p.SKU) this.SKU = p.SKU;
            if (p.Descrizione) this.Descrizione = p.Descrizione;
            if (p.Prezzo) this.Prezzo = p.Prezzo;
        }
    }


    // restituisce la lista di tutti i corsi
    static async lista() {
        let catalogDao = await listItems();
        let res = [];
        catalogDao.forEach(e => {
            res.push(new Items(e));
        });
        return res;
    }

    // // restituisce un corso in base all'id
    // static async get(Id) {
    //     let pf = await getCoursesById(Id);
    //     logger.debug("Model Corso Get singolo: ", pf)
    //     if (pf) { return new Courses(pf); }

    //     return null;
    // }

    // // elimina un corso in base all'id
    // static async delete(Id) {
    //     return await deleteCourses(Id);
    // }

    // get/set id oggetto
    getSKU() {
        return this.SKU;
    }

    setSKU(x) {
        if (x == null || typeof (x) == 'undefined') throw 'SKU cannot be null';
        this.SKU = x;
    }

    // // get/set isdeleted corso
    // getIsDeleted() {
    //     return this.IsDeleted;
    // }

    // setIsDeleted(x) {
    //     if (x == null || typeof (x) == 'undefined') throw 'IsDeleted cannot be null';
    //     this.IsDeleted = x;
    // }

    // get/set descrizione oggetto
    setDescrizione(x) {
        if (x == null || typeof (x) == 'undefined') throw 'Descrizione cannot be null';
        this.Descrizione = x;
    }
    getDescrizione() {
        return this.Descrizione;
    }

    // get/set prezzo oggetto
    setPrezzo(x) {
        if (x == null || typeof (x) == 'undefined') throw 'Prezzo cannot be null';
        this.Prezzo = x;
    }
    getPrezzo() {
        return this.Prezzo;
    }

    // crea nuovo oggetto o modifica un oggetto esistente
    async save() {
        if (typeof (this.SKU) != 'undefined' && this.SKU != null) {
        //     let res = await updateCourses(this.Id, this.Titolo, this.Specializzazione, this.Durata, this.Capitoli, this.IdProf, this.IsDeleted
        //     );
        //     if (!res) {
        //         throw 'save Courses failed (update case).';
        //     }
        // } else {
            let res = await insertItem(this.Descrizione, this.Prezzo);
            this.setSKU(res);
            if (!res) throw 'save Item failed (insert case).';
        }
    }
}

module.exports = Items;