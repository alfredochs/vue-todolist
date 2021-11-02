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
            this.activityList.push({
                testo: this.inputText
            });
            this.inputText = "";
        }
    }
});

