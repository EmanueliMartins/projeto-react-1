import Titulo from './Titulo'
import Imagem from './Imagem'
import Texto from './Texto'
import Gifs from './Gifs'
import Footer from './Footer'
import Cabecalho from './Cabecalho'
import Resumo from './Resumo'
import './App.css'

function App() {

  return (
  <> 
  <header>
  <Cabecalho>Meu diário na Reprograma</Cabecalho>
  </header>

  <nav className="navbar">
    <Imagem image ="https://media.giphy.com/media/PNvmq4eXxxVugAaOZ5/giphy.gif" alt="imagem da desenvolvedora do site, Emanueli Martins" />
    <Titulo title="Prazer, Emanueli Martins" />
  </nav>  

  <section>
    <Resumo>Me chamo Emanueli tenho 24 anos e moro na Baixada Santista. Sou estudante da Reprograma da turma On17 e estou muito feliz com essa oportunidade.</Resumo>
    <hr/>
  </section>

  <article>
      <Titulo title="O que aprendi na Reprograma:" />
    <div className="container">
      <Titulo title="Git/GitHub"/>
      <Gifs image="https://media.giphy.com/media/11QEuO6MtKCl6E/giphy.gif" alt="Gif Mister bean"/>
      <Texto><b>Git</b> é um sistema de controle de versão de arquivos/códigos, ou seja, eu uso o Git para criar versões do meu código. 
      É possível que várias pessoas trabalhem juntas, deforma simuntânea no mesmo código editando e criando novos arquivos e permitindo que 
      os mesmos possam existir sem o risco de suas alterações serem sobrescritas. O <b>GitHub</b> é uma plataforma de hospedagem de código, 
      então os arquivos/códigos que foram criados e versionados são "guardados" no GitHub. Ele permite que outras pessoas cadastradas na 
      plataforma contribuam em projetos privados e possam ver os códigos.</Texto>
    </div>

    <div className="container">
      <Titulo title="HTML"/>
      <Gifs image="https://media.giphy.com/media/mDSGaOdQxzdseSPdAi/giphy-downsized-large.gif" alt="Gif do mr bean"/>
      <Texto> <b>HTML</b> é a sigla de Hypertext Markup Language, ou, em português, linguagem de marcação para hipertexto. São blocos de código
      que formam a estrutura da minha página, é o corpo da página. Estes blocos recebem conteúdo do tipo textos, imagens, vídeos, áudios e links. 
      Quando acessamos uma página na web, o que vemos é a interpretação que o navegador está fazendo de um arquivo HTML, ou seja do que foi construído.</Texto>
    </div>

    <div className="container">
      <Titulo title="CSS"/>
      <Gifs image="https://media.giphy.com/media/igsvLnrCpT6NQftbBd/giphy.gif" alt=" gif do mr bean confuso " />
      <Texto> <b>CSS</b> é a sigla para o termo em inglês Cascading Style Sheets que, traduzido para o português, significa Folha de Estilo 
      em Cascatas. O CSS é focado no estilo toda a estética de um site, me permite dar minha identidade visual ao site e proporcionar ao usuário 
      uma experiência agradável, com um site funcional e bonito.</Texto>
    </div>

    <div className="container">
      <Titulo title="JavaScript"/>
      <Gifs image="https://media.giphy.com/media/J1dG51WZl9tYer2CNm/giphy.gif" alt="Gif do mr. Bean" />
      <Texto><b>JavaScript</b> É uma linguagem de programação de comportamento que permite a criação de conteúdos dinâmicos, controle de mídias 
      e animações para deixar seu site mais interativo e interessante. Aprendi o que é e como utilizar: variáveis, funções, arrays, objetos, loops, 
      métodos de iteração, métodos de extração, métodos de manipulação usando o EC6, callback e tantas outras coisas. É fácil? Não! Entendi todas? 
      Entendi. Mas sei como usar? Ainda não! Mas continuo estudando e me dedicando ao máximo para conseguir aplicar todo aprendizado. Determinação 
      e persistência sempre, pois desistir não é uma opção!</Texto>
    </div>
  </article>

  <footer>
  <Footer>Feito por Emanueli Martins | Aluna Reprograma - Turma On17 | 2022</Footer>
  </footer>
  </>
  )
}

export default App