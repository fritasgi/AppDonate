import React, { Component, useState } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';

var validacao = false

export default class LikeCounter extends React.Component {

    //construtor para uso do props
    constructor(props) {
        super(props);
    }

    state = {
        reacoes: this.props.reacoes
    }

    //renderização do componente
    render() {
        return (
            <TouchableOpacity
                style={{
                    marginTop: 15,
                    marginLeft: 5,
                    flexDirection: 'row',
                    alignSelf: 'flex-start',
                }}

                onPress={() => this.updateReacao()}>
                <Image
                    style={{
                        width: 20,
                        height: 20,
                        resizeMode: 'stretch',
                    }}
                    source={require('../assets/images/likes.png')} />
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}> {this.state.reacoes}</Text>
            </TouchableOpacity>

        );

    }
    updateReacao() {
        if (validacao === false) {
            var newValue = this.state.reacoes + 1
            validacao = true
            this.setState({ reacoes: newValue })
        } else {
            var newValue = this.state.reacoes - 1
            validacao = false
            this.setState({ reacoes: newValue })

    }
    }
}

LikeCounter.propTypes = { reacoes: PropTypes.number.isRequired };