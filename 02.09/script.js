// /*
// - Note - описание одной заметки
// - NoteController - логика работы заметок
// - NoteUI - граф. отоброжение
// - ДЗ.ДОП - стилизация!!!!!!!!!!!!
// // */

class Note{
    constructor(data){
       if(data.title.length > 0) this._data = data;
    };

    // edit(data){
    //     Object.assign(this._data, data);
    // };

    get data() {
        return this._data;
    };

    set data(data) {
        Object.assign(this._data, data);
    };
};

class NoteController{
    constructor(){
        this.notes = [];
    };

    add(data){
        if(!data.title) return;
        let note = new Note(data);
        let id = this.getRandom();
        note.data = {id: id};
        this.notes.push(note);
    };

    getRandom() { 
        let id = Math.floor(Math.random() * 100);
        if(this.notes.length === 0) return id;
        let check = this.notes.every(note => note.data.id === id);
        if(check){
            return this.getRandom();
        }else {
            return id;
        };
    };

    remove(id){
        this.notes = this.notes.filter(note => note.data.id !== id);
        return this;
    };

    edit(id, data){
        this.notes.forEach(note => {
            if (note.data.id === id) note.data = data;   
        });
    };
};

class NoteUI extends NoteController{
    constructor(selector) {
        super();
        this.container = null;
        this.noteContainer = null;
        this.init(selector);
    };

    init(selector){
        // this.getCookie();
        this.container = document.querySelector(selector);
       
        let formContainer = this.createElement('div', [
            ['class', 'form']
        ]);

        let form = this.createElement('form');

        let inputTitle = this.createElement('input', [
            ['type', 'text'],
            ['placeholder', 'Enter title'],
            ['class', 'title_input']
        ]);

        let contentInput = this.createElement('input', [
            ['type', 'text'],
            ['placeholder', 'Enter content'],
            ['class', 'content_input']
        ]);

        let btn = this.createElement('button', [
            ['type', 'submit']
        ], 'add');

        this.noteContainer = this.createElement('div', [
            ['class', 'notes']
        ]);

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.add({
                title: inputTitle.value,
                content: contentInput.value,
            });

        inputTitle.value = '';
        contentInput.value = '';
        this.render();
    });

    form.append(inputTitle,contentInput, btn);
    formContainer.append(form);
    this.container.append(formContainer, this.noteContainer);

    if(!this.storage) return;
    if(this.storage.length > 0){
        let notes = JSON.parse(this.storage);
        notes.forEach(note =>{
            for(let key in note){
                this.add(note[key]);
        }});
        this.render();
    };
 };

    createElement(element, attribute = [], content){
        let elem = document.createElement(element);
        if(attribute.length > 0){
            attribute.forEach(attr => {
                elem.setAttribute(attr[0], attr[1]);
            });
        };

        if(content) elem.innerHTML = content;
        
        return elem;
    };

    render(){
        this.noteContainer.innerHTML = '';
        this.notes.forEach(note => {
            let flag = true;
            let noteElem = this.createElement('div', [
                ['class', 'note']
            ]);

            let title = this.createElement('h2', [], note.data.title);
            // title.addEventListener('keydown', e => this.edit(
            //     e, 
            //     note.data.id, 
            //     title, 
            //     content
            // ));

            let content = this.createElement('p', [], note.data.content);
            content.addEventListener('keydown', e => this.edit(
                e, 
                note.data.id, 
                title, 
                content
            ));

            let editBtn = this.createElement('button', [], 'Edit');
            let removeBtn = this.createElement('button', [], 'Remove');

            removeBtn.addEventListener('click', () => {
                this.remove(note.data.id).render();
            });

            editBtn.addEventListener('click', (e) => {
                if(flag){
                    title.contentEditable = true;
                    content.contentEditable = true;
                    editBtn.innerText = ' Save';
                    flag!== flag
                }else{
                    this.edit(
                        e, 
                        note.data.id, 
                        title, 
                        content
                    );
                    editBtn.innerText = 'Edit';
                    flag!== flag 
                };
                
            });

            noteElem.append(title, content, editBtn, removeBtn);
            this.noteContainer.append(noteElem);
            this.storageEpiration();
            this.storage = this.notes;
        });
    };

    edit(e, id, title, content) {
        // if(e.ctrKey && e.code === 'Enter') {
            let data = {
                title: title.innerText,
                content: title.innerText,
            };
            title.contentEditable = false;
            content.contentEditable = false;

            super.edit(id, data);
            this.render();
        // };
    };

    get storage(){
        return localStorage.getItem('notes');
    };

    set storage(notes) {
        let notesBuffer = JSON.stringify(notes);
        console.log(notesBuffer);
        localStorage.setItem('notes', notesBuffer);
    };

    //13 ДЗ!!!

    async getData() {
        if(localStorage === '' && localStorage === 0) return;
        let url = 'https://jsonplaceholder.typicode.com/users';

        await fetch(url).then((response) => {
            if(!response.ok) return;
            return response.json();
        }).then((tData) => {
            tData.forEach((el)=>{
                note = {
                    title: el.name,
                    content: el.email
                }
            });
        });
    };

    // storageEpiration(){
    //     if(!this.getCookie('note')){
    //         localStorage.removeItem('notes');
    //     }

    //     this.setCookie('note', 'note', {'max-age' : 50});
    // }

    // setCookie(name, value, options = {}) {

    //     options = {
    //     path: '/',
    //     // при необходимости добавьте другие значения по умолчанию
    //     ...options
    //     };
    
    //     if (options.expires instanceof Date) {
    //     options.expires = options.expires.toUTCString();
    //     }
    
    //     let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    
    //     for (let optionKey in options) {
    //     updatedCookie += "; " + optionKey;
    //     let optionValue = options[optionKey];
    //     if (optionValue !== true) {
    //         updatedCookie += "=" + optionValue;
    //     }
    //     }
    
    //     document.cookie = updatedCookie;
    // }

    // getCookie(name) {
    //     let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    //     return matches ? decodeURIComponent(matches[1]) : undefined;
    // };
};

let noteUI = new NoteUI('.root');


//Замыкание

// function makeCounter() {
//     let count = 0;
//     return function () {
//         return count++;
//     };
// };

// const counter1 = makeCounter();
// const counter2 = makeCounter();
// const counter3 = makeCounter();

// setTimeout(() => console.log('hi'), 0);

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// };

// async function ff() {
//     let time = await fetch;
//     return time;
// };

