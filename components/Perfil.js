import React, { Component } from 'react';
import { Button } from 'react-native';
import { ScrollView } from 'react-native';
import { Text, TouchableHighlight, Image, StyleSheet, View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import axiosInstance from '../lib/axios';
import axios from '../lib/axios'
import Editar from './EditarPerfil'


async function cadastrarComentario(pUsuario, pTexto, pPostagem) {
    const user = await axios.post('/comment', { usuario: pUsuario, texto: pTexto, postagem: { codigo: pPostagem } })
};



class Perfil extends React.Component {

    constructor(props) {
        super(props)
        this.getPosts()
    }

    state = {
        usuario: {
            codigo: this.props.auth.user.codigo
        },
        texto: '',
        postagem: '',
        comments: [],
        posts: []
    }

    getPosts = () => {
        axios.get(`/post/user/${this.props.auth.user.codigo}`)
            .then(res => {
                this.setState({ posts: res.data })
                this.getComments(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    getComments = async (posts) => {
        posts.forEach(async post => {
            await axios.get(`/comment/post/${post.codigo}`)
                .then(res => {
                    res.data.forEach(comment => {
                        this.state.comments.push({
                            texto: comment.texto,
                            usuario: comment.usuario.nome,
                            postagem: post.codigo,
                            codigo: comment.codigo
                        })
                    })
                })
                .catch(error => {
                    //console.log(error)
                })
        })
    }
    //renderização do componente
    render() {
        const { auth: { user } } = this.props
        var imagem = null;
        if (user.foto == null) {
            imagem = 'https://cdn.icon-icons.com/icons2/1141/PNG/512/1486395884-account_80606.png'
        } else {
            imagem = user.foto
        }

        const listComment = (codigo) => {
            let comments = []
            comments = this.state.comments.map(comment => {
                if (comment.postagem == codigo) {
                    return (
                        <View style={estilo.coment} key={comment.codigo}>
                            <Text style={estilo.user}>{comment.usuario}</Text>
                            <Text style={estilo.comentario}>{comment.texto}</Text>
                        </View>

                    )
                }
            })
            return comments
        }

        const listPost = () => {
            let posts = []
            posts = this.state.posts.map(post => {
                return (
                    <View style={estilo.item} key={post.codigo}>

                        <View style={estilo.perfilDep}>
                            <Image style={estilo.imagemDep} source={{ uri: 'https://cdn.icon-icons.com/icons2/1141/PNG/512/1486395884-account_80606.png' }} />
                            <Text style={estilo.nomeDep}>{post.usuario.nome}</Text>
                        </View>
                        <Text style={estilo.depoimento}>{post.texto}</Text>

                        <View>
                            <Text style={estilo.reacao}>COMENTÁRIOS:</Text>
                            {listComment(post.codigo)}
                        </View>
                        <View style={estilo.mensagem}>
                            <TextInput
                                style={estilo.input}
                                placeholder="Deixe seu comentário"
                                onChangeText={(value) => this.setState({ texto: value, postagem: post.codigo })} />
                            <TouchableHighlight
                                style={estilo.botaoComentario}
                                onPress={() => {
                                    cadastrarComentario(this.state.usuario, this.state.texto, this.state.postagem)
                                }}>
                                <Text style={{ textAlign: 'center', padding: 2 }}>COMENTAR</Text>
                            </TouchableHighlight>
                        </View>

                    </View>

                )
            })
            return posts
        }

        return (
            <View style={{ backgroundColor: 'white' }}>

                <View style={estilo.viewTitulo}>
                    <TouchableHighlight
                        underlayColor='white'
                        onPress={() => this.props.navigation.openDrawer()}>
                        <Image style={estilo.menu} source={require('../assets/images/menu.png')} />
                    </TouchableHighlight>
                    <Text style={estilo.titulo}>MEU PERFIL</Text>
                </View>
                <ScrollView>
                    <View style={estilo.item}>
                        <View style={estilo.perfil}>

                            <Image style={estilo.imagem} source={{ uri: imagem }} />
                            <View>
                                <Text style={estilo.nome}>{user.nome}</Text>
                                <Text>{user.email}</Text>
                            </View>

                        </View>
                        <View style={estilo.editar}>
                            <TouchableHighlight
                                style={estilo.botaoEditar}
                                onPress={() => this.props.navigation.navigate('Editar', {user})}>
                                <Text style={{ textAlign: 'center', padding: 2, fontWeight: 'bold' }}>EDITAR PERFIL</Text>
                            </TouchableHighlight>
                        </View>

                    </View>
                    {listPost()}
                </ScrollView>

            </View>

        )
    }
}

const mapStateToProps = store => ({
    auth: store.auth
})

export default connect(mapStateToProps)(Perfil);

const estilo = StyleSheet.create({
    editar: {
        justifyContent: 'flex-end'
    },
    nomeDep: {
        fontWeight: 'bold',
        fontSize: 17,
        margin: 10
    },
    comentario: {
        fontSize: 16,
        textAlign: 'justify',
        margin: 5
    },
    imagemDep: {
        width: 30,
        height: 30,
        resizeMode: 'stretch',
        borderRadius: 20
    },
    user: {
        margin: 5,
        fontSize: 16,
        fontWeight: 'bold'
    },
    nome: {
        fontWeight: 'bold',
        fontSize: 17,
        marginTop: 20
    },
    imagem: {
        margin: 10,
        width: 50,
        height: 50,
        resizeMode: 'stretch',
        borderRadius: 20
    },
    perfil: {
        flexDirection: 'row',
        marginLeft: 10
    },
    perfilDep: {
        flexDirection: 'row',
        marginBottom: 10
    },
    depoimento: {
        textAlign: 'justify',
        fontSize: 16,
    },
    coment: {
        marginTop: 5,
        borderWidth: 0.3,
        borderColor: '#D6CBD6',
        backgroundColor: '#F8F8F8'

    },
    reacao: {
        marginTop: 5,
        fontWeight: 'bold',
        color: '#3693BA'
    },
    botaoEditar: {
        backgroundColor: '#3693BA',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        marginHorizontal: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.37,
        shadowRadius: 3.49,
        elevation: 3,

    },
    mensagem: {
        backgroundColor: 'white',
        flexDirection: 'row',
        marginTop: 10,
    },
    botaoComentario: {
        backgroundColor: '#3693BA',
        borderRadius: 10,
        padding: 5,
        marginLeft: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.37,
        shadowRadius: 3.49,
        elevation: 3,

    },
    input: {
        width: 240,
        height: 30,
        backgroundColor: 'white',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5
    },
    item: {
        marginHorizontal: 10,
        margin: 8,
        padding: 10,
        borderWidth: 0.3,
        borderColor: '#D6CBD6',
        borderRadius: 5
    },
    menu: {
        width: 30,
        height: 30,
        resizeMode: 'stretch',
    },
    viewTitulo: {
        flexDirection: 'row',
        paddingTop: 20,
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.49,
        elevation: 5,
    },
    titulo: {
        color: '#3693BA',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 5,
        marginLeft: 10

    },
})
