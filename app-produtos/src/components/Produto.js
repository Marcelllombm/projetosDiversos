import React from 'react';
import { useParams } from 'react-router';
import styles from './Produto.module.css';
import Head from './Head';

const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const { id } = useParams();

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      }
      catch (erro) {
        setError('Um erro ocorreu')
      } finally {
        setLoading(false);
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`)

  }, [id])

  if (loading) return <div className='loading'></div>
  if (error) return <p>{error}</p>
  if (produto == null) return null;

  return (
    <section className={`${styles.produto} animeLeft`}>
      <Head
        title={`Ranek | ${produto.nome}`}
        description={`Esse é um produto: ${produto.nome}`}
      />
      <div className={styles.itemProduto}>
          {produto.fotos.map(foto => <img className={styles.imgProduto} key={foto.src} src={foto.src} alt={foto.titulo} />)}
  
      </div>
      <div className={styles.itemProduto}>
          <h1 className={styles.nome}>{produto.nome}</h1>
          <span className={styles.preco}>R$ {produto.preco}</span>
          <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </section>
  )
}

export default Produto;