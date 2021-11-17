Vue.component('groupslist', {
    props: ["groups"], // шаблон
    // стили прям внутри просто прописываешь, вот так class="mymessage" (6 строка)
    template: `
    <div>
        <div v-for="group in groups" class="mymessage">
            <table>
                <tr>
                    <img v-bind:src="group.src">
                    <strong>{{group.title}}</strong>
                    <p>{{group.message}}</p>
                </tr>
            </table>
        </div>
    </div>
    `
})
new Vue({
    el: '#app',
    data: {
        groups: [
            { // в фигурных скобках - отдельная группа
                src: '1.jpg', // путь к картинке
                title: 'Title', // название группы
                message: 'Message' // последнее сообщение
            },
            { // это уже другая группа
                src: '1.jpg',
                title: 'Title',
                message: 'Message'
            }
        ]
    }
});