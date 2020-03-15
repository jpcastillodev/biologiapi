import React, { Component } from 'react'
import { allAboutIt } from './adn'


class Detect extends Component {
    render() {
        try {
            const dataTable = Object.entries(allAboutIt(this.props.ADN || ""))
            return (
                <>
                    {dataTable.map(([data, result], key) => {
                        return (
                            <p key={key}>
                                <b>{data}</b> : {result}
                            </p>
                        )
                    })}
                </>
            )

        } catch (e) {
            return (
                <h1><b>{e.toString()}</b></h1>
            )
        }
    }

}

export default Detect