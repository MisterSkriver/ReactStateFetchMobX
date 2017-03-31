import React, { Component } from "react";
import factory from "./personFactory";
import {observer} from "mobx-react";

@observer
class PersonTable extends Component {

    render() {

        const rows = factory.getPersons.map((person) => {
            return(
                <tr key={person._id}>
                    <td>{person.age}</td>
                    <td>{person.name}</td>
                    <td>{person.gender}</td>
                    <td>{person.email}</td>
                    <td>
                        {person.friends.map(function(friend){
                            return(
                                <p key={friend.id}>{friend.id} {friend.name}</p>
                            )
                        })}
                    </td>
                </tr>)
        });

        return (
            <table className="table">
                <thead>
                <tr><th>Age</th><th>name</th><th>Gender</th><th>Email</th><th>Friends</th></tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
        );
    }
}
export default PersonTable;