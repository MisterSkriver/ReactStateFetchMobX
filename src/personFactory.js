import {observable,action,useStrict,computed} from "mobx";
import React from "react";

useStrict(true);
class PersonFactory extends React.Component{

    @observable
    persons = [];

    constructor() {
        super();
        setInterval(this.fetchPersons.bind(this),1000);
    }

    @action
    fetchPersons() {
        fetch("http://localhost:4567/api/persons_changing")
            .then(res => res.json())
            .then(action(result => {
                this.persons.replace(result) }))
    }

    @computed
    get getPersons() {
        return this.persons;
    }
}

export default new PersonFactory();