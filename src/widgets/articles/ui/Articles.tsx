import sttyles from './Articles.module.css';
import ArticleCard from '@entities/articleCard/ui/ArticleCard';

function Articles() {
  fetch('https://dummyjson.com/posts?limit=12&skip=12&select=title,reactions')
    .then(res => res.json())
    .then(console.log);

  return (
    <section className={sttyles.articles}>
      <div className={sttyles.containerSection}>
        <h2 className={sttyles.title}>
          Latest <span className={sttyles.titleSpan}>Articles</span>
        </h2>
        <ul className={sttyles.articlesList}>
          <ArticleCard
            title="how to order food?"
            hashTags="#history #food"
            rating="7"
            description="It wasn't quite yet time to panic. There was still time to salvage the situation..."
          />
          <ArticleCard
            title="how to order food?"
            hashTags="#history #food"
            rating="7"
            description="It wasn't quite yet time to panic. There was still time to salvage the situation..."
          />
          <ArticleCard
            title="how to order food?"
            hashTags="#history #food"
            rating="7"
            description="It wasn't quite yet time to panic. There was still time to salvage the situation..."
          />
          <ArticleCard
            title="how to order food?"
            hashTags="#history #food"
            rating="7"
            description="It wasn't quite yet time to panic. There was still time to salvage the situation..."
          />
          <ArticleCard
            title="How to Order Food?"
            hashTags="#history #food"
            rating="7"
            description="It wasn't quite yet time to panic. There was still time to salvage the situation..."
          />
          <ArticleCard
            title="How to Order Food?"
            hashTags="#history #food"
            rating="7"
            description="It wasn't quite yet time to panic. There was still time to salvage the situation..."
          />
        </ul>
      </div>
    </section>
  );
}

export default Articles;
