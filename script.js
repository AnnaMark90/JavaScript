class User{
    constructor(data){
        this.id = data.id;
        this.name = data.name;
        this.email = data.email;
        this.address = data.address;
        this.phone = data.phone;
    }

    edit(obj){
        Object.assign(this.data, obj);
        return this;
    };

    get(){
        console.log(`
        Имя - ${this.name}(id:${this.id})
        Номер телефона - ${this.phone}
        Эл. почта - ${this.email}
        Адрес - ${this.address}
        `);
    };
};

class Contacts {
    constructor(){
        data = [];
    };

    add(obj) {
        let user = new User(obj);
        data.push(user);
    };

    edit(id, obj) {
        let id = obj.id;

    };

    remove(id) {
        // let id = obj.id;
        // data.splice(id, 1);
        
        this.user = this.user.filter(user => user.data.id !== id);
        return this;
    };

    get(){ //получение всех контактов(возвр. объект из даты)

    }
};

class ContactsApp extends Contacts{
    constructor() {

    };

    onAdd() {

    };

    onEdit() {

    };

    onRemove() {

    };

    get() {
        super.get();
    }
};
