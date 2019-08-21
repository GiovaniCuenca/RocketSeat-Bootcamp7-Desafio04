import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Desiree Cleveland',
          avatar: 'https://i.pravatar.cc/150?img=1'
        },
        date: '20 Ago 2019',
        content:
          'Ate ira bemdizer fingindo objectou sciencia cre occultes morteque. Tu fortuna ah de retendo resisto manhoso aquella?',
        comments: [
          {
            id: 2,
            author: {
              name: 'Jimi Pitt',
              avatar: 'https://i.pravatar.cc/150?img=12'
            },
            date: '20 Ago 2019',
            content:
              'Se os minha sucia pe pagar cofre. Fui meios ellea sem vasto rindo chave temos. Franganote olhosdisse so um apparecido tu. Os ti tributo chorava fructos barbudo sigamos la. Allumiada do francfort injustica commovida engeitado ma. Passam pau luz ladrao perigo crenca ora ladrao prever ora. As boas eu so sobr um nada. Ah folhas luctar os accesa.'
          },
          {
            id: 7,
            author: {
              name: 'Alessandro Wyatt',
              avatar: 'https://i.pravatar.cc/150?img=18'
            },
            date: '20 Ago 2019',
            content:
              'Um ja tome pola cara sera alem. Namoro meu nao fiquei dei punham vel intima. Vida iii foi ceo acha voos cre.'
          }
        ]
      },
      {
        id: 3,
        author: {
          name: 'Carlton Andersen',
          avatar: 'https://i.pravatar.cc/150?img=8'
        },
        date: '20 Ago 2019',
        content:
          'Diz acho mas tudo faze sobr crer semi? Notou lavar seras mo vivem sr porto conta. Principiou la no ao es representa resfolegar. Avante usando gottas tracos as os de no.',
        comments: [
          {
            id: 4,
            author: {
              name: 'Magdalena Everett',
              avatar: 'https://i.pravatar.cc/150?img=5'
            },
            date: '20 Ago 2019',
            content:
              'Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!'
          },
          {
            id: 5,
            author: {
              name: 'Julius Hawes',
              avatar: 'https://i.pravatar.cc/150?img=11'
            },
            date: '20 Ago 2019',
            content: 'Enviada vou mas tao artista boa chorava!'
          },
          {
            id: 7,
            author: {
              name: 'Alessandro Wyatt',
              avatar: 'https://i.pravatar.cc/150?img=18'
            },
            date: '20 Ago 2019',
            content:
              'Apresento meu apunhalar ama seitornou sao novidades. Valor es tu ferro igual as casas pelas os.'
          }
        ]
      },
      {
        id: 6,
        author: {
          name: 'Carlton Andersen',
          avatar: 'https://i.pravatar.cc/150?img=51'
        },
        date: '20 Ago 2019',
        content:
          'Cavallos respeita exigirem rua meu. Abandonar ha catadupas ou confundem destinado. Vaga toda vim quem agua dar fama. Nao secco junto dar mello ala ancia dar. Sei apontados paulotodo ora commovida vez nao. Te fique de ve ou amiga foram??',
        comments: [
          {
            id: 4,
            author: {
              name: 'Magdalena Everett',
              avatar: 'https://i.pravatar.cc/150?img=5'
            },
            date: '20 Ago 2019',
            content:
              'Vou hesitei guiados reparos jorgeos regular lua. Subindo casados receias vel fio nao retomou com. Crer ii eu vale como seus. Ha reduzida em exemplos ar despediu occultar paulomas quarenta. Sentir vou bem infame linhas dor licoes ultima. Exprimia capricho de tu repellao admissao fraqueza leituras ti. Ve decide ignora ao vedada!'
          },
          {
            id: 5,
            author: {
              name: 'Julius Hawes',
              avatar: 'https://i.pravatar.cc/150?img=11'
            },
            date: '20 Ago 2019',
            content:
              'Perante ouvimos eu ellameu segunda se ve propria. Linha impoz em lh baila na. Fora fara um ca ir ao hoje. Oh discutir es em felicito os portanto. Es juramentos satisfeito desdenhoso fallaremos tu arrepender os la. Tem deu volver dou amavam bem amargo livros saibam.'
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
