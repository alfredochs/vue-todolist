Vue.config.devtools = true;
new Vue({
    el: "#root",
    data: {
        benvenuto: "Hello Vueoolean - ToDoList",
        inputText: "",
        activityList: [
            { testo: "Fare la spesa" },
            { testo: "Studiare" }
        ]
    },
    methods: {
        addActivity() {
            if (this.inputText.trim() === "") {
                return;
            }
            // activity = oggetto dentro l'array, per fare il confronto prendo la chiave di quell'oggetto.
            // in questo caso, la chiave è "testo"
            const attivitaTrovata = this.activityList.some((activity) => {
                return activity.testo.toLowerCase() === this.inputText.trim().toLowerCase();
            });
            console.log(`L'attività è gia inserita nella lista? ${attivitaTrovata}`);
            // sottinteso che è true - cosi -> !attivitaTrovata --> false
            if (attivitaTrovata) {
                alert("attività ripetuta, inserisci un'altra ");
                this.inputText = "";
                return;
            }
            this.activityList.push({
                testo: this.inputText.trim()
            });
            this.inputText = "";
        },
        deleteActivity(indiceDaCancellare) {
            this.activityList.splice(indiceDaCancellare, 1);
        }
    }
});

// Rifare l’esercizio della to do list come fatto assieme in classe:
// - stampare in pagina un item per ogni elemento contenuto in un array
// - ogni item ha una “x” associata: cliccando su di essa, l’item viene rimosso dalla lista
// - predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista
