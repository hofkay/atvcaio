const ordem = {
    alfabetica: ['Paris', 'Brasil', 'Japão', 'Anastácio', 'Austrália'],
    alfa: function () {
        this.alfabetica.sort();
        console.log(this.alfabetica);
    }
};
ordem.alfa();

const remov = {
    numeros: [5, 1, 6, 2, 0],
    remover: function () {
        this.numeros.pop();

        console.log(this.numeros);
    }
};

remov.remover();
   
const array = {
    numerosUm: [1, 9, 4, 7, 2],
    numerosDois: [3, 8, 2, 5,],
    metodo: function () {
        this.numerosUm.push(...this.numerosDois);
        this.numerosUm.sort();
        this.numerosDois.sort();
        console.log(this.numerosUm);
    }
};
array.metodo()

const desordem = {
    bagunca: ['Uberlandia','Mexico' ,'Canada','Chile','Rússia'],
    desordemAlfa: function () {
        this.bagunca.reverse();
        console.log(this.bagunca);
    }
};
desordem.desordemAlfa();
