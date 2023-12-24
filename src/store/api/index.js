export const baseUrl = 'https://openlibrary.org/search.json?title=';
export const bookDetailsUrl = 'https://openlibrary.org/works/';


// obs: crie uma área sobre/about fake; se o livro pesquisado não tiver description, por exemplo, trate esse problema no objeto criado antes de ir para um state. Só retorne na busca por um livro uns 20 livros usando slice...
    // exemplo de pesquisa do livro senhor dos anéis
    //https://openlibrary.org/search.json?title=the+lord+of+the+rings
    // o que eu vou querer da api para a página principal
    //const {key, author_name, cover_i, edition_count, first_publish_year, title}...
    // o que eu vou querer da api para a página de detalhes
    // const {description, title, covers, subject_places, subject_times, subjects}...
    // pegar o url da imagem do livro
    //https://covers.openlibrary.org/b/id/${cover_i}-L.jpg
    // o que eu vou renderizar na página principal
    //title
    //Author
    //total Editions
    //First Publish Year
    //Image
    // o que eu vou querer para a página de detalhes
    // title
    // description
    // subject Places
    // subject times
    //subjects
    //para pegar os dados individuais de cada livro
    //https://openlibrary.org/${key}.json