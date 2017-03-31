import {observable,action} from "mobx";
import React from "react";

class PersonFactory extends React.Component{

    @observable
    persons = [];

    constructor() {
        super();
        this.persons = [];
        setInterval(this.fetchPersons.bind(this),1000);

    }

    @action
    fetchPersons() {
        fetch("http://localhost:4567/api/persons_changing")
            .then(res => res.json())
            .then(action(result => {
                this.persons.replace(result) }))
    }

    getPersons = () => {
        return this.persons;
    }
}

export default new PersonFactory();