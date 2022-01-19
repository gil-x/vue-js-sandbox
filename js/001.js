new Vue({
    el: '#app',
    data: {
        sample: 'Hello world!',
        link: 'https://gil-web.com',
        tools: [ 'computer', 'pen', 'paper'],
        clicks: 0,
        x: 0,
        y: 0,
    },
    methods: {
        changeSample: function(event) {
            this.sample = event.target.value;
        },
        increment: function(event) {
            this.clicks++;
        },
        updateXY: function(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        releaseButton: function(event) {
            event.target.style.backgroundColor = "red";
        }
    }
});
