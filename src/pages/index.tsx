import Image from 'next/image';
import {Article, Data} from './types';
import {motion} from 'framer-motion';
import Animations from './animations';
import {useRouter} from 'next/router';

export default function Home({articles}: {articles: Article[]}) {
    const router = useRouter();
    console.log(articles)
    return (
        <section className="w-full py-6 md:py-12 lg:py-16">
            <div className="container grid md:gap-6 px-4 md:px-6">
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter">Latest Tech News & Updates</h2>
                    <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">Stay up to date with the latest news</p>
                </div>
                <motion.ul
                    variants={Animations.container}
                    initial="hidden"
                    animate="visible"
                    className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
                >
                    {articles.map((article: Article) => (
                        <motion.li
                            onClick={(e) => {
                                e.preventDefault();
                                router.push({
                                    pathname: '/article',
                                    query: {
                                        title: article.title,
                                        content: article.content,
                                        urlToImage: article.urlToImage,
                                        publishedAt: article.publishedAt,
                                        author: article.author,
                                    },
                                });
                            }}
                            whileHover={Animations.buttonWhileHover}
                            variants={Animations.item}
                            key={`${article.author}_${article.publishedAt}`}
                        >
                            <div className="space-y-2">
                                <Image
                                    alt="Image"
                                    className="aspect-video overflow-hidden rounded-lg object-cover"
                                    height="225"
                                    src={article.urlToImage !== null ? article.urlToImage : '/placeholder.jpeg'}
                                    width="400"
                                />
                                <h3 className="text-xl font-bold">{article.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400">{article.description}</p>
                            </div>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </section>
    );
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://newsapi.org/v2/everything?q=tech&apiKey=${process.env.API_KEY}`);
    const data: Data = await res.json();
    const articles = data.articles
        .filter((article: Article) => article.author !== null && article.content !== '[Removed]')
        //@ts-expect-error
        .sort((a: Article, b: Article) => new Date(b.publishedAt) - new Date(a.publishedAt));

    // Pass data to the page via props
    return {props: {articles}};
}
